import EyeQEngine from "./eyeqCoin.js";

const eyeq = new EyeQEngine();

eyeq.addData([3, 12, 25, 33, 41]);
eyeq.addData([7, 12, 25, 36, 44]);
eyeq.addData([3, 12, 19, 33, 41]);

console.log(eyeq.getReport());
