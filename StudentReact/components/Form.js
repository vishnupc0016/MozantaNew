import React, { Component } from 'react'; 
import axios from 'axios'  
import reactDom from 'react-dom';
class Form extends Component {

     constructor(props){
        super(props);
       this.state = {
           name:'',
           dateOfBirth:'',
           standard:'',
           division:'',
           gender:'',
           nameError:'',
           dateOfBirthError:'',
           standardError:'',
           divisionError:'',
           genderError:'',

       }        
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
  
    handleSubmit = (e)=>{
        e.preventDefault()
        const IsValidate = this.validate();
        console.log(this.state)
        if(IsValidate)
        {
            axios.post('http://localhost:6039/create',this.state)
            window.location.reload(); 
        }  
           
    }

//Form Validation method
    validate =() =>{
        let nameError="";
        let dateOfBirthError="";
        let standardError="";
        let divisionError="";
        const nameval = /^[A-Za-z ]{2,30}$/
        if(!this.state.name){
            nameError="name is empty";
        }

     else{
        if(!nameval.test(this.state.name))
        {
            nameError= "invalid name";
        }
     }
       

        if(!this.state.dateOfBirth){
            dateOfBirthError="Date Of Birth is empty";
        }

        if(!this.state.standard){
            standardError="Class cant be empty";
        }

        if(!this.state.division){
            divisionError="Division Cant be empty";
        }

        if(nameError||dateOfBirthError){
            this.setState({nameError,dateOfBirthError});
            return false;
        }
         return true;


    }
 
    render() { 
        const {name,dateOfBirth,standard,division,male,female} = this.state
        return ( 
            
               <div className="card p-5">
                   <h3 className="mb-5"> Student Registration</h3>
                   <form onSubmit={this.handleSubmit}>
                       <div className="form-group">
                       <lable>Student Name  :</lable>
                       <input type="text" className="ml-2 mb-3" name="name" value={name} onChange={this.changeHandler}></input>
                      <div style={{color:"red",fontSize:15,marginLeft:150}}>{this.state.nameError}</div>
                       </div>
                      <div className="form-group">
                      <lable>Date Of Birth  :</lable>
                       <input type="date" className="ml-3 mb-3" name="dateOfBirth" style={{width:182.3}} value={dateOfBirth} onChange={this.changeHandler}></input>
                       <div style={{color:"red",fontSize:15,marginLeft:150}}>{this.state.dateOfBirthError}</div>
                      </div>
                      
                       <div className="form-group">
                       <lable>Class  :</lable>
                            <select className="ml-4 mb-3" name="standard" style={{width:182.3,position:'relative',left:48}} value={standard} onChange={this.changeHandler}>
                                <option>I</option>
                                <option>II</option>
                                <option>III</option>
                                <option>IV</option>
                                <option>V</option>
                                <option>V1</option>
                                <option>V11</option>
                                <option>V111</option>
                                <option>1X</option>
                                <option>X</option>
                                <option>X11</option>
                                <option>X12</option>
                            </select><br></br>
                            <div style={{color:"red",fontSize:15,marginLeft:150}}>{this.state.standardError}</div>
                       </div>
                     <div className="form-group">
                     <lable>Division  :</lable>
                            <select className="ml-4 mb-3" name="division" style={{width:182.3,position:'relative',left:27}}  value={division} onChange={this.changeHandler}>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                            </select><br></br>
                            <div style={{color:"red",fontSize:15,marginLeft:150}}>{this.state.divisionError}</div>
                     </div>
                            

                       <div className="form-group" onChange={this.changeHandler} required>
                            <label className="d-flex justify-content-left ">Gender</label>
                                <div class="row" >
                                 <div class="form-group col-sm-3 d-flex justify-content-left">
                                 <label  htmlFor="exampleRadios1" >
                                    <input  type="radio" className="" name="gender" id="exampleRadios1" value="Male"/>
                                        Male
                                </label>
                             </div>
                            <div class="form-group col-sm-3 d-flex justify-content-left">
                                <label  htmlFor="exampleRadios2" className="">
                                <input  type="radio" name="gender" className="" id="exampleRadios2" value="Female"/>  
                                Female
                            </label>
                        </div>
                    </div>

                </div>

                            <button type="submit" className=" btn btn-primary mb-5" style={{width:153}}>Submit</button>

                   </form>

               </div>
        );
    }
}
 
export default Form;