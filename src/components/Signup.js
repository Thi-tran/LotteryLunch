import React, { Component } from 'react';
import {addUser} from '../actions/firebase';
class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          name: '',
          note: '',
          status: false,
          success: ''
        }
      }

      handleInput = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      onHandleSubmit = (event) => {
        event.preventDefault();
        addUser(this.state.name, this.state.email, this.state.note);
        this.setState({
          email: '',
          name: '',
          note: '',
          success: "Thank you for your info, please wait and we will match you with the right person"
        })
      }
        
      render() {
        const { success } = this.state;
        return (
          <div id="Signup" className="container-fluid padding">
            <div className="row">
              <h1>Sign up</h1>
            </div>
            <div className="container width">
              <div className="formcontent">
              <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                  <div className="row">
                    <div className="form-label">
                      <label htmlFor="inputEmail3" className="col-form-label" >Email</label>
                    </div>
                  <div className="col hint--top hint--info" aria-label="Please use a valid email because we will contact you through it">
                    <input type="email" className="form-control"  id="inputEmail3" data-rh="Default" name="email" value={this.state.email} onChange={this.handleInput} required/>
                    </div>
                  </div>
                </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="form-label">
                        <label htmlFor="inputName3" className="col-form-label">Name</label>
                      </div>
                      <div className="col hint--top hint--info" aria-label="Please write your full name here">
                        <input type="text" className="form-control" id="inputName3" data-toggle="tooltip" name="name" value={this.state.name} onChange={this.handleInput} required/>
                      </div>
                    </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="form-label">
                      <label htmlFor="inputEmail3" className=" col-form-label">&nbsp;Note&nbsp;</label>
                    </div>
                  <div className="col hint--top hint--info" aria-label="Tell us something about you :)">
                    <input type="text" className="form-control" id="inputEmail3" data-toggle="tooltip" name="note" value={this.state.note} onChange={this.handleInput} required/>
                    </div>
                  </div>
                </div>

                  {success && <p className="text-center">{success}</p>}

                  {!success && (<div className="form-group buttonrow text-center">
                      <button type="submit" className="btn btn-info">Send</button>
                  </div>)}
                </form>
              </div>

              </div>
            </div>
        );
      }    
}

export default Signup;