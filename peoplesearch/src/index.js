import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
export const SEARCH = 'thdfghf';
export const USER_SELECTED = 'asldjkfhalkdfjh';


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

function reducer(state=initialState, action) {
    switch (action.type) {
        case SEARCH:
            console.log("hello from search redux")
            return {...state, search: action.payload} 
        case USER_SELECTED:
            return {...state, userPage: action.payload}
        default:
        return state;
    }
}


const store = createStore(
    reducer
    )

const Root = () => (

    <Provider store={store} >
        <App />
    </Provider>
)


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
