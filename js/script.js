const btnPlay = document.getElementById('btn-play');
const container = document.getElementById('main-container');
const bombsNumber = 16;
let squareNumber = 0;

btnPlay.addEventListener('click', function(){
  const level = parseInt(document.getElementById('level').value);
  
  container.innerHTML =''; 
  

  if(level === 1){
    squareNumber = 100;

  }else if(level === 2){
    squareNumber = 81;
  }else{
    squareNumber = 49;
  }

  for(let i = 0; i < squareNumber; i++){
    //creo l'elemento square e lo aggiungo al main-container con dentro un numero da 1 a squareNumber
    sq = createSquare(container);
    sq.innerHTML = `<span> ${i + 1} </span>` ;

    sq.addEventListener('click', handleClickCell);
  };
});


/**
 * generatore di square
 * @param {HTMLDivElement} target 
 * @returns 
 */
function createSquare(target){
  const sq = document.createElement('div');

  sq.className = 'square';

  if(level.value === '1'){
    sq.classList.add('easy');
  }else if(level.value === '2'){
    sq.classList.add('hard');
  }else{
    sq.classList.add('crazy');
  }

  target.append(sq);
  return sq;



};

function handleClickCell(event){
  const selectedNumber = event.target.innerText;
  console.log(selectedNumber);
  const boom = bombsGenerate();
  console.log(boom);
  if(!boom.includes(selectedNumber)){
    this.classList.add('clicked');
  }else{
    this.classList.add('red-clicked');
  }
  
}

function bombsGenerate(){
  const bombs = [];
  while(bombs.length < bombsNumber){
    const bomb = getRandomInt(1, squareNumber);

    if(!bombs.includes(bomb)){
      bombs.push(bomb);
    }
  }
  return bombs
}

function getRandomInt(min, max){
  return Math.floor(Math.random()*(max-min + 1) + min);
}