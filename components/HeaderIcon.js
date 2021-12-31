const HeaderIcon = (props) => {
  const { Icon } = props;
  console.log(Icon);
  return (
    <div className="group md:px-10 hover:text-gray-800 rounded-xl active:border-b-2 active:border-blue-500 md:hover:bg-gray-200">
      <Icon
        className={`h-5 sm:h-7 mx-auto items-center group-hover:text-blue-500  cursor-pointer `}
      />
    </div>
  );
};

export default HeaderIcon;
