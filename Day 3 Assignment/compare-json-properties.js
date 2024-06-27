// 1. How to compare two JSON  have the same properties without order?

function areObjectsEqual(obj1, obj2){

    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);

    if(keys1.length != keys2.length){
        return false;
    }

    keys1.sort();
    keys2.sort();

    for(var i = 0; i < keys1.length; i++){
        if(keys1[i] !== keys2[i]){
            return false;
        }
    }

    for(var i = 0; i < keys1.length; i++){
        var key = keys1[i];
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }

    return true;

}

var obj1 = {
    name: "person 1",
    age: 5
};

var obj2 = {
    age: 5,
    name: "person 1"
};

console.log(areObjectsEqual(obj1, obj2));