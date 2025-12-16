// start game

document.querySelector(".start-game span").onclick = function (){
	
	let userNameOne = prompt("Name Of First Player?");
	let userNameTwo = prompt("Name Of Second Player?");
	
	if(userNameOne == null || userNameOne == "" && userNameTwo == null || userNameTwo == "" ){
		
		document.querySelector(".name-player-one span").innerHTML = "Unknown";
		document.querySelector(".name-player-two span").innerHTML = "Unknown";
	}else{
		
		document.querySelector(".name-player-one span").innerHTML = userNameOne;
		document.querySelector(".name-player-two span").innerHTML = userNameTwo;
	}
	setTimeout(()=>{
		document.querySelector(".start-game").remove();	
	}, 3000);
	document.querySelector('#start').play();
}
// rotate the cards
let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = [...Array.from(blocksContainer.children)];

let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

let numberOfTries = 0;

blocks.forEach((block , index)=>{ 

	block.style.order = orderRange[index];
	
	block.addEventListener('click', function(){
		
		flipBlock(block);
		
	});
	
});

function shuffle(array){
	
	let current = array.length,
		temp,
		random;
		
	while(current > 0){
		
		random = Math.floor(Math.random() * current);
		
		current--;
		
		temp = array[current];
		
		array[current] = array[random];
		
		array[random] = temp;
	}
	
}
function flipBlock(selectedBlock){
	
	selectedBlock.classList.add("is-flipped");
	
	let allFleppedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
	
	if(allFleppedBlocks.length === 2){
		
		stopClicking();
		
		checkMathedBlocks(allFleppedBlocks[0] , allFleppedBlocks[1])
		
	}
	
}
function stopClicking(){
	
	blocksContainer.classList.add('no-clicking');
	
	setTimeout(()=>{
		blocksContainer.classList.remove('no-clicking');
	}, duration);
	
}
function checkMathedBlocks(firstBlock , secondBlock){
	
	
	let triesOfPlayerOne = document.querySelector('.tries-player-one span');
	let triesOfPlayerTwo = document.querySelector('.tries-player-two span');
	
	if(firstBlock.dataset.animals === secondBlock.dataset.animals){
		
		firstBlock.classList.remove("is-flipped");
		secondBlock.classList.remove("is-flipped");
		
		firstBlock.classList.add("has-match");
		secondBlock.classList.add("has-match");
		document.querySelector('#success').play();
		++numberOfTries;
	}else{
		++numberOfTries;
		if(numberOfTries % 2 ==0){
		triesOfPlayerTwo.innerHTML = parseInt(triesOfPlayerTwo.innerHTML) + 1;
		}else{
		triesOfPlayerOne.innerHTML = parseInt(triesOfPlayerOne.innerHTML) + 1;
		}
		setTimeout(() => {
			
			firstBlock.classList.remove("is-flipped");
			secondBlock.classList.remove("is-flipped");
			
		},duration);
		
		document.querySelector('#fail').play();
		
	}
	
}
































