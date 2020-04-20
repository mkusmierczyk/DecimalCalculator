let getSecondMaxNumber = array=>{

        const sorted =array.sort(function (a,b) {
            return b-a
        });
        return sorted[1]
    };

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
