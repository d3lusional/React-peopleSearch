import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const genId = (str1, str2, str3) => {
  const megaStr = '' + str1 + str2 + str3;
  const chars = [];
  for(let i = 0; i < megaStr.length; i++) {
    const randomVal = Math.floor(Math.random() * 3 * megaStr.charCodeAt(i));
    if (randomVal % 3 === 0) {
      chars.push(i);
    } else {
      chars.push(String.fromCharCode(randomVal));
    } if(i === str1.length || i === str2.length) chars.push('-')
  }
  return chars.join('');
}

class User {
  constructor(
    name,
    city,
    industry,
    hobbies,
    email
  ) {
    this.name = name;
    this.city = city;
    this.industry = industry;
    this.hobbies = hobbies;
    this.email = email;
    this.id = genId(email, industry, city);
  }
}

const initialState = {
  userPage: undefined,
  users: [
    new User('Bobby', 'Los Angeles', 'Software Development', 'Many many awesome fun hobbies', 'email@email.com'),
    new User('Henry', 'Seattle', 'Software Production', 'TV shows', 'root@email.com'),
    new User('Sofie', 'Boulder', 'Software Engineer', 'Gardening', 'souped up@email.com'),
    new User('Miranda', 'Detroit', 'Mechanic', 'Video Games', 'trippers@email.com'),
    new User('Jerome', 'NYC', 'Physicist', 'Reading', 'email@mailamail.com'),
    new User('Millie', 'Hawkins, Indiana', 'ESP', 'Blowing up things from the upside down', 'hoppin@email.com'),
    new User('Train', 'Oaklahoma City', 'Real Engineer', 'choo choo', 'chooc.choo@email.com'),
  ],
  search: ''
}




class App extends Component {
  constructor(props){
    super(props);
    
    this.state = initialState

    
  }


  updateSearch(event){
    this.setState({search: event.target.value})
  }
  render() {

    let filteredUsers = .users.filter(
        (user) => {
          return user.name.indexOf(this.state.search) !== -1;
        }
    )
    return (

      <div className="App">
        <header>
        </header>
        <div className="row">
            <input className="" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        </div>
        <div className="row">
            <div >
           
            {filteredUsers.map((user)=> {
              return <p key="id"> {user.name}</p>
            })}
            </div>
        </div>
       
      </div>
    );
  }
}

export default App;
