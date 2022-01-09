import React, { useRef, useState } from "react";
import { fetchSearchCocktail } from "../redux/feature/cocktailSlice";
import { useDispatch } from "react-redux";
import "./SearchInput.css";
import Paper from "@material-ui/core/Paper";
import { FaCocktail } from "react-icons/fa";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../components/theme";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
const styledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
 
`;
const SearchInput = () => {
 
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

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
    <div className="bigContainer">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <styledApp>
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
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <span>dark</span>
                  <Switch onClick={() => themeToggle()} />
                  <span>light</span>
                </Stack>
              </Paper>
            </div>
          </form>
        </styledApp>
      </ThemeProvider>
    </div>
  );
};

export default SearchInput;

{
  /* <label>search cocktail</label>
<input type="text" name="name" id="name" ref={searchValue}/> */
}
