 import React, { useEffect } from 'react';
 import MovieListing from '../movielisting/MovieListing';
 import { useDispatch } from 'react-redux'
import {addMovies, fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/movieSlice"
// import { useSelector } from 'react-redux';
// import { getAllmovies } from '../../features/movies/movieSlice';


 const Home = () => {

    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends"
    useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
    }, [dispatch])



    return (
        <div>
            <div className='banner-img'> </div>
            <MovieListing />
        </div>
    );
 };
 
 export default Home;