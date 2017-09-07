var set1 = new Set();
set1.add("one");
set1.add("two");
set1.add("three");
set1.add("four");

for(let element1 of set1){
    console.log(element1);
}

var array1 = ["five","six","seven"]
for(let element2 of array1){
    console.log(element2);
}

var map1 = new Map();
map1.set("eight","8");
map1.set("nine","9");
map1.set("ten","10");
for(let element3 of map1.keys()){
    console.log(element3);
}

for(let element4 of map1.values()){
    console.log(element4);
}
