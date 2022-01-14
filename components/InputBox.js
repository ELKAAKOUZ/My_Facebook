import Image from "next/image";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import firebase from "firebase";
import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value && imageToPost) return;
    fetch("https://myfacebook-52de7-default-rtdb.firebaseio.com/Posts.json", {
      method: "POST",
      body: JSON.stringify({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        postImage: imageToPost,
        time: firebase.firestore.Timestamp.now().toDate().toISOString(),
      }),
    });
    removeImage();
    inputRef.current.value = "";
  };

  const addFileToPost = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    console.log(imageToPost);
  };

  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className=" bg-white font-medium max-w-xs sm:max-w-md md:max-w-2xl   mt-6 p-2 rounded-2xl shadow-md  text-gray-500">
      <div className="flex items-center space-x-4 p-4">
        <Image
          width={40}
          className="rounded-full"
          height={40}
          layout="fixed"
          src={session.user.image}
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="px-2 text-xs  sm:text-lg  sm:px-5 bg-gray-300  flex-grow focus:outline-none h-12  rounded-full"
            type="text"
            placeholder={`whats is in your mind ${
              session.user.name.split(" ")[0]
            } ?`}
          />
          <button type="submit" hidden onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-100 transition duration-200 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="object-contain h-10"
              src={imageToPost}
              alt="imagetopost"
            />
            <p className="text-xs text-red-500 text-center ">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly  whitespace-nowrap p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-5 sm:h-7 text-red-500" />
          <p className="text-xs sm:text-sm lg:text-base ">Live video</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-5 sm:h-7 text-green-400" />
          <p className="text-xs sm:text-sm lg:text-base ">Upload photo</p>
          <input
            ref={filePickerRef}
            onChange={addFileToPost}
            hidden
            type="file"
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-5 sm:h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm lg:text-base ">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
