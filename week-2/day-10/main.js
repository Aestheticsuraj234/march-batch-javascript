let ArrayObj = [
    {
        name: "Suraj",
        age: 20,
        city: "Noida"    
    },
    {
        name: "Rahul",
        age: 21,
        city: "Delhi"    
    },
    {
        name: "Rohit",
        age: 22,
        city: "Gurgaon"    
    },
    {
        name: "Raj",
        age: 23,
        city: "Noida"    
    }

]

localStorage.setItem("userData",JSON.stringify(ArrayObj));


window.onstorage = function(e){
    console.log("Data has been updated");
    console.log(e);
}