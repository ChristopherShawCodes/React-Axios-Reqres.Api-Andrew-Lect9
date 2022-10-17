// CRUD Operations
// Create/Read/Update/Delete

// HTTP Verbs
// Post/Get/Put/Delete



//-------------------------------------------Fetch Example
  
useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then((result)=>{
      return result.json()
    }).then((res)=>{
      console.log(res)
      setState(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  } , [])

//-------------------------------------------Axios Example

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