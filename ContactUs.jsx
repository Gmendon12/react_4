import { Link } from "react-router-dom"

const Contact = () => {
    return(

        <>
        <div className="container">
        <div className="link" > 
        <Link to='/' style={{ textDecoration: 'none' , color:'white'}}>Home Page</Link>
        </div>

        <div className="link">
            <Link to='/studentlist' style={{ textDecoration: 'none' , color:'white'}}>Student Page</Link>
        </div>

        <div className="link">
            Contact Us
        </div>
        </div>


        <div className="contactbox"> 
        
        <div className="contact">Contact Us</div>
        <hr />
        <div className="items">Email : support-in@xyz.com</div>
        <div className="items">Tel : +9989XXXXXXXX</div>
        </div>
        </>
    )
}

export default Contact