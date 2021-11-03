const btnPlay = document.getElementById('btn-play');
const container = document.getElementById('main-container');

btnPlay.addEventListener('click', function(){
  const level = document.getElementById('level').value;
  let squareNumber = 0;
  container.innerHTML =''; 
  

  if(level === '1'){
    squareNumber = 100;

  }else if(level === '2'){
    squareNumber = 81;
  }else{
    squareNumber = 49;
  }
  console.log(squareNumber);

  for(let i = 0; i < squareNumber; i++){
    //creo l'elemento square e lo aggiungo al main-container con dentro un numero da q a squareNumber
    sq = createSquare(container);
    sq.innerHTML = i + 1;

    sq.addEventListener('click', function(){
      this.classList.add('clicked');
    })
  };
});

/**
 * generatore di square
 * @param {HTMLDivElement} target 
 * @returns 
 */
function createSquare(target){
  const sq = document.createElement('div');
  let classLevel = '';

  sq.className = 'square';

  if(level.value === '1'){
    sq.classList.add('easy');
    sq.classList.remove('hard', 'crazy')
  }else if(level.value === '2'){
    sq.classList.add('hard');
    sq.classList.remove('easy', 'crazy')
  }else{
    sq.classList.add('crazy');
    sq.classList.remove('hard', 'easy')
  }
  console.log(classLevel)

  target.append(sq);
  return sq;

};