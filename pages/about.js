import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function about() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main title="about" />
    </>
  );
}
