/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
*/

function array_diff(a, b) {
  if (a !== []) {
    for (i=0; i<a.length; i++) {
      for (j=0; j<b.length; j++) {
        if (a[i] == b[j]) {
          a.shift(a[i]);
        }
      }
    }
  }
  return a;
}


function array_diff(a,b) {
  return a.filter((current !== b[0]), [])
}

function array_diff(a,b) {
  for (i=0; i<a.length; i++) {
    for (j=0; j<b.length; j++) {
      a[i] !== b[j] ? difference.push(a[i]) : a[i] = ''
    }
  }
}