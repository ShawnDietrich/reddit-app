import { configureStore } from "@reduxjs/toolkit";
import redditReducer from '../WebAPIs/redditSlice';
import sideRedditReducer from "../WebAPIs/sideRedditSlice";


export default configureStore({
    reducer: {
        reddit: redditReducer,
        sideReddit: sideRedditReducer,
    },    
},

)