import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { TbZodiacCapricorn } from "react-icons/tb";
import avatar from "../public/adityakr1403_web_developer_illustrated.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" min-h-screen flex flex-col">
        <div className="flex justify-center py-10">
          <Image alt="avatar" src={avatar} className=" h-80 w-auto rounded-full shadow-2xl" />
        </div>
        <h1 className=" max-w-2xl m-auto text-center">
          Halo! I am Aditya <br/>
          An aspiring software developer
        </h1>
      </main>
    </>
  );
}
