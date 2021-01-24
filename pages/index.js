import Head from "next/head";
import Auth from "@/components/Auth";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Weather from "@/components/Weather";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, userLogIn, userLogOut } from "@/lib/slices/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { auth } = useSelector(selectUser);

  return (
    <>
      <Navbar />
      {auth ? (
        <Layout>
          <Weather />
        </Layout>
      ) : (
        <Auth />
      )}
    </>
  );
}
