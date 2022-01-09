import {configureStore }from "@reduxjs/toolkit";
import CocktailReducer from "./feature/cocktailSlice";
import { ThemeColor } from "./feature/themeSlice";

const theme = ThemeColor.reducer

export default configureStore({
    reducer:{
        app:CocktailReducer,
        ThemeColor:theme,
    },
});