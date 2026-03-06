startCounter(){




function startCounter(){

let count = 1;
let target = 1060;

let counter = document.getElementById("studentCounter");

let interval = setInterval(function(){

counter.innerText = count;

count++;

if(count > target){
clearInterval(interval);
}

},2);

                           }
