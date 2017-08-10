var str2 = "3531";
reverse(str2);
//var str2 = "reverone";
//reverse(str2);

function reverse(str2) {
    console.log(str2);
    var array1 = str2.split("").map(String);
    //console.log(array1);

    let result="";
    for(let i=(array1.length-1);i>=0;i--){
        console.log(array1[i]);
        result = result+array1[i];
    }

    console.log("original-"+str2+"-reverse-"+result);

    if(str2==result){
        console.log("palindrome");
    }else {
        console.log("Non palindrome");
    }

}