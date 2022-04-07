function startGame() {
  // starting a new game

  const playerName: string = 'Jeff';
  logPlayer(playerName);

  let messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name: any) {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);