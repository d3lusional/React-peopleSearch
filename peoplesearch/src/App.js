import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import { 
  SEARCH,
  USER_SELECTED 

} from './index';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
      userPage: state.userPage,
      users: state.users,
      search: state.search,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
  return {
      userSelected: function(user){
        dispatch({
          type: USER_SELECTED,
          payload: user     
          }
        )
      },
      searchUsers: function(newSearch) { 
        dispatch(
          {
            type: SEARCH,
            payload: newSearch
          }
        )
      }
    }
  }






class App extends Component {
  constructor(props){
    super(props);
    
   

    
  }

  render() {

    const filteredUsers = this.props.search === '' ? this.props.users : this.props.users.filter ((user) => user.name.includes(this.props.search))

    return (
      this.props.userPage === undefined ? 

      <div className="App">
        <div className="row">
            <input className="" value={this.props.search} onChange={ event => this.props.searchUsers(event.target.value)} />
        </div>
        <div className="row">
            <div>
            {filteredUsers.map((user, index)=> {
              return <p key={index} onClick={ () => this.props.userSelected(user) } > {user.name} </p>
            })}
            </div>
        </div>
      </div>

      :
      
      <div className="App"> 
        {console.log(this.props.userPage)}
          <div className="usersBox" >
            
            <p onClick={ () => this.props.userSelected() } > {}  Go Home</p>
             <p>{this.props.userPage.name}</p>
             <p>{this.props.userPage.city}</p>
             <p>{this.props.userPage.industry}</p>
             <p>{this.props.userPage.hobbies}</p>
             <p>{this.props.userPage.email}</p>
          </div>
      
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

