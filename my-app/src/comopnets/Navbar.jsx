import { useContext } from "react"
import { CartContent } from "../store"

function Navbar() {
    const [state] = useContext(CartContent);
    
    return (
            <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">好吃的~ 下午茶</span>
                <button className="btn btn-outline-primary position-relative" type="submit">購物車
                <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">
                    {state.cartList.length}
                </span>
                </button>
                
            </div>
            </nav>
        
    )
}

export default Navbar