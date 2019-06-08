function sym(args) {
  var dict = new Object();
  var response = new Set();

  
  for(var argsIndex=0; argsIndex<arguments.length; argsIndex++){
    var uniqueset = new Set(arguments[argsIndex])
    var uniqueArr = Array.from(uniqueset);
      for(var i=0; i<uniqueArr.length; i++){
      if(dict[uniqueArr[i]])
          dict[uniqueArr[i]]+=1;
      else
          dict[uniqueArr[i]]=1;
      }
  }
  
  for(var key in dict) {
    if(dict[key]%2==1)
      response.add(key)
  }
  
  return Array.from(response).map(Number);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));