import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";

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
      {/* TODO 
        -
        Ask for a proper look, try to make it as close to the design as possible
        Vat Included does not appear after Sub menu sections because the Database does not have the VAT Included text under it's notes
        */}
    </div>
  );
};

export default Home;
