
function sum(name,...values){
     let total=0;
for( let n of values){
    total=total+n;

}
console.log("name is :", name)
console.log("total is :",total)
}

console.log(sum("ayush",10,20,30));