const isAnagaram = (str1, str2) => {
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  if (str1.length !== str2.length) return false;

  const container1 = {};
  const container2 = {};

  for (const char of str1) {
    container1[char] = (container1[char] || 0) + 1;
  }

  for (const char of str2) {
    container2[char] = (container2[char] || 0) + 1;
  }

  for (const char in container1) {
    if (container1[char] !== container2[char]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagaram("tat", "tar"));
