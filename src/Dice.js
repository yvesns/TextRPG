class Dice{
  function roll(sides){
    return Math.floor(Math.random() * sides) + 1;
  }
}

module.exports = Dice;
