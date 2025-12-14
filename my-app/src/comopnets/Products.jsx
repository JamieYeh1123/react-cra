import { useContext, useState } from "react"
import productsData from "./productsData"
import { CartContent } from "../store"



export default function Products() {
    const [state, dispatch] = useContext(CartContent);
    
    const [cartQty, setCartQty] = useState({});
    return(
        <div className="row row-cols-3 g-3">
            
            
            {productsData.map((item)=>{
              return(
                <div className="col" key={item.id}>
                <div className="card" >
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body" >
                    <h6 className="card-subtitle">{item.title}
                        <span className="float-end">NT$ {item.price}</span>
                    </h6>
                    <br />

                    <div className="input-group mb-3 ">
                        <button className="btn btn-outline-primary " onClick={()=> setCartQty((prev) => ({
                      ...prev,
                      [item.id]: Math.max(1, (prev[item.id] || 1) - 1),
                    }))}>-</button>
                        <input type="number" className="form-control text-center" value={cartQty[item.id] || 1} readOnly/>
                        <button className="btn btn-outline-primary "
                        onClick={()=> setCartQty((prev) => ({
                      ...prev,
                      [item.id]: (prev[item.id] === 20 )? prev[item.id] : (prev[item.id] || 1) + 1,
                    }))}>+</button>
                    </div>
                    <button type="button" className="btn btn-outline-primary w-100"
                        onClick={()=>{
                            dispatch({
                                type: "ADD_CART",
                                payload:{
                                    ...item,
                                    qty: cartQty[item.id] || 1
                                }
                            })
                        }}
                    >加入購物車</button>
                    </div>
                </div>
                </div>
              )
            })}
          </div>
    )
}