import React, { useRef } from "react";
import { fetchSearchCocktail } from "../redux/feature/cocktailSlice";
import { useDispatch } from "react-redux";
import "./SearchInput.css";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { FaCocktail } from "react-icons/fa";

const SearchInput = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail(searchText));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const StyleIcon = { color: "#FEC94A", font: "larger" };

  return (
    <div>
      <div className="box">
        <div className="centertext">
         
          <h2>judaCocktails</h2>
          <p>
            <FaCocktail style={StyleIcon} />
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="cocktailForm">
            <Paper component="form">
              <input
                name="name"
                type="text"
                ref={searchValue}
                placeholder="Search Cocktail"
                inputProps={{ "aria-label": "Search Cocktail" }}
                onChange={handleChange}
              />
            </Paper>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;

{
  /* <label>search cocktail</label>
<input type="text" name="name" id="name" ref={searchValue}/> */
}
