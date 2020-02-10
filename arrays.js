var chocolateBars = ['snickers', 'hundred grand', 'kitcat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
