
// Program for Prime Number
// const n=parseInt(prompt('enter a no'));

// if(n==1){
//     console.log(`${n} is neither a prime number nor a composite number`);
// }
// else if(n==2){
//     console.log(`${n} is always prime`);
// }
// else{
//     for (i=2;i<n;i++){
//         if(n%i==0){
//             var res=`${n} is not a prime number`;
            
//             break;
//         }else{
//             var res=`${n} is a prime number`;
            
//         }
//     }
//     console.log(res);
// }



// Prime number with function

// const Prime=function(number){
//   if(number==1 || number==2){
//         var res=`${number} is exceptional case`;
//     }
//     for (i=2;i<number;i++){
   
//     if(number%i==0){
//             var res=`${number} is not prime `;
//             break;
//     }else{
//             var res=`${number} is prime`;
//         }
//     }return res;
// }

// console.log(Prime());


// Prime numbers from 1 to 20

// for (i=1;i<=100;i++){
//     for (j=2;j<i;j++){
//         if(i%j==0){
//             break;  
//         }
//     }if(i==j){
//         console.log(i)
//     }
    
// }

// To find maximum and minimum value from an array 

// const numbers=[12,-100,23,34,45,56,100,50,'error',true,null,45,30,20,10,-1,-10,-20,-30,200];

// let max=numbers[0];
// let min=numbers[0];

// for (i in numbers){
// if(numbers[i]<min){ min=numbers[i];}
   
// if (numbers[i]>max){max=numbers[i];}
// }
// console.log(`the difference of min and max value is ${max-min}`);





// USING FUNCTION

// const numbers=[12,-100,23,34,45,56,100,50,'error',true,null,45,30,20,10,-1,-10,-20,-30,200];

// const calAmp=(n)=>{

// let max=n[0];
// let min=[0];
// for (i in n){
//     if(n[i]>max){
//         max=n[i];
        
//     }else if(n[i]<min){
//         min=n[i];
//     }
// }console.log(`maximum value from array is ${max}`);
// console.log(`mimimum value is ${min}`);

// }

// calAmp(numbers);


// FINDING TEMP WITH THE HELP OF OBJECT INSIDE AN FUNCTION

// const temp=function()
// {
//     const measurement={
//         type:'tempMeasure',
//         unit:'celcius',
//         value:(prompt('enter temp here')),
//     }
//     return tempInCelcius=measurement.value+273;
// }

// console.log(temp());


//PROBLEM-  GIVEN AN ARRAY - YOU HAVE TO CONSOLE THE OUTPUT FROM THE ARRAY LIKE "...17 DEGREE CELCIUS IN 1 DAY...21 DEGREE CELCIUS IN 2 DAY...23 DEGREE CELCIUS IN 3 DAY..."

// const arr=[17,21,23];

// let str='...';
// for (i=0;i<arr.length;i++){
    
//  str=str+`${arr[i]} degree celcius in ${i+1} day...`
  
   
// }
// console.log(str);



//EASY WAy TO FIND PRIME NO 

// let num=parseInt(prompt('enter a no '));

// let count=0;
// for (i=1;i<=num;i++){            
//     if(num%i==0){                    
//         count=count+1;
           
//     }

// console.log(count);
// }
// if (count==2){
//     console.log(`${num} is a Prime no`)
// }else(console.log(`${num} is not a Prime no`))



// for (i=1;i<=20;i++){
//     for (j=2;j<i;j++){        
//         if(i%j==0){
//            break;
//         }
//         }if(i==j){
//             console.log(i);
//         }
//         }


let x=parseInt(prompt('enter a no'));

var count = 0;

for (i=1;i<=Math.ceil(x/2);i++){
if(x%i==0){
count=count+1;
}
}if(count==2){
    console.log(`${x} is not prime`);
}else{
    console.log(`${x} is Prime no `);
}

            
        
    



    































