let num=153;
let n=10;
let out=document.getElementById("output");
function print(msg){
console.log(msg);
out.innerHTML+=msg+"<br>";
}
print("Ex - Number :- "+num);
let sumN=0;
for(let i=1;i<=n;i++){
sumN+=i;
}
print("Sum of first "+n+" numbers: "+sumN);
print("Table of "+n+":");
for(let i=1;i<=10;i++){
print(n+" x "+i+" = "+(n*i));
}
let sumDigits=0;
let temp=num;
while(temp>0){
let digit=temp%10;
sumDigits+=digit;
temp=Math.floor(temp/10);
}
print("Sum of its digits: "+sumDigits);
let armSum=0;
temp=num;
while(temp>0){
let digit=temp%10;
armSum+=Math.pow(digit,3);
temp=Math.floor(temp/10);
}
if(armSum===num){
print("Is it an Armstrong number? Yes");
}else{
print("Is it an Armstrong number? No");
}
let isPrime=true;
if(num<=1){
isPrime=false;
}else{
for(let i=2;i<num;i++){
if(num%i===0){
isPrime=false;
break;
}
}
}
if(isPrime){
print("Is it a prime number? Yes");
}else{
print("Is it a prime number? No");
}
let factors=[];
for(let i=1;i<=num;i++){
if(num%i===0){
factors.push(i);
}
}
print("Factors: "+factors.join(", "));