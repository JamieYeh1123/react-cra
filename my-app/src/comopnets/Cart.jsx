import { useContext } from "react"
import { CartContent } from "../store"


export default function Carts() {
    const [state, dispatch] = useContext(CartContent);
    if(state.cartList.length === 0) {
        return (
            <div className="bg-light p-3">
                <span>購物車還沒有商品....</span>
            </div>
        )
    } else {

    
    return(
        <div className="bg-light p-3">
            <table className="table align-middle">
              <tbody>
              {state.cartList.map((item)=>{
                return(
                <tr key={item.id}>
                  <td>
                    <button type="button" className="btn"
                    onClick={()=>{
                        dispatch({
                            type:"DEL_CART",
                            payload: {
                                ...item
                            }
                        })
                    }}>X</button>
                    </td>
                  <td>
                    <img src={item.img} alt={"" | null} 
                    className="table-image"/>
                  </td>
                  <td>{item.title}
                    <br />
                    <small className="text-muted">NT$ {item.price}</small>
                  </td>
                  <td>
                    <select name="" id="" className="form-select" 
                    value={item.qty}
                    onChange={(e)=>{
                        
                        e.preventDefault();
                        const optvalue = parseInt(e.target.value);
                        
                        dispatch({
                            type: "CHANGE_CART",
                            payload: {
                                ...item,
                                optvalue
                            }
                        })
                    }}>
                        {[...Array(20)].map((_,i)=>{
                            return (
                                <option value={i+1} key={i}>{i+1}</option>
                            )
                        })}
                    </select>
                  </td>
                  <td className="text-end">
                    NT$ {item.price * item.qty}
                  </td>
                </tr>
                )
              })
              }
                
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5} className="text-end"> 總金額 NT$ {state.total || 0}</td>
                </tr>
              </tfoot>
            </table>
          </div>
    )
    }
}