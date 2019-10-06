const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

const CALORIES = document.getElementById('calories');
const DESCRIPTION = document.getElementById('description');
const CARBS = document.getElementById('carbs');
const PROTEIN = document.getElementById('protein');

// const { 
//   CALORIES,
//   DESCRIPTION,
//   CARBS,
//   PROTEIN 
// } = document.getElementsByTagName('input');
const errorClass = 'is-invalid'

DESCRIPTION.addEventListener('keypress', () => DESCRIPTION.classList.remove(errorClass))
CALORIES.addEventListener('keypress', () => CALORIES.classList.remove(errorClass))
CARBS.addEventListener('keypress', () => CARBS.classList.remove(errorClass))
PROTEIN.addEventListener('keypress', () => PROTEIN.classList.remove(errorClass))

const validateInputs = () => {
  DESCRIPTION.value ? '' : DESCRIPTION.classList.add(errorClass)
  CALORIES.value ? '' : CALORIES.classList.add(errorClass)
  CARBS.value ? '' : CARBS.classList.add(errorClass)
  PROTEIN.value ? '' : PROTEIN.classList.add(errorClass)

  if (DESCRIPTION.value && CALORIES.value && CARBS.value && PROTEIN.value) {
    console.log('ok')
  }
}