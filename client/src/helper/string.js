function capitalizeFirstLetter(word) {
    if (typeof word !== 'string') {
      throw new Error('Input has to be string');
    }
  
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  export { capitalizeFirstLetter }
  

  