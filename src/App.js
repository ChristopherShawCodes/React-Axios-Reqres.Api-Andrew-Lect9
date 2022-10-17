import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {

const [state,setState] = useState([])


// CRUD Operations
// Create/Read/Update/Delete

// HTTP Verbs
// Post/Get/Put/Delete



//-------------------------------------------Fetch
  // useEffect(()=>{
  //   fetch('https://reqres.in/api/users')
  //   .then((result)=>{
  //     return result.json()
  //   }).then((res)=>{
  //     console.log(res)
  //     setState(res.data)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // } , [])

//-------------------------------------------Axios
  // useEffect(()=>{
  //   axios.get('https://reqres.in/api/users')
  //   .then((res)=>{
  //     console.log(res)
  //     //Because of axios this specific API
  //     //  generated another array called data that must be
  //     //   added in order to access it hence res.data.data
  //     setState(res.data.data)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // } , [])


//-----------------------------------------------ES7 Async/Await

  const makeRequest = async () =>{
    try{
      const results = await axios.get('https://reqres.in/api/users')
      setState(results.data.data)
      console.log(results)
    } catch(error){
      console.log(error)
    }
  }

  return (
    <div className="App">
    <div className='Header'>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <span class="navbar-text">
            React//Mern Stack Lecture 8 & 9
          </span>
    <button id="run" className='btn btn-primary' onClick={makeRequest}>Run API</button>
    <a href='https://reqres.in/'>reqres.in</a>
        </div>
      </nav>
    </div>
    {
      state.map((person)=>{
        return<div className='avatar'>
        <img src={person.avatar}/>
        <div className='card-contents'>
          <h1>{person.first_name} {person.last_name}</h1>
          <p id='id'>Employee Reference # {person.id}</p>
          <p id='email'>{person.email}</p>
        </div>
        </div>
      })
    }
    </div>
  );
}

export default App;
