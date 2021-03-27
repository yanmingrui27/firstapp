import React, { Component,useState } from 'react';
import { API_BASE_URL } from './config';
import axios from 'axios';
import Create from './Create';
import Edit from './Edit';
import Navbar from './Navbar';
import footer from './footer';

class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: null,
            isLoading: null,
            showEdit: false,
            showCreate: true,
            condition: '',
        }
        this.onChangeButton = this.onChangeButton.bind(this);
    }

    componentDidMount() {
        this.getStudents();
    }


    async getStudents() {
        if (! this.state.students) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch(API_BASE_URL + '/shows');
                const studentList = await response.json();
                this.setState({ students: studentList.data, isLoading: false});
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    onChangeButton(id) {
        console.log(this.state);
            this.setState({
            showEdit: !this.state.showEdit,
            showCreate: !this.state.showCreate,
            condition: id,
            });
    }

    render() {
        return (
            <div>
            <Navbar />
            <div className="row header-container justify-content-center">
               <div className="header">
                  <h1>Welcome to Online System</h1>
               </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                  <section className="col-md-7">

                    <div className="card mb-3">
                        <img src="https://www.indstate.edu/sites/default/files/media/Images/Banners/banner-international.jpg" class="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">List Of Students</h5>
                        <p className="card-text">You can find all the information of Students here.
                        <div className="tabMargin">
                        {this.state.showEdit ? <button className="btn btn-sm btn-danger" onClick={() => this.onChangeButton()}>Cancel</button>:null}
                        </div>
                        </p>
                        {this.state.students &&
                                <table className="table">
                                  <thead className="thead-light">
                                    <tr>
                                      <th scope="col">CNE</th>
                                      <th scope="col">First Name</th>
                                      <th scope="col">Last Name</th>
                                      <th scope="col">Age</th>
                                      <th scope="col">Specialty</th>
                                      <th scope="col">Operations</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {this.state.students.map(
                                            students =>
                                                <tr id={students.id}>
                                                    <td>{students.cne}</td>
                                                    <td>{students.FirstName}</td>
                                                    <td>{students.LastName}</td>
                                                    <td>{students.age}</td>
                                                    <td>{students.specialty}</td>
                                                    <td>
                                                    {this.state.showCreate ? <button className="btn btn-sm btn-warning" onClick={() => this.onChangeButton(students.id)}>Edit</button>:null}
                                                    </td>
                                                </tr>
                                    )}
                                  </tbody>
                                </table>
                        }
                        </div>
                    </div>
                    </section>
                    <section className="col-md-5">
                        {this.state.showEdit ? <Edit id={this.state.condition}/>:null}
                        {this.state.showCreate ? <Create />:null}
                    </section>
                </div>
              </div>
            </div>
        );
    }

};

export default StudentList;
