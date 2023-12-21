// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.

// My Solution

function well(x){
    const goodIdeas = x.filter( idea => idea === "good").length
    if ( goodIdeas < 3 && goodIdeas > 0 ){
      return 'Publish!'
    } else if ( goodIdeas > 2 ){
      return 'I smell a series!'
    }
    return 'Fail!'
  }

// Other Solution

const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }

// Another one with for loops

function well(x) {
    var good = 0
    
    for (var i = 0; i < x.length; ++i)
      if (x[i] == 'good' && ++good > 2)
        return 'I smell a series!'
    
    return good ? 'Publish!' : 'Fail!'
  }