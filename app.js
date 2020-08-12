var scores, roundScore, activePlayer, dice0, dice1, gamePlaying;

//set the starting variables in each game
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
if (gamePlaying){
//Generate 2 random dice numbers for the two dices
    dice0 = Math.floor(Math.random() * 6) + 1;
    dice1 = Math.floor(Math.random() * 6) + 1;

//Display Result
    var diceDom0 = document.querySelector('.dice-0');
    var diceDom1 = document.querySelector('.dice-1');

    diceDom0.style.display = 'block';
    diceDom1.style.display = 'block';

    diceDom0.src = `dice-${dice0}.png`;
    diceDom1.src = `dice-${dice1}.png`;

//Update the result if rules are met
    if (dice0 !== 1 && dice1 !== 1){
        //add score
        roundScore += dice0 + dice1;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;

    }else{
        nextPlayer();
    }
}});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        //add current score and update UI
        scores[activePlayer] += roundScore;
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    
    //Check if player won the game
    if (scores[activePlayer] >= 100){
        document.querySelector(`#name-${activePlayer}`).textContent = "Winner!"
        document.querySelector('.dice-0').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        gamePlaying = false;
    } else{
        nextPlayer();
    }}});
        
    
   

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    document.getElementById(`current-0`).textContent = 0;
    document.getElementById(`current-1`).textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
};

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById(`name-0`).textContent = "Player 1";
    document.getElementById(`name-1`).textContent = "Player 2";

    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    
    document.querySelector(`.player-0-panel`).classList.add('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
};