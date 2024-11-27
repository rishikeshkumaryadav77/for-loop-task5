//1.Q 1 to 20

for(let i = 1; i<=20; i++){
  console.log(i);
}


//2.Q squre number from 1 to 10
for(let i = 1; i<=10; i++){
   console.log(i**2);
   }


//3.Q first 10 multiples fo 5
for(let i = 1; i<=10; i++){
     console.log(i*5);
     }


//4.Q  print 20 - 1 in reverse order
for(var i = 20; i>=1; i--){
       console.log(i);
       }

console.log(i)

//Q.5 first 10 even numbers in reverse order
for(var i = 20; i>=1; i--){
         if (i%2 == 0){
          console.log(i)
         }
}


//Q.6 print each element of the array

var array = [10, 20, 30, 40, 50];
for (var i=1; i<=array.length; i++){
  console.log(array[i])
}


//Q.7 index of each elememt

var array = ["apple", "banana", "cherry"];
for (var i=0; i<=array.length-1; i++){
  console.log(`index ${i}:`, array[i])
}