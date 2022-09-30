import React from "react";
import { Link } from "react-router-dom";
import { Add } from "./Students";

export class AddStudents extends React.Component{

    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            course: "",
            batch: "",
            showDetails: false
        }
    }

    updateName = (e) => {
        this.setState({name:e.target.value})
    }

    updateAge = (e) => {
        this.setState({age: e.target.value})
    }

    updateCourse = (e) => {
        this.setState({course: e.target.value})
    }

    updateBatch = (e) => {
        this.setState({batch: e.target.value})
    }

    SubmitDetails = () => {
        const updateArray = this.props.users;
        updateArray.push({name:this.state.name, age:this.state.age, course: this.state.course, batch: this.state.batch});
        this.props.updateUsers(updateArray)
        this.setState({showDetails: true})
    }

    render(){
        return(
            <>
            <center><h1>Enter Student Details</h1></center>
            <div className="arrangeinputs">
            <input className="input" type="text" placeholder=" Enter Name" value={this.state.name} onChange={this.updateName}/>
            <input className="input" type="text" placeholder=" Enter Age" value={this.state.age} onChange={this.updateAge} />
            <input className="input" type="text" placeholder=" Enter Course" value={this.state.course} onChange={this.updateCourse} />
            <input className="input" type="text" placeholder=" Enter Batch" value={this.state.batch} onChange={this.updateBatch} />
            </div>

            <Link to='/studentlist'>
            <button className="btn" type='button' onClick={this.SubmitDetails}>Add Details</button>
            </Link>
            {this.state.showDetails && 
            <p>
            {this.state.arr.map(item =>{
                return(
                    <p> {`Name :${item.name} | Age :${item.age} | Course : ${item.course} | Batch : ${item.batch}`} </p>
                )
            })}
            </p>
            }
            </>
        )
    }
}