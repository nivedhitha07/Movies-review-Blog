import {Link} from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2>Sorry</h2>
            <p>The page cannot be found</p>
            <Link to="/">back to Home</Link>
        </div>
     );
}
 
export default NotFound;