class FormulaGenerator {
  constructor() {}
  
  generateFormulas() {
    const formulas = [];
    const totalProblems = 1000;

    console.log(`Generating ${totalProblems} addition problems with sum ≤ 10`);

    for (let i = 0; i < totalProblems; i++) {
      let x, y, z;

      do {
        x = this.generateRandomNumber(1, 9);
        y = this.generateRandomNumber(1, 9);
        z = x + y;
      } while (z > 10);

      formulas.push([x, '+', y, '=', z]);
    }

    console.log(`Generated ${formulas.length} formulas`);
    return this.shuffleArray(formulas);
  }
  
  
  // ============ UTILITY METHODS ============
  // These methods are ready to use in your formula generation

  // ------------ Helper Methods ------------

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  numberToDigits(number) {
    return number.toString().split('');
  }

}