const aa = [7, 8];
const bb = [4, 5];
const cc = [1, 2, 3];
const dd = [6, 9];

function joinArrays(array1, array2, array3, array4) {
    let newArray = [...array1, ...array2, ...array3, ...array4];
    newArray.sort(function (a, b) {
        return b - a
    });
    console.log(newArray)
}

joinArrays(aa, bb, cc, dd)



