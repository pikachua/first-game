var myGame = {
  config : {
      lives: 6,
      speed :10.0,
      actionButton: 'leftmouse',
      endTrigger : 'Trigger.End',
      screenImages : [
        {
          src:'/images/start1.png',
          id : 'mainScreen'
        },
        {
          src : '/images/lose1.png',
          id : 'loseScreen'
        },
        {
          src : '/images/win1.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 0,
          y : 0,
          z : -150

        },
        rotation : {
          x: 0,
          y: 0,
          z: 0
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic
  }
};

function start(){
    myGame.game = new A3D.Game.Scroller(myGame.config);
    myGame.game.loadScene('/Scenes/','mason.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );
