$(document).ready(() => {
  const gameState = {
    playing: false,
    score: 0,
    trialsremaining: 3,
  }
  const fruits = {
    apple: {
      path: 'images/apple.png',
      points: 1,
    },
    banana: {
      path: 'images/banana.png',
      points: 10,
    },
    cherry: {
      path: 'images/cherry.png',
      points: 2,
    },
    drink: {
      path: 'images/drink.png',
      points: 6,
    },
    grape: {
      path: 'images/grape.png',
      points: 8,
    },
    lemon: {
      path: 'images/lemon.png',
      points: 3,
    },
    pineapple: {
      path: 'images/pineapple.png',
      points: 5,
    },
    skull: {
      path: 'images/skull.png',
      points: 'death',
    }
  }
  $('#startreset').click((e) => {
    if(gameState.playing) {
      location.reload();
    } else {
      startGame()
    }
  })
  const appendLives = (lives = gameState.trialsremaining) => {
    for (let i = 0; i < lives; i++) {
      $('#trialsremaining').append('<img class="heartimage" src="images/life.png" />');
    }
  }
  const startGame = () => {
    gameState.playing = true;
    $('#scorevalue').html(gameState.score);
    $('#trialsremaining').show();
    $('#startreset').text('Reset Game');
    appendLives();
    startAction();
  }
  const startAction = () => {
    $('#fruit1').attr('src', fruits[chooseRandom()].path)
    $('#fruit1').show()
    $('#fruit1').css({'left': Math.round(Math.random() * 550), 'top': '-50px'})
  }
  /**
    picks a random number, and assigns it to a value to randomly generate fruits
  */
  const chooseRandom = () => {
    const randNumber = Math.floor(Math.random() * 100);
    if (randNumber < 10) {
      return 'skull';
    } if (randNumber < 27) {
      return 'apple'
    } if (randNumber < 45) {
      return 'cherry'
    } if (randNumber < 61) {
      return 'lemon'
    } if (randNumber < 74) {
      return 'pineapple'
    } if (randNumber < 85) {
      return 'drink'
    } if (randNumber < 94) {
      return 'grape'
    } if (randNumber < 100) {
      return 'banana'
    }
  }
})
