import { Link } from "react-router-dom"
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AddStudents } from "./Student2";

const StudentList = () => {
    return(
        <>
        <div className="container">
        <div className="link" > 
        <Link to='/' style={{ textDecoration: 'none' , color:'white'}}>Home Page</Link>
        </div>

        <div className="link">
            Student Page
        </div>

        <div className="link">
            <Link to='/contact' style={{ textDecoration: 'none' , color:'white'}}>Contact Us</Link>
        </div>
        </div> <br /> <br />
    
    <div className="studentitem">
    <h1 className="studentlist">Student List</h1>
    </div>

    <div>
        <Link to='/studentlist/AddStudents'>
        <button type="button" className="button">Add New Student</button>
        </Link>
    </div>

    </>

    )
}

export class Add extends React.Component{

    render(){
        return(
            <p>
                {this.props.users.map(item =>{
                    return(
                        <p>
                            {`Name :${item.name} | Age :${item.age} | Course : ${item.course} | Batch : ${item.batch}`}
                        </p>
                    )
                })}
            </p>
        )
    }
}

export default StudentList