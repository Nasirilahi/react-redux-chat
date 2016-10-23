// import React, { Component, PropTypes } from 'react';
// import {fetchMessages,fetchFriends  } from '../actions/userActions';
// import Chat from '../components/Chat';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import io from 'socket.io-client';

// const socket = io('', { path: '/api/chat' });
// const initialChannel = 'Lobby'; // NOTE: I hard coded this value for my example.  Change this as you see fit

// class ChatContainer extends Component {
//   componentWillMount() {
// //    const { dispatch, user } = this.props;
   
//     // dispatch(actions.fetchMessages(initialChannel));
//     // dispatch(actions.fetchChannels(user.username));
//   }
//   render() {
//     return (
//       ///<Chat {...this.props} socket={socket} />
//       <div>
//       <p>welcome user :{this.props}</p>
//       </div>
//     );
//   }
// }

// function mapDispatchToProps(dispatch){
//  return{
//     fetchMessages:bindActionCreators(fetchMessages, dispatch),
//     fetchFriends:bindActionCreators(fetchFriends, dispatch)
//  };
// } 

// function mapStateToProps(state) {
//   return {
     
//       user: state.user,  
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)


import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import {welcomePage} from '../actions/actions';
import { connect } from 'react-redux';
import { Input, Button } from 'react-bootstrap';


export default class ChatContainer extends Component{
    render(){
        return(
            <div>
                <h1>Chat container</h1>
            </div>
        );
    }
}