import { configureStore } from '@reduxjs/toolkit'

const store=configureStore({
    reducer:{
        users:[1,2,3],
       products:[false,true,false],
       orders:["Ivan","Ivan","Ivan"]
    }
});
export default store;