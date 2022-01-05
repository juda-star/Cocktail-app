import React from "react";
import SearchInput from "../components/SearchInput";
import CocktailsList from "../components/CocktailsList";
const Home = () => {
  return (
    <div>
      <SearchInput />
      <CocktailsList/>
    </div>
  );
};

export default Home;
