
//!define our html elements
const board = document.getElementById('game-board');


const generateFood = ()=>{
    let x = Math.floor(Math.random() * 20) + 1;
    let y = Math.floor(Math.random() * 20) + 1;

    return {x,y}
  }

// ? OUR GAME VARIABLES;
let snake = [{x:12 , y:10}]
let food = generateFood();




// *building Draw Function
const draw = ()=>{
    board.innerHTML = "";
    drawSnake();
    drawFood();
}

// draw snake function
const drawSnake = () => {

    snake.forEach((segment)=>{
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    })

}


// *building createGameElement Function

const createGameElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


const setPosition = (element, position) =>{
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
  }


  const drawFood = ()=>{
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food)
    board.appendChild(foodElement);
  }



function move(){
  const head = { ...snake[0] };
  switch(direction){
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
      break;
  }
}




  draw()