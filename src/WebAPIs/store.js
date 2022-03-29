import { configureStore } from "@reduxjs/toolkit";
import redditReducer from '../WebAPIs/redditSlice';


export default configureStore({
    reducer: {
        reddit: redditReducer
    }
})