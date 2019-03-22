import React, { Component } from 'react';
import firebase from '../firebase/configuration'; 

import UserTable from '../components/UserTable';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfUser: [],
        }
    }

    componentDidMount(){
        // Get data from firebase, under asynchronous form
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
            const data = [];
            snapshot.forEach((childSnapshot)=> {
                data.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            })
            this.setState(prevState => {
                return { listOfUser: [...prevState.listOfUser, ...data]}
            }); 
        });
    }

    onHandleMatchUser = () => {

    }

    onHandleSendEmail = () => {

    }

    render() {       
        return (
            <div className="admin-page text-center">
                <header className="my-2">
                    <h2>Admin Page</h2>
                </header>

                <div className="my-4">
                    <h3>Users list</h3>
                    <UserTable data={this.state.listOfUser} />
                </div>

                <button className=" btn-primary mx-2" onClick={this.onHandleMatchUser}>MATCH users</button>
                <button className=" btn-danger mx-2" onClick={this.onHandleSendEmail}>Send Email</button>
                
                <div className="my-4">
                    <h3>Matching List</h3>
                </div>    
            </div>
        );
    }
}

export default Admin;