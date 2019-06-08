function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var dict = new Object();
    var response = [];

    console.log(arr1);
    console.log(arr2);
    for(var i=0; i<arr1.length; i++){
        dict[arr1[i][1]] = arr1[i][0];
    }
    for(var i=0; i<arr2.length; i++){
        if(dict[arr2[i][1]])
            dict[arr2[i][1]] += arr2[i][0];
        else
            dict[arr2[i][1]] = arr2[i][0];
    }

    var i=0;
    for(var inventory in dict){
        response.push([dict[inventory], inventory]);
    }

    sortArray(response);
    return response;
}

function sortArray(arr){
    arr.sort(function(a, b){
        if(a[1] < b[1]) return -1;
        if(a[1] > b[1]) return 1;
        return 0;
    })
}

function updateInventoryOptimized(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    sortArray(arr1)
    sortArray(arr2)

    console.log(arr1);
    console.log(arr2);

    var arr3 = [];
    var i=0, j=0;

    do{
        if(i==arr1.length){ arr3.push(arr2[j]); j++; continue;}
        if(j==arr2.length){ arr3.push(arr1[i]); i++; continue;}
        
        if(arr1[i][1]>arr2[j][1]){
            arr3.push(arr2[j])
            j++;
        }else if(arr1[i][1]<arr2[j][1]){
            arr3.push(arr1[i])
            i++;
        }else{
            arr3.push([ arr1[i][0]+arr2[j][0], arr1[i][1] ])
            i++;
            j++;
        }    
    }while(i<arr1.length || j<arr2.length)
    
    return arr3;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// var curInv=[
//     [1,'A'],
//     [2,'B'],
//     [3,'E']
// ]
// var newInv=[
//     [1,'A'],
//     [2,'C'],
//     [3,'G']
// ]
console.log(updateInventory(curInv, newInv));
console.log('Optimized');
console.log(updateInventoryOptimized(curInv, newInv));