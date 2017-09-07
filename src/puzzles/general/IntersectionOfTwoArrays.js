var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

intersection(firstArray, secondArray);

function intersection(firstArray,secondArray) {

    var intersectionMap = new Map();

    firstArray.forEach(function (element) {
        if(secondArray.forEach(function(element1) {
                if (element1==element) {
                    //console.log("intersect elements ->" + element)
                    intersectionMap.set(element, element);
                }
            })) {

        }
    });

    console.log(intersectionMap);

    var unionSet = new Set();
    var unionArray = firstArray.concat(secondArray);

    var unionSet;
    unionArray.forEach(function (element) {
        if(!unionSet.has(element))
        unionSet.add(element);
    });

    console.log(unionSet);
}