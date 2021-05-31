const BMICalculator = {
  calculateMetric(height, weight) {
    let bmiValue = weight / (height * height)
    let classification = this.setBMIClassification(bmiValue)
    return { bmiValue: bmiValue, classification: classification }
  },
  setBMIClassification(value) {
    if (value < 18.5) {
      return { message: 'underweight', color: 'red' }
    } else if (value < 25) {
      return { message: 'normal weight', color: 'green' }
    } else {
      return { message: 'overweight', color: 'darkred' }
    }
  }
}