// This function generates a random number while having a min and max value which can be specified

const genRandomNum = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  };
  
  export { genRandomNum };