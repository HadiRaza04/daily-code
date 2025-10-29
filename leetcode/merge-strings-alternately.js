//  merge-strings-alternately
// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
var mergeAlternately = function(word1, word2) {
  let len = word1.length + word2.length;
  let merged = ""
  for(let i=0; i<len; i++) {
    if(word1[i] != undefined && word2[i] != undefined) {
      merged += word1[i] + word2[i];
    }
    if(word1[i] == undefined && word2[i] != undefined) merged += word2[i];
    if(word2[i] == undefined && word1[i] != undefined) merged += word1[i];
  }
  return merged;
};
console.log(mergeAlternately("abc", "def")); // adbecf
console.log(mergeAlternately("abcefg", "def")); // adbecfefg