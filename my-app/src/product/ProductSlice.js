import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { List } from "../api/product";
export const getProduct=createAsyncThunk(
    "product/getProduct",
    async(user,{rejectWithValue})=>{
        console.log(user);
        const {name,age}=user;
        console.log(name,age);
        const data=await List();
        return data;
    }
    
   
)
const initialState={
    value:[
       {
        data:[],
        err:null,
         loading:false
       }
    ]
}
const ProductSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
      addProduct(state,action){
          console.log('action',action)
          state.value.push(action.payload);
      }
    },
   extraReducers:(builder)=>{
      builder.addCase(getProduct.pending,(state,action)=>{

      })
       builder.addCase(getProduct.fulfilled,(state,action)=>{
            console.log(action.payload)
       })
   }
})
export const {addProduct}=ProductSlice.actions;
export default ProductSlice.reducer;