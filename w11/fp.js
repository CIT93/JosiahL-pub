class FP {
    constructor(first, last, houseMembers, houseSize, ) {
      this.first = first
      this.last = last
      this.houseMembers = houseMembers
      this.houseSize = houseSize
      this.houseHoldPoints();
      this.houseSizePoints();
      this.calculateTotal();
    }
  
    houseHoldPoints() {
      if (this.houseMembers === 1) {
        this.houseHoldPointsValue = 14;
      } else if (this.houseMembers === 2) {
        this.houseHoldPointsValue = 12;
      } else if (this.houseMembers === 3) {
        this.houseHoldPointsValue = 10;
      } else if (this.houseMembers === 4) {
        this.houseHoldPointsValue = 8;
      } else if (this.houseMembers === 5) {
        this.houseHoldPointsValue = 6;
      } else if (this.houseMembers === 6) {
        this.houseHoldPointsValue = 4;
      } else if (this.houseMembers >= 7) {
        this.houseHoldPointsValue = 2;
      }
    }
  
    houseSizePoints() {
      if (this.houseSize === "large") {
        this.houseSizePointsValue = 10;
      } else if (this.houseSize === "medium") {
        this.houseSizePointsValue = 7;
      } else if (this.houseSize === "small") {
        this.houseSizePointsValue = 4;
      } else if (this.houseSize === "apt") {
        this.houseSizePointsValue = 2;
      }
    }
  
    calculateTotal() {
      this.total = this.houseHoldPointsValue + this.houseSizePointsValue;
    }
  }
  
  export { FP }