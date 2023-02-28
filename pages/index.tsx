import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";
import { QueryClientProvider, QueryClient } from "react-query";
import RQToken from "./RQToken";
import RQMenu from "./RQMenu";
const queryClient = new QueryClient();
const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/*w-[595px] h-[2670px] but the entire menu stickt to the right side if that is the case*/}
        <Head>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap');
          </style>
          <title>Static Menu</title>
        </Head>
        <RQToken />

        {/*Header consists of the writing, logo and Company Name */}
        <Header />
        {/* MenuBox, contains Text explaining what it is, Vat ,included and further explanation of what it is, may contain an image */}
        <MenuBox />
        {/* A Food item, Contains Name, explanation, Price Medium Price Large Price and dietery info, may contain image */}
        {/* TODO 
        -Token information from the code and Walkmen differ even though the information given is identical (as far as I can see)
        menu_id is passed as an empty object, even though it passes correctly in console ın RQToken
        The entire data tree of the website has to be re-written to fit the data from the get reqyest of RQMenu
        Add dynamic language
        */}
      </div>
    </QueryClientProvider>
  );
};

export default Home;
