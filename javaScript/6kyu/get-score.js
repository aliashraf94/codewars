// You are playing euchre and you want to know the new score after finishing a hand. There are two teams and each hand consists of 5 tricks. The team who wins the majority of the tricks will win points but the number of points varies. To determine the number of points, you must know which team called trump, how many tricks each team won, and if anyone went alone. Scoring is as follows:

// For the team that called trump:

// if they win 2 or less tricks -> other team wins 2 points

// if they win 3 or 4 tricks -> 1 point

// if they don't go alone and win 5 tricks -> 2 points

// if they go alone and win 5 tricks -> 4 points

// Only the team who called trump can go alone and you will notice that it only increases your points if you win all 5 tricks.



// solution

function updateScore(currentScore, calledTrump, alone, tricks){
    const underdog = calledTrump == 1 ? 1 : 0,
          trumpTricks = tricks.filter(x => x == calledTrump).length
    
    switch (trumpTricks) {
      case 3:
      case 4:
        currentScore[calledTrump - 1] += 1
        break
      case 5:
        currentScore[calledTrump - 1 ] += alone ? 4 : 2
        break
      default:
        currentScore[underdog] += 2
    }
    
    return currentScore  
  }