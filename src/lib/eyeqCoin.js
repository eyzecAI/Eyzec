// EyeQ Coin Engine (Eyzec Core Logic)

class EyeQEngine {
  constructor() {
    this.history = [];
  }

  // Add new data point (numbers, patterns, etc.)
  addData(data) {
    this.history.push(data);
  }

  // Analyze frequency of numbers
  getFrequency() {
    const freq = {};

    this.history.flat().forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
    });

    return freq;
  }

  // Detect repeating patterns
  detectPatterns() {
    const patterns = {};
    const sequences = this.history.map(arr => arr.join("-"));

    sequences.forEach(seq => {
      patterns[seq] = (patterns[seq] || 0) + 1;
    });

    return patterns;
  }

  // Generate prediction based on weighted frequency
  generatePrediction(count = 5) {
    const freq = this.getFrequency();

    const sorted = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .map(entry => Number(entry[0]));

    return sorted.slice(0, count);
  }

  // EyeQ Score (how strong pattern consistency is)
  calculateEyeQ() {
    const patterns = this.detectPatterns();
    const values = Object.values(patterns);

    if (values.length === 0) return 0;

    const max = Math.max(...values);
    const total = values.reduce((a, b) => a + b, 0);

    return ((max / total) * 100).toFixed(2);
  }
}

// Example usage
const eyeq = new EyeQEngine();

eyeq.addData([3, 12, 25, 33, 41]);
eyeq.addData([7, 12, 25, 36, 44]);
eyeq.addData([3, 12, 19, 33, 41]);

console.log("Frequency:", eyeq.getFrequency());
console.log("Patterns:", eyeq.detectPatterns());
console.log("Prediction:", eyeq.generatePrediction());
console.log("EyeQ Score:", eyeq.calculateEyeQ(), "%");

export default EyeQEngine;
