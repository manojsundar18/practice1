// 1. Write a JavaScript function that reverses a number.
// Example x = 32243;

function rev(num){
    return(num.toString().split("").reverse().join(""));
    
}
let num= 32243;
console.log(rev(num));

// 2.Write a JavaScript function that checks whether a passed string is a palindrome or not?

function palindrome(pal){
    let dd= pal.toString().split("").reverse("").join("");
    if(dd ===pal.toString()){
        return "palindrome"
    }else{
        return "not palindrome"
    }
}
let pal= "manoj"
console.log(palindrome(pal))

/* 3. Write a JavaScript function that generates all combinations of a string. */

function combination(inp){
    let c=[];
    for (let i=0; i<inp.length; i++){
        /* console.log(a[i]) */
        for(let j=i+1; j<inp.length + 1; j++){
            /* console.log(a[i,j]) */
        c.push(inp.slice
            (i,j))
        }
    }
    return c;
}

let a="Dog"
console.log(combination(a))

/* 4. Write a JavaScript function that returns a string that has letters in alphabetical order. */

function sort(hi){
    return hi.split("").sort().join("")
}
console.log(sort("webmaster"))

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case. */

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word[0].toUpperCase() + word.slice(1)
      );
    }).join(' ');
  }
  
  console.log(toTitleCase('the quick brown fox'));

  /* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. */

 function Vowel(str) {
	let Vowels = 'aAeEiIoOuU';
	let vowelsCount = 0;
	for (let i = 0; i < str.length; i++) {
		if (Vowels.indexOf(str[i]) !== -1) {
			vowelsCount += 1;
		}
	}
	return vowelsCount;
}
console.log(Vowel('The quick brown fox'));

/* 8.Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not. */

function prime(n){
  if (n===1){
    return "Not a Prime number";
  }
  else if(n === 2){
    return "Prime number";
  }else{
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return "Not a Prime number";
      }
    }
    return "Prime number";  
  }
}

console.log(prime(37));

//9.Write a JavaScript function that accepts an argument and returns the type.

function getType(arg) {
    return typeof arg;
  }
  console.log(getType(42)); 
  console.log(getType("Hello")); 
  console.log(getType(true)); 
  console.log(getType(null)); 
  console.log(getType()); 
  console.log(getType({})); 
  console.log(getType(function() {}));
