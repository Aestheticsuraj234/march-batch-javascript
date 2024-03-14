// // console.log("Hello world")

// let h1 = document.getElementById("heading_id_1");

// console.log("GET_ELEMENT_BY_ID", h1);


// let h1_by_class = document.getElementsByClassName("heading_class");

// console.log("GET_ELEMENT_BY_CLASS_NAME", h1_by_class);


// const elementsByTag = document.getElementsByTagName("p");

// console.log("GET_ELEMENT_BY_TAG_NAME", elementsByTag);

// const elementsByQuery = document.querySelector("h1");

// console.log("GET_ELEMENT_BY_QUERY_SELECTOR", elementsByQuery);


// const elementsByQueryAll = document.querySelectorAll("p");

// console.log("GET_ELEMENT_BY_QUERY_SELECTOR_ALL", elementsByQueryAll);



// const  Container_1 = document.getElementsByClassName("container_1")[0]
// const Container_2 = document.getElementsByClassName("container_2")[0]

// console.log(Button_1);

// Button_1.addEventListener("click" ,function(){
//     Container_1.style.backgroundColor = "yellow";
//     Container_1.innerHTML = "Hello World";
// })


let body  = document.getElementsByTagName("body")[0];
const Button_1 = document.getElementsByClassName("btn_1")[0]
let isDarkMode = true;


Button_1.addEventListener("click" ,function(){
    if(isDarkMode)
    {
        body.classList.add("toggle_light");
        body.classList.remove("toggle_dark");
        isDarkMode = false;

    }
    else{
        body.classList.add("toggle_dark");
        body.classList.remove("toggle_light");
        isDarkMode = true;

    }
})