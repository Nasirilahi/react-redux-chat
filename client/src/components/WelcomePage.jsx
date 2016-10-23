import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {welcomePage} from '../actions/userActions';
import { connect } from 'react-redux';
import { Input, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';


class WelcomePage extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            username:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.textInput.focus();                  
    }
 
    handleChange(event){
        if(event.target.name === 'username'){
            this.setState({ username: event.target.value});
        }
    }
    handleSubmit(){
       this.props.sendUser(this.state.username);
    }
    render(){
        return(
          <div>
                <header style={{display: 'flex', justifyContent: 'center', flexGrow: '0', order: '0'}}>
                    <div style={{justifyContent: 'center'}}>
                    <p style={{fontSize: '1.5em', marginRight: '1em'}}>Welcome to React Redux Chat</p>
                    </div>
                </header> 
                <main style={{display: 'flex', justifyContent: 'center'}}>
                    <form style={{height: '20rem', display: 'flex', justifyContent: 'center'}}>
                        <div style={{margin: 'auto', paddingRight: '0.2em', height: '3.5em'}}>
                             
                            <input
                                style={{height: '2.7em', fontSize: '1.3em'}}
                                ref={(input) => this.textInput = input}
                                type="text"
                                name="username"
                                value={this.state.username}
                                placeholder="Enter username"
                                onChange={this.handleChange}
                            ></input>
                        </div>
                    <section style={{margin: 'auto', width: '12em', height: '3.5em'}}>
                             <Button
                                bsStyle="success"
                                style={{margin: 'auto', width: '12em', height: '3.5em'}}
                                type="submit"
                                onClick={this.handleSubmit}>
                                    <p style={{margin: '0', padding: '0', fontSize: '1.5em'}}>Submit</p>
                                </Button>
                   </section>
                    </form>
                </main>
         </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        sendUser:bindActionCreators(welcomePage, dispatch)
    };
}

export default connect(null,mapDispatchToProps)(WelcomePage);

 