import React, { Component } from 'react';
import axios from 'axios';
export default class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', emai:'', message:''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.name + this.state.email + this.state.message);
    // const {name, email, message} = this.state;
    // const nameemail = {name, email, message};

    // alert(nameemail.name);
    // axios.post('http://localhost:8080/result_page', nameemail).then(()=>console.log('sucess')).catch(err=>{console.error(err);});

    axios({
      method: 'POST',
      url:'https://portfserver.herokuapp.com/',      
      data:{
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
      .then(function(response){console.log(response);})
      .catch(function(error){});
    alert('A Name was submitted: ' + this.state.name +'  An Email was submitted: '+ this.state.email + '  A Message was submitted: '+this.state.message);
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
      
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <div className="six columns">
                <aside className="eigth columns footer-widgets">
                  <div className="widget">
                    <h4>Linked in :
                      {resumeData.linkedinId}
                    </h4>
                  </div>
                </aside>
            </div>
            <div className="six columns">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} autoComplete={false}/>
                  </label>
                </div>
                <div className="row">
                  <label>
                    Email:
                    <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                  </label>
                </div>
                <div className="row">
                  <label>
                    Message:
                    <textarea value={this.state.message} onChange={this.handleChangeMessage} />
                  </label>
                </div>  
                <div className="row submit">
                  <input type="submit" value="Send" id = "contact_submit"/>
                </div>         
                          
              </form>
            
            </div>
            
          </div>
        </section>
        );
  }
}

