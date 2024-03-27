// GET request using fetch by default

fetch("https://api.github.com/users/Aestheticsuraj234")
.then((res)=>{
    return res.json()
}).then((value)=>{
    console.log(value)
}).catch((err)=>{
    console.log(err)
})


// frontend---> api-url (get req) ----> db (search) --->response (json) ---> frontend

// POST request using fetch by default
fetch("https://api.github.com/users" , {
    method:"POST ",
    body:JSON.stringify({
        name:"JHON",
        age:20
    }),
    // headers:{
    //     "Content-type":"application/json",
    //     "Accept":"application/json",
    //     "Authorization":"Bearer 123456"
    // }
})
.then((res)=>{
    return res.json()
}
).then((value)=>{
    console.log(value)
})
.catch((err)=>{
    console.log(err)
})


// PUT / PATCH request using fetch by default
fetch("https://api.github.com/users" , {
    method:"PUT ",
    body:JSON.stringify({
        name:"JHON",
        age:21
    }),
    // headers:{
    //     "Content-type":"application/json",
    //     "Accept":"application/json",
    //     "Authorization":"Bearer 123456"
    // }
})
.then((res)=>{
    return res.json()
}
).then((value)=>{
    console.log(value)
})
.catch((err)=>{
    console.log(err)
})

// DELETE  request using fetch by default
fetch("https://api.github.com/users" , {
    method:"DELETE",
   
})
.then((res)=>{
    return res.json()
}
).then((value)=>{
    console.log(value)
})
.catch((err)=>{
    console.log(err)
})