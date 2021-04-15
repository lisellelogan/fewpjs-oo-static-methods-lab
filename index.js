class Formatter {
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(word){
    return word.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const arrOfWords = sentence.split(' ');
    const capitalizeWord = this.capitalize;

    return arrOfWords.map(word => {
      if (arrOfWords[0] === word){
        return capitalizeWord(word)
      } else if (exceptions.includes(word)){
        return word
      } else {
        return capitalizeWord(word)
      }
    }).join(' ')
  }

    
}