import React, { Component,useState } from 'react';
import { API_BASE_URL } from './config';
import axios from 'axios';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cne: '',
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        specialty: '',
        balance: '',
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSaveButton = this.onSaveButton.bind(this);
    this.onResetButton = this.onResetButton.bind(this);
   }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSaveButton(e) {
        e.preventDefault();
        fetch(API_BASE_URL + '/stores',{
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
	        cne: '',
	        firstName: '',
	        lastName: '',
	        age: '',
	        email: '',
	        specialty: '',
	        balance: '',
	    })
    }

  render() {
    return (
    	<div className="card mb-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbk-gs6GSHEzTfTEraAIBOij7Bce8wid98g&usqp=CAU" class="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-text">STUDENT CREATION</h2>
            <p className="card-text">Enter Student Information.</p>

             <form className="form" onSubmit={this.onSaveButton}>
             <div className="form-group">
               <label>CNE</label>
               <input name="cne" type="text" className="form-control" placeholder="Enter CNE" value={this.state.cne} onChange={this.onChangeValue} required/>
             </div>
             <div className="form-group">
               <label>First Name</label>
               <input name="firstName" type="text" className="form-control" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeValue} required/>
             </div>
             <div className="form-group">
               <label>Last Name</label>
               <input name="lastName" type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.onChangeValue} required/>
             </div>
             <div className="form-group">
               <label>Age</label>
               <input name="age" type="text" className="form-control" placeholder="Age" value={this.state.age} onChange={this.onChangeValue} required/>
             </div>
             <div className="form-group">
               <label>Email</label>
               <input name="email" type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onChangeValue} required/>
             </div>
             <div className="form-group">
               <label>Specialty</label>
               <input name="specialty" type="text" className="form-control" placeholder="Specialty" value={this.state.specialty} onChange={this.onChangeValue} required/>
             </div>
             <div className="form-group">
               <label>Balance</label>
               <input name="balance" type="text" className="form-control" placeholder="Balance" value={this.state.balance} onChange={this.onChangeValue} required/>
             </div>
             <input type="Submit" className="btn btn-info" value="Save"/>
             <input type="Reset" className="btn btn-warning" value="Reset" onClick={this.onResetButton}/>
           </form>

          </div>
        </div>
    )
  }
}

export default Create;