// let inputs=document.querySelector('input');
// let buttons=document.querySelectorAll('button');

// let string="";
// let arr=Array.from(buttons); 
// //converting buttons into array
// arr.forEach(button=>{
//   button.addEventListener('click',(event)=>{
//     if(event.target.innerText=== '='){
//       string=eval(string);// mathematical function in js to evaluate element passed in the string
//       inputs.value=string;
//     }else if(event.target.innerText=='A/C'){
//       string="";
//       inputs.value=string; 
      
//     }else if(event.target.innerText=='DEL'){
//       string=string.substring(0,string.length-1);//substring function gives the string from 0 to end-1 paramerter passed indexing starts from 0 
//       inputs.value=string;
//     }
      
      
//     else{
//       string+=event.target.innerText;
//       inputs.value=string;
//     }
    
//   })
// })

let inputs=document.querySelector('input');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons); 
//converting buttons into array
arr.forEach(button=>{
  button.addEventListener('click',(event)=>{
    if(event.target.innerText=== '='){
      string=eval(string);// mathematical function in js to evaluate element passed in the string
      inputs.value=string;
    }else if(event.target.innerHTML=='A/C'){
      string="";
      inputs.value=string; 
      
    }else if(event.target.innerHTML=='DEL'){
      string=string.substring(0,string.length-1);//substring function gives the string from 0 to end-1 paramerter passed indexing starts from 0 
      inputs.value=string;
    }
      
      
    else{
      string+=event.target.innerHTML;
      inputs.value=string;
    }
    
  })
})