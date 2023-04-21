import { useSelector } from "react-redux";
const Header = () => {
    const result = useSelector((state) => state.cartData);
    console.warn("result", result);
    console.warn("data in header", result);
    return(
        <div>
            <div className = "header">
                <div className = "cart-div">
                    <span>{result.length}</span>
                    <img src = "image.png" alt = "cart"></img>
                </div>
            </div>
        </div>
    )
}

export default Header;