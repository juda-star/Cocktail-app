import React from "react";
import SearchInput from "../components/SearchInput";
import CocktailsList from "../components/CocktailsList";
import Footer from "../components/Footer";


const Home = () => {

  return (
    <div>

        <SearchInput />
        <CocktailsList />
        <Footer />
    </div>
  );
};

export default Home;
