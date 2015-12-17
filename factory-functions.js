/* ************* FACTORY FUNCTIONS ************* */
// Using factory functions instead of classes
// Example inspired by: https://www.youtube.com/watch?v=ImwrezYhw4w


// Example using a class: 
  class Car {
    constructor() {
      this.sound = 'Honk!';
    }
    useHorn() {
      console.log('${this.sound} Out of my way!');
    }
  }

  const jeep = new Car()
  jeep.useHorn() // output: "Honk! Out of my way!"



// Same Car but using a factory function!
  const car = () => {
    const sound = 'Honk!'
    return {
      useHorn: () => console.log('${sound} Out of my way!')
    }
  }
  const jeep = car()
  jeep.useHorn() // output: "Honk! Out of my way!"