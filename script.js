window.onload = function() {
 //When the window loads, complete the code inside the brackets
            const canvas = document.getElementById("gameCanvas");
 //Find element by html ID: gameCanvas
            const ctx = canvas.getContext("2d");
 //Create the variable ctx to make it code shorter        
            canvas.focus();
 //Focus the canavs for automatic play
            let devmode
 //Create devmode Switch
            let playerX = Math.random() * 1100 + 50;
            let playerY = Math.random() * 600 + 100;
 //Set player location randomly
            let playerSize = 20;
 //Set the player size to 20
            devmode = false;
 //Set devmode to false        
            let reefColor = '#c2577d';
            let warshipColor = '#590409';
            let islandColor = '#208c54';
            let islandSize = 35;
            let enemieSize = 25;
            let enimieSpeed = 20;
 //Create Variables for warship, reef, and island size, speed and color for quicker adjustments to styling
            let enemies = [
                
                { x: 0,   y: 650,  speed: enimieSpeed,  size: enemieSize, color: warshipColor}, //S1
                { x: 200, y: 550,  speed: enimieSpeed,  size: enemieSize, color: warshipColor}, //S2
                { x: 100, y: 450,  speed: enimieSpeed,  size: enemieSize, color: warshipColor}, //S3
                { x: 400, y: 350,  speed: enimieSpeed,  size: enemieSize, color: warshipColor}, //S4
                { x: 300, y: 150,  speed: enimieSpeed,  size: enemieSize, color: warshipColor}, //S5
                { x: 500, y: 250,  speed: enimieSpeed,  size: enemieSize, color: warshipColor}, //S6
                { x: 600, y: 750,  speed: enimieSpeed,  size: enemieSize, color: warshipColor}, //S7
               
                { x: 300, y: 300,  speed: 0,   size: enemieSize, color: reefColor}, //R1
                { x: 600, y: 250,  speed: 0,   size: enemieSize, color: reefColor}, //R2
                { x: 200, y: 650,  speed: 0,   size: enemieSize, color: reefColor}, //R3
                { x: 100, y: 350,  speed: 0,   size: enemieSize, color: reefColor}, //R4
                { x: 300, y: -50,  speed: 0,   size: enemieSize, color: reefColor}, //R5
                { x: 400, y: 340,  speed: 0,   size: enemieSize, color: reefColor}, //R6
                { x: 250, y: 300,  speed: 0,   size: enemieSize, color: reefColor}, //R7
                { x: 300, y: 150,  speed: 0,   size: enemieSize, color: reefColor}, //R8
                { x: 450, y: 350,  speed: 0,   size: enemieSize, color: reefColor}, //R9
                { x: 450, y: 450,  speed: 0,   size: enemieSize, color: reefColor}, //R10
                { x: 300, y: 250,  speed: 0,   size: enemieSize, color: reefColor}, //R11
                { x: 500, y: 500,  speed: 0,   size: enemieSize, color: reefColor}, //R12
                { x: 450, y: 100,  speed: 0,   size: enemieSize, color: reefColor}  //R13
            ];
           //Create warships and reefs under var: enemies
            let islands = [
                 { x: 100, y: 500,  speed: 0,   size: islandSize, color: islandColor, port: true} //I1
                ];
 //Create Island(s)

            let coinX = Math.random() * 1100 + 50;
            let coinY = Math.random() * 600 + 100;
            let coinSize = 10;
            let score = 0;
            //Create and load coin position, size, and score
           
            let capitalScore = 0;
           //Create and initialize capitalScore Variable

            window.addEventListener("keydown", function(event) {
                if (event.key === "ArrowRight" || event.key === "d") {
                    if (playerX < canvas.width - playerSize) { playerX = playerX + 15; }
                }
                if (event.key === "ArrowLeft" || event.key === "a") {
                    if (playerX > 0) { playerX = playerX - 15; }
                }
                if (event.key === "ArrowDown" || event.key === "s") {
                    if (playerY < canvas.height - playerSize) { playerY = playerY + 15; }
                }
                if (event.key === "ArrowUp" || event.key === "w") {
                    if (playerY > 0) { playerY = playerY - 15; }
                }
            });
 //Create eventListener for arrow keys to change play variables
 
           function initiateCapScore() {
               if (devmode === true) {
               let chaserY = playerY - 25;
               let chaserX = playerX - 25;
               let chaserSize = 30;
               ctx.fillStyle = "#1c0101";
               ctx.fillrect(chaserX, chaserY, chaserSize, chaserSize);
                    
                    let chaserLeft = chaserX;
                    let chaserRight = chaserX + chaserSize;
                    let chaserTop = chaserY;
                    let chaserBottom = chaserY + chaserSize;
                    if (playerRight > chaserLeft && playerLeft < chaserRight && playerBottom > chaserTop && playerTop < chaserBottom) {
                   alert("You died. Try again?");
                        score = 0;
                        capScore = 0;
                     }
               }
           }
//Create chaser function to work only with (devmode===true)
            

            function updateGame() {
             //Create game updater function in brackets
         
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#32577a";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Clear and Redraw Background
               
                ctx.fillStyle = "#8c8b4f";
                ctx.beginPath();
                ctx.arc(coinX, coinY, coinSize, 0, Math.PI * 2);
                ctx.fill();
 // Draw Coin
               
                ctx.fillStyle = "#202352";
                ctx.fillRect(playerX, playerY, playerSize, playerSize);
 // Draw the Player

              
                ctx.fillStyle = "white";
                ctx.font = "30px serif";
                ctx.fillText("Score: " + score, 40, 100);
  // Draw Score
               
                ctx.fillStyle = "white";
                ctx.font = "30px serif"; 
                ctx.fillText("Capital Score: " + capitalScore, 40, 150);
 //Draw Capital Score
          
                ctx.fillStyle = "white";
                ctx.font = "30 px serif";
  //Draw Port Symbol 
             
                let playerLeft = playerX;
                let playerRight = playerX + playerSize;
                let playerTop = playerY;
                let playerBottom = playerY + playerSize;
   // Setup Player Hitboxes
                if (score === 10){
                    score = 0;
                    capitalScore = capitalScore + 1;
                    initiateCapScore();
                }
                if (capitalScore === 5) {
                    alert("You have won the game!");
                    capitalScore === 0;
                    score === 0;
                    window.location.href = "https://alexandergristede4-netizen.github.io/Warship-Wars-Port-Page/";
                }
                //Create Win phase

                islands.forEach(function(land) {
                    land.x = land.x + land.speed;
                
                if (land.x > canvas.width - land.size || land.x < 0) {
                    land.speed = land.speed * -1;
                }
                    ctx.fillStyle = land.color;
                    ctx.fillRect(land.x, land.y, land.size, land.size);

                    let landLeft = land.x;
                    let landRight = land.x + land.size;
                    let landTop = land.y;
                    let landBottom = land.y + land.size;


                    if (playerRight > landLeft && playerLeft < landRight && playerBottom > landTop && playerTop < landBottom) {
                     if (land.port = true) {
                        //Change Loc. to port
                         window.location.href = "https://alexandergristede4-netizen.github.io/Warship-Wars-Port-Page/";
                     }    
                     }
                     
                
                });
 //Update Islands
                
                ctx.fillStyle = "white";
                ctx.font = "25 px serif";
                ctx.fillText("⚓", 100, 527);
 //Draw Port Symbol               
               
                enemies.forEach(function(badGuy) {
                    badGuy.x = badGuy.x + badGuy.speed;

                    if (badGuy.x > canvas.width - badGuy.size || badGuy.x < 0) {
                        badGuy.speed = badGuy.speed * -1;
                    }
                        

                    ctx.fillStyle = badGuy.color;
                    ctx.fillRect(badGuy.x, badGuy.y, badGuy.size, badGuy.size);

                    let enemyLeft = badGuy.x;
                    let enemyRight = badGuy.x + badGuy.size;
                    let enemyTop = badGuy.y;
                    let enemyBottom = badGuy.y + badGuy.size;
 // Update Enemies and Check Player-Enemy Collisions

                    if (playerRight > enemyLeft && playerLeft < enemyRight && playerBottom > enemyTop && playerTop < enemyBottom) {
                        playerX = Math.random() * 1100 + 50;
                        playerY = Math.random() * 600 + 100;
                        if (score =  ! 0) { 
                            score = score -1 
                        }
                        else { score = 0}
                    }

                  
                });
    // Collision check: Player vs Enemy
              
                let coinLeft = coinX - coinSize;
                let coinRight = coinX + coinSize;
                let coinTop = coinY - coinSize;
                let coinBottom = coinY + coinSize;
   // Setup Coin Hitboxes
                
                if (playerRight > coinLeft && playerLeft < coinRight && playerBottom > coinTop && playerTop < coinBottom) {
                    score = score + 1;
                    coinX = Math.random() * 1100 + 50;
                    coinY = Math.random() * 600 + 100;
                }
// Collision check: Player 1 vs Coin
                
               
                 
                   
                    
             
            }

            setInterval(updateGame, 20);
 //Update Game 20 times a second
        };
