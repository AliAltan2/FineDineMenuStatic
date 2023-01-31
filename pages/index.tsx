import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";
//-----
//import path from "path";
//import fsPromises from "fs/promises";
import Data from "../public-menu.json";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap');
        </style>
        <title>Static Menu</title>
      </Head>
      {/*Header consists of the writing, logo and Company Name */}
      <Header />
      {/* MenuBox, contains Text explaining what it is, Vat ,included and further explanation of what it is, may contain an image */}
      <MenuBox />
      {/* A Food item, Contains Name, explanation, Price Medium Price Large Price and dietery info, may contain image */}
      {/*<MenuItem menuData={menuData} />*/}
    </div>
  );
};

//export async function getStaticProps() {
//  const filePath = path.join(process.cwd(), "public-menu.json");
//  const jsonData = await fsPromises.readFile(filePath);
//  const menuData = JSON.parse(jsonData.toString());
//  return {
//    props: {
//      menuData,
//   },
//  };
//}
export default Home;
