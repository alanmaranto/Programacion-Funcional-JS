const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

// const CALORIES = document.getElementById('calories');
// const DESCRIPTION = document.getElementById('description');
// const CARBS = document.getElementById('carbs');
// const PROTEIN = document.getElementById('protein');

// console.log(`Calories: ${CALORIES.value}`);
let { 
  description,
  calories,
  carbohydrates,
  protein 
} = document.getElementsByTagName('input');