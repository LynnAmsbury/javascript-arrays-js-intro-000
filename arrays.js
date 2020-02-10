var chocolateBars = ['snickers', 'hundred grand', 'kitcat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
