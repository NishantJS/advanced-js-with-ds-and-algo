/**
* * Common Child
* todo get common letters from 2 strings;
* @param SHINCHAN 
* @param NOHARAAA
* @returns NHA
 The longest string that can be formed between SHINCHAN and NOHARAAA while maintaining the order is NHA.
*/

function commonChild(s1,s2) {
  let str1 = [...new Set([...s1])]
  let str2 = [...new Set([...s2])]
  return str2.filter(value=>str1.includes(value)).length;
}

let s1 = "SHINCHAN";
let s2 = "NOHARAAA";
console.log(commonChild(s1,s2))
