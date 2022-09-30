import { Link } from "react-router-dom";

const Home = () => {
    return(

        <>

        <div className="container">
        <div className="link"> Home Page </div>

        <div className="link">
            <Link to='/studentlist' style={{ textDecoration: 'none' , color:'white'}}>Student Page</Link>
        </div>

        <div className="link">
            <Link to='/contact' style={{ textDecoration: 'none' , color:'white'}}>Contact Us</Link>
        </div>
        </div>

        <h1 className="homecontent">Home Page</h1>
        </>

        
    )
}

export default Home