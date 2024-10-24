class FP {
  constructor(first, last, houseMembers, houseSize, foodChoice) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice; 
    this.houseHoldPointsValue = this.calculateHouseHoldPoints();
    this.houseSizePointsValue = this.calculateHouseSizePoints();
    this.foodPointsValue = this.calculateFoodPoints(); 
    this.total = this.calculateTotal();
  }

  calculateHouseHoldPoints() {
    const points = {
      1: 14,
      2: 12,
      3: 10,
      4: 8,
      5: 6,
      6: 4
    };
    return points[this.houseMembers] || 2; // Default to 2 for 7 or more members
  }

  calculateHouseSizePoints() {
    const points = {
      large: 10,
      medium: 7,
      small: 4,
      apt: 2
    };
    return points[this.houseSize] || 0; // Default to 0 if size is not recognized
  }

  calculateFoodPoints() {
    const points = {
      meat: 10,
      dairy: 7,
      vegetarian: 4,
      vegan: 2
    };
    return points[this.foodChoice] || 0; // Default to 0 if food choice is not recognized
  }

  calculateTotal() {
    return this.houseHoldPointsValue + this.houseSizePointsValue + this.foodPointsValue;
  }
}

export { FP };