function isConjuction(a,b){
    if(a===b) return true; //A string is a conjuction of itself
    if(a.length !== b.length) return false;
    
    var dictOccurencesA = new Object();
    
    for(var i=0;i<a.length;i++){
        if(dictOccurencesA[a[i]]){ //letter found
            dictOccurencesA[a[i]]++;
        }
        else{
            dictOccurencesA[a[i]] = 1;
        }
    }
    for(var i=0;i<b.length;i++){
        if(dictOccurencesA[b[i]]){ //letter found
            dictOccurencesA[b[i]]--;
            if(dictOccurencesA[b[i]]<0) return false;
        }
        else
            return false;
    }
    return true;
}

var stringA = 'ABA',
 stringB = ['BAA','ABA', 'BAAC', 'ABC', 'AAB'];

for(var i=0;i<stringB.length;i++)
    console.log(`${stringB[i]} => ${isConjuction(stringA,stringB[i])}`);