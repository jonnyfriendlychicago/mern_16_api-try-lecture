import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'; 
// import { First } from 'react-bootstrap/esm/PageItem';
import FollowersFormCmp from './components/FollowersFormCmp'; 


function App() {

  
  const [userList, userListSetter] = useState([]); 
  
  useEffect( () => {
    fetch("https://reqres.in/api/users")
      // .then((result) => result.json()) 
      // next lines before the .then below is a long-hand version of single line above
      .then((result) => {
        return result.json();
      })
      .then((responseData) => userListSetter(responseData.data))
      .catch((err) => console.log(err)); 
  }, [])

  return (
    <>
    
    <FollowersFormCmp/>

    <div className="App">
      {
        userList.map((user) => (
                                <div key={user.id}>
                                  <img src={user.avatar} alt="" />
                                  <p>{user.first_name} {user.last_name}</p> 
                                  <p>{user.email}</p>
                                </div>
                              )
                    )
      }
    </div>

    </>
  );
}

export default App;
