Coding Dojo: React/Mern Stack Lecture: API's and AJAX w/useEffect

This is an update from lecture 8 and the final product is a result of lectures 8 & 9

Test what I built : https://framed-axios-test-app.netlify.app/

Lecture 9: Youtube: https://www.youtube.com/watch?v=exXqC-Moj0M

// CRUD Operations
// Create
   Read
   Update
   Delete

// HTTP Verbs
// Post
   Get
   Put
   Delete
//Post: Sending data, posting data somewhere else
//Get: HTTP request to get the data
//Put: Sending data to update a specific resource
//Delete: Request to delete a specific resource





//-------------------------------------------Fetch Example
  
  
`useEffect(()=>{ 


    fetch('https://reqres.in/api/users')       //Fetch data / Promise is created
    
    .then((result)=>{                          //If successful
    
      return result.json()                     //return json format of variable result
      
    }).then((res)=>{                           //Take json version of the response
    
      console.log(res)
      
      setState(res.data)                       //and store it for use.
      
    }).catch((error)=>{                        //If unsuccessful
    
      console.log(error)                       //Console Log Error
      
    })
    
  } , [])`

//-------------------------------------------Axios Example

//-----------Install Axios---------------------------------------Install Axios

//npm i axios

//----------

//import axios form 'axios'

//----------------------------------------------------------------

useEffect(()=>{

    axios.get('https://reqres.in/api/users')
    
    .then((res)=>{
    
      console.log(res)
      
      //Because of axios this specific API
      //  generated another array called data that must be
      //   added in order to access it hence res.data.data
      
      setState(res.data.data)
      
    }).catch((error)=>{
    
      console.log(error)
      
    })
    
  } , [])

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
