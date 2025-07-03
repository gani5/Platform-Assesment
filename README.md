# 📦 Package Sorter - Thoughtful Robot Automation

This project implements a package classification function for Thoughtful’s robotic automation factory. The goal is to automatically sort packages into correct categories based on their dimensions and mass.

## 🚀 Functionality

The function `sort(width, height, length, mass)` determines whether a package should be:

- **STANDARD**: if it's neither bulky nor heavy.
- **SPECIAL**: if it's bulky *or* heavy.
- **REJECTED**: if it's both bulky *and* heavy.

### 📦 Bulky Criteria
A package is **bulky** if:
- Volume (width × height × length) is ≥ 1,000,000 cm³, OR
- Any single dimension is ≥ 150 cm.

### ⚖️ Heavy Criteria
A package is **heavy** if:
- Mass is ≥ 20 kg.

## 📂 Files

- `packageSorter.js` – Contains the main sorting function and test cases.
- `README.md` – Project documentation.

## 🧪 Example Usage

```javascript
sort(1000, 1000, 1, 10);  // Returns: "SPECIAL"
sort(10, 10, 10, 25);     // Returns: "SPECIAL"
sort(200, 10, 10, 25);    // Returns: "REJECTED"
sort(10, 10, 10, 10);     // Returns: "STANDARD"
