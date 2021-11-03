const btnPlay = document.getElementById('btn-play');
const container = document.getElementById('main-container');
const fineGiocoMsg = document.getElementById('finegioco-msg');
const bombsNumber = 16;
let squareNumber = 0;
let boom = '';
let giocoFinito = false;
let squareText = '';
let sqNumbers = [];

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

  boom = bombsGenerate();
  console.log('array bombe',boom);
  
  for(let i = 0; i < squareNumber; i++){
    //creo l'elemento square e lo aggiungo al main-container con dentro un numero da 1 a squareNumber
    sq = createSquare(container);
    sq.innerHTML = `<span> ${i + 1} </span>` ;

    sq.addEventListener('click', handleClickCell);
    
    squareText = sq.innerText;
    
    sqNumbers.push(squareText);
  }
  
  console.log('numero quadrati',sqNumbers);

  
})


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



}

function handleClickCell(event){

  if (giocoFinito == false){
    const selectedNumber = event.target.innerText;

     
    if(boom.includes(parseInt(selectedNumber))){
      this.classList.add('red-clicked');
      giocoFinito = true;
      fineGiocoMsg.innerHTML = 'Hai perso';
      
    }
      
    return this.classList.add('clicked');
  }else{
    console.log('il gioco è finito')
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