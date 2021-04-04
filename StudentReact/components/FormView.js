import React, {Component } from 'react';   
import axios from 'axios';


const api= axios.create({
    baseURL:'http://localhost:6039/all'
})

class FormView  extends Component {
    state = {
        courses : []
     }
    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data);
            this.setState({courses : res.data})

        })
    }

    render() { 
        return ( 
            <div className="card">
            <table className="table">
                 <thead>
                    <tr>
                    <th scope="col">Student Name</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Class</th>
                    <th scope="col">Division</th>
                    <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.courses.map(course =>
                    <tr>
                    <td>{course.name}</td>
                    <td>{course.dateOfBirth}</td>
                    <td>{course.standard}</td>
                    <td>{course.division}</td>
                    <td>{course.gender}</td>

                    </tr>
                    )}
                    </tbody>
             </table>

            </div>

         );
    }
}
 
export default FormView ;