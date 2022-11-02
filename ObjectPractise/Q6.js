// 6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

let array = [6, 4, 0, 3, -2, 1];

for (var x = 0; x < array.length; x++) {
  for (var y = 0; y < (array.length - x - 1); y++) {
    if (array[y] > array[y + 1]) {
      var temp = array[y];
      array[y] = array[y + 1];
      array[y + 1] = temp;
    }
  }
}

console.log(array);
