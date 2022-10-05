const lengthOfLongestChar = function (s) {
  const letters = {};
  s.split("").map((letter) => {
    letters[letter] = letters[letter] ? ++letters[letter] : 1;
  });
  const longest = { key: s[0], val: letters[s[0]] };
  for (const key in letters) {
    if (letters[key] > longest.val) {
      longest.key = key;
      longest.val = letters[key];
    }
  }
  return longest.val - 1;
};

console.log(lengthOfLongestSubstring("bbbb"));
