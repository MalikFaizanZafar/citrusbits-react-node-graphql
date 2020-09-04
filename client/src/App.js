import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';
import { GET_USERS } from './gql/queries';
import { UserForm } from './components/UserForm';
import { NEW_USER } from './gql/mutations';

function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [newUser] = useMutation(NEW_USER)

  const formSubmitHandler = (user) => {
    newUser({
      variables: {
        ...user
      },
      refetchQueries:['users']
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {
        loading && <p>Loading .....</p>
      }
       {
        error && <p>Error loading Users .....</p>
      }
      {
        data && <UsersList users={data.users} />
      }
      <UserForm formSubmit={formSubmitHandler} />
    </div>
  );
}

export default App;
