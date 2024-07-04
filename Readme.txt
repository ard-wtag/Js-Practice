This is a rock paper scisor project .
Scores are update using DOM manipulation by JS 
When one player (User or Computer) reaches score 3, the game can be reset 

The steps i followed : 

First i thought of the outcomes of a game: 
    possible outcomes : 
        1. Player wins
        2. Computer wins
        3. Its a Draw 

Then i thought about player and computer choice 
    Player choice : 
        3 buttons are given, player can chose one 
    Computer Choice :
        I have saved the possible options inside a array, then i generate a random index, based on that rock/paper/scissor
        is returned 
    win conditions : 
         Rock beats Scissor, Scissor beats Paper, Paper beats Rock. 

Deciding Winner : 
    Giving Each Round Output: 
        Displaying a message who won, the computer of the player, or Show its a tie 
    Ending Game : 
        When either side reaches the score 3, The game ends, that party wins 