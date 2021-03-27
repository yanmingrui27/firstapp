import React, { Component,useState } from 'react';
import { API_BASE_URL } from './config';
import axios from 'axios';
import StudentList from './StudentList';

class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
        students: null,
        id: '',
        cne: '',
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        specialty: '',
        balance: '',
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onResetButton = this.onResetButton.bind(this);
    this.onUpdateButton = this.onUpdateButton.bind(this);
    this.onDeleteButton = this.onDeleteButton.bind(this);
   }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    componentDidMount() {
        this.getStudent();
    }
    onDeleteButton(id) {
    	console.log(id);
    	const response = fetch(API_BASE_URL + '/deletes/'+ id);
    	this.setState({
        id: '',
        cne: '',
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        specialty: '',
        balance: '',
    	})
    }
    async getStudent() {
        if (! this.state.students) {
            try {
                const responsee = await fetch(API_BASE_URL + '/showone/'+ this.props.id)
                .then((response) => response.json())
                .then((student) => {
                this.setState({ students: student});
                this.setState({
			        id: this.state.students.id,
			        cne: this.state.students.cne,
			        firstName: this.state.students.FirstName,
			        lastName: this.state.students.LastName,
			        age: this.state.students.age,
			        email: this.state.students.email,
			        specialty: this.state.students.specialty,
			        balance: this.state.students.balance,
			    })
                })
            } catch (err) {
                console.error(err);
            }
        }
    }

    onUpdateButton(e) {
        e.preventDefault();
        this.setState({
	        cne: this.state.students.cne,
	        firstName: this.state.students.FirstName,
	        lastName: this.state.students.LastName,
	        age: this.state.students.age,
	        email: this.state.students.email,
	        specialty: this.state.students.specialty,
	        balance: this.state.students.balance,
	    })
        fetch(API_BASE_URL + '/updates/2',{
          method:'post',
          body:JSON.stringify(
            this.state
          ),
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          }
        }).then(function(response){
          response.json().then(function(resp){
            console.log(resp)
          })
        })
    this.setState({
        id: '',
        cne: '',
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        specialty: '',
        balance: '',
    })

	}
    onResetButton(e) {
	    this.setState({
	        cne: this.state.students.cne,
	        firstName: this.state.students.FirstName,
	        lastName: this.state.students.LastName,
	        age: this.state.students.age,
	        email: this.state.students.email,
	        specialty: this.state.students.specialty,
	        balance: this.state.students.balance,
	    })
	    console.log(this.state.students);
    }

  render() {
    return (
    	<div className="card mb-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbk-gs6GSHEzTfTEraAIBOij7Bce8wid98g&usqp=CAU" class="card-img-top" alt="..."/>
          
          <div className="card-body">
            <h2 className="card-text">STUDENT MODIFICATION</h2>
            <p className="card-text">Edit Student Information.</p>

             <form className="form" onSubmit={this.onUpdateButton}>
             
             <div className="form-group">
               <label>CNE</label>
               <input name="cne" type="text" className="form-control" placeholder="Enter CNE" value={this.state.cne} onChange={this.onChangeValue}/>
             </div>
             <div className="form-group">
               <label>First Name</label>
               <input name="firstName" type="text" className="form-control" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeValue}/>
             </div>
             <div className="form-group">
               <label>Last Name</label>
               <input name="lastName" type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.onChangeValue}/>
             </div>
             <div className="form-group">
               <label>Age</label>
               <input name="age" type="text" className="form-control" placeholder="Age" value={this.state.age} onChange={this.onChangeValue}/>
             </div>
             <div className="form-group">
               <label>Email</label>
               <input name="email" type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onChangeValue}/>
             </div>
             <div className="form-group">
               <label>Specialty</label>
               <input name="specialty" type="text" className="form-control" placeholder="Specialty" value={this.state.specialty} onChange={this.onChangeValue}/>
             </div>
             <div className="form-group">
               <label>Balance</label>
               <input name="balance" type="text" className="form-control" placeholder="Balance" value={this.state.balance} onChange={this.onChangeValue}/>
             </div>
             <input type="Submit" className="btn btn-info" value="Update"/>
             <input type="Reset" className="btn btn-warning" value="Reset" onClick={this.onResetButton}/>
             <button className="btn btn-danger" onClick={() => this.onDeleteButton(this.state.id)}>Delete</button>
           
           </form>
          
                        
          </div>
         

        </div>
    )
  }
}

export default Create;