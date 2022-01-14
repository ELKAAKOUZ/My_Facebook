import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
// import { getSession } from "next-auth/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>My_Facebook</title>
        <meta
          name="description"
          content="this is a simulation for facebook app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   console.log(session);
//   return {
//     props: {
//       session,
//     },
//   };
// }
