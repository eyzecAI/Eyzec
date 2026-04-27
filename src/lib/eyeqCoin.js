// EyeQ Coin Engine (Eyzec Core Logic)

class EyeQEngine {
  constructor() {
    this.history = [];
  }

  addData(data) {
    if (!Array.isArray(data)) {
      throw new Error("Data must be an array of numbers.");
    }

    this.history.push(data);
  }

  getFrequency() {
    const frequency = {};

    this.history.flat().forEach((number) => {
      frequency[number] = (frequency[number] || 0) + 1;
    });

    return frequency;
  }

  detectPatterns() {
    const patterns = {};

    this.history.forEach((entry) => {
      const patternKey = entry.join("-");
      patterns[patternKey] = (patterns[patternKey] || 0) + 1;
    });

    return patterns;
  }

  generatePrediction(count = 5) {
    const frequency = this.getFrequency();

    return Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, count)
      .map(([number]) => Number(number));
  }

  calculateEyeQ() {
    const patterns = this.detectPatterns();
    const patternCounts = Object.values(patterns);

    if (patternCounts.length === 0) {
      return 0;
    }

    const strongestPattern = Math.max(...patternCounts);
    const totalPatterns = patternCounts.reduce((sum, value) => sum + value, 0);

    return Number(((strongestPattern / totalPatterns) * 100).toFixed(2));
  }

  getReport() {
    return {
      frequency: this.getFrequency(),
      patterns: this.detectPatterns(),
      prediction: this.generatePrediction(),
      eyeqScore: this.calculateEyeQ(),
    };
  }
}

export default EyeQEngine;

