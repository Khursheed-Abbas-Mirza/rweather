import { configureStore } from "@reduxjs/toolkit";
import weather from "./weather";

export default configureStore({   
    reducer: {
        weather:weather
    }
})