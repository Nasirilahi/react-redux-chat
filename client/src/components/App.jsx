import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class App extends Component {   
   render() {
      return (
        <div style={{height: '100%'}} >
            {this.props.children}
        </div>
      );
   }
}

