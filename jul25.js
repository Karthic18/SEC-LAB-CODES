let details ={
    name:"js",
    totalmark:100
}
console.log(details.name);
console.log(details["totalmark"])
// an array of object is a collection where each element is an object with properties.
//this is used to group related data together in a structured way.
let detailss ={
    subject:(
        java:100
    ),
    sum:function(){
        let sum=this.subject.dbms+this.subject.java;
    }
}
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.dbms);
console.log(details.subject["java"])

//object destructure is syntax in javascript that allows you to extract values from object and assing them to variable in a clean and readable way.
let person={
    job:"softwareTester"
    salary:25000
}
const{firstkey,secondkey}=person
console.log(firstkey+" "+secondkey)

let arr=new Array(1,2,"three");
console.log(arr[2]);
//array destructing
let arr2=["js",true,false];
const[name,b1,b2]=arr2;
console.log(name)
//filter-return a new array containing only the 1
//elements that match a condition.
let students={
    {name:"john",grade:"A"}
    {name:"joe",grade:"B"}
    {name:"kirthik",grade:"++++"}
}

let names=["asha","bala","charan"];
names.splice(1,1,"david");
console.log(names);