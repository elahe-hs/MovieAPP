import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {APIKey} from "../../common/api/MovieAPIKey";
import movieApi from '../../common/api/movieApi';
import { useDispatch } from "react-redux";

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {
   
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`
      );
      return response.data;
    }
  );


  export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
     
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`
      );
      return response.data;
    }
  );

  export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetails",
    async (id) => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`
      );
      return response.data;
    }
  );
const initialState = {
    movies: {},
    shows : {},
    selectedMovieOrShow: {},
}


const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        // addMovies: (state, {payload}) => {
        //     state.movies = payload;
        // },
        removeSelectedMovieOrShow: (state) => {
          state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
       [ fetchAsyncMovies.pending] : ()=> {
        console.log('pending');

       },
       [ fetchAsyncMovies.fulfilled] : (state, {payload})=> {
        console.log("fullfiled");
        return {...state, movies : payload}
       },
    
       [ fetchAsyncMovies.rejected] : ()=> {
        console.log("rejected");
       },
       [ fetchAsyncShows.fulfilled] : (state, {payload})=> {
        console.log("shows fullfiled");
        return {...state, shows: payload}
       },
       [ fetchAsyncMovieOrShowDetails.fulfilled] : (state, {payload})=> {
        console.log("MovieOrShowDetails fullfiled");
        return {...state, selectedMovieOrShow: payload}
       },
    }
})


export const {removeSelectedMovieOrShow} = movieSlice.actions;
export default movieSlice.reducer;
export const getAllmovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;