//only accessible in the function in which they are declared.
function SendMessage()
{
    let x=10;
    console.log("hello javascript");
    console.log(x);//within
}
//SendMessage();
//block scope
function Check()
{
    if(true){
        let name="webdevelopment";
        var iscloudy=true;
        console.log(name);
    }
    console.log(iscloudy);
}
//Check()

//callback func in js that is passed as an arguement to another function and is executed after the completion of that function.
//mainly used in for:
//handling asynchronousoperations like APIs timeouts or event handling.
function First()
{
    console.log("this is my first");
}
function Second(callback)
{
    console.log("this is my second");
    setTimeout(callback,2000);
}
Second(First)

let count=0;
let input=()=>{
    count++;
    console.log(count);
     if(count==5){
        in
     }
}
input();
