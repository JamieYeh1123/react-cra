import { createContext } from "react";

function totalPrice(cartList) {
  return cartList.map((item) => item.qty * item.price)
    .reduce((a, b) => a + b, 0);
}

export const cartInit =  {
    cartList: []
  }

export const cartReducer = (state, action)=>{
    const cartList = [...state.cartList];
    const index = cartList.findIndex((item)=> item.id === action.payload.id)
    
    switch(action.type) {
      case "ADD_CART":
        if(index === -1) {
          cartList.push(action.payload)
        } else {
          cartList[index].qty += action.payload.qty;
        }
        // const array = cartList.map((item)=>{
        //   return item.qty * item.price;
        // });
        
        // const total = array.reduce((a,b)=>{
        //     return a + b;
        // }, 0)
        // const total = totalPrice(cartList);
        return{
          ...state,
          cartList,
          total: totalPrice(cartList)
        }
      case "CHANGE_CART":
    
        cartList[index].qty = action.payload.optvalue;
        return {
          ...state,
          cartList,
          total: totalPrice(cartList)
        }
      case "DEL_CART":
        cartList.splice(index, 1);
        return{
          ...state,
          cartList,
          total: totalPrice(cartList)
        }
      default:
        return state;
    }
  }


 export const CartContent = createContext({});