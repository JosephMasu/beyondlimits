import Image from "next/image";
import Head from "next/head";
import Navbar from "@/Components/Setcions/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>BeyondLimits</title>
        <meta property="og:site_name" content="BeyondLimits" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" type="image/png" href="./public/images/beyondlimits-logo.png"></link>
      </Head>
      <main className="min-h-screen bg-froska-black">
        <Navbar/>
      </main>
    </>

  );
}
