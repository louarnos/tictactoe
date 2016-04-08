# Links
  
  - Game [http://louarnos.github.io/tictactoe/]
  - Wire Frames [https://moqups.com/louarnos/2LA4KLz5]
  

# Approach

I began the project with psuedo-code, mapping out mostly my javascript and how it would interact with front end and back end. I decided I would need a game object which would contain a board and game data and user objects which would store user data. Data stored in these places would be affected by player actions and would be used to update the API. I decided I would need a move function, findWin function, and all the ajax calls. I then drew up some wireframes.

Once I had a good idea about how I was going to structure the data and how I wanted to game to look, I began creating a very rough front end that allowed me to being my javascript. I created sign-up, log-in, sign-out forms, made sure my ajax calls for these were operating correctly. I then worked on the create game ajax call and linked the user logged in with this game. From where I was able to begin programming the logic of my game in JS. Once I could mark the board successfully and find a win, I created the ajax request to update the gameboard on the API.  

At this point I needed to tie up loose ends. The I worked out the change password function, I made the start game button reset the board and allow a new game, and I score counter. The final thing I did was GET request to retrieve games associated with the user. 

# User Stories

    As a user I want to be able to customize my icon I use to mark the board so
    that I identify with the game.

    As a user I want to be able to have my username show up on the score board so
    that the game feels personalized.

    As a user I want to be able to determine the size of the game to change the
    game up some and to keep things interesting.

    As a user I want to be able to see my total number of wins and losses,
    against this opponent and in general  to see my progress in the game.

# Things to complete/Refactor

  - My findWin is hard-coded. I'd like to make it more dynamic. 
  - If a login/sign-up/sign-out/pw-change fails, the user isn't notified.
  - The front-end could use a decent amount of work to make it more visually pleasing.
  - Some of my naming/file structure could be reworked to make the code more readable/semantic. 
  - I'd like to add some more functionality. Especially allowing the user to customize the game.
  - CSS files could be rehashed.

