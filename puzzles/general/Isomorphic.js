//let flag = iso("egg","agg");
var flag = iso("foo","bar");
if(flag){
    console.log("iso")
}else{
    console.log("Notiso")
}
function iso(string1,string2) {
    if(string1.length!=string2.length){
        return false;
    }
    var array1 = string1.split("").map(String);
    var array2 = string2.split("").map(String);

    var map  = new Map();
    for(let i=0;i<array1.length;i++) {
        let c1 = array1[i];
        let c2 = array2[i];

        if (map.has(c1)) {
            if (map.get(c1) != c2) {
                return false;
            }
        } else if (map.get(c2)){
            return false;
        }else {
            map.set(c1,c2);
            return true;
        }
    }
}