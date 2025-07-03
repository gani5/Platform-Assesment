function sort(width, height, length, mass) {
  const volume = width * height * length;

  const isBulky = (
    volume >= 1_000_000 ||
    width >= 150 ||
    height >= 150 ||
    length >= 150
  );

  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) {
    return "REJECTED";
  } else if (isBulky || isHeavy) {
    return "SPECIAL";
  } else {
    return "STANDARD";
  }
}

// Test Cases
console.log(sort(1000, 1000, 10, 10));  // SPECIAL
console.log(sort(10, 10, 10, 25));     // SPECIAL
console.log(sort(200, 10, 10, 25));    // REJECTED
console.log(sort(10, 10, 10, 10));     // STANDARD
console.log(sort(150, 10, 10, 10));    // SPECIAL
console.log(sort(100, 100, 100, 10));  // SPECIAL
console.log(sort(10, 10, 10, 20));     // SPECIAL
