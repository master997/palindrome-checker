"use strict";

//dom elements
const input = document.querySelector(".input");
const checkBtn = document.querySelector(".checkBtn");

const reverse = function (str) {
  //splits str into array so can use reverse function on it since can only be used on arrays and not strings then join turns array back into string reversed
  return str.split("").reverse().join("");
};
const check = function () {
  const strInput = input.value;
  const reversedStr = reverse(strInput);
  if (strInput === reversedStr) {
    alert("THIS IS INDEED A PALINDROME");
  } else {
    alert("THIS IS NOT A PALINDROME");
  }
  input.value = "";
};

checkBtn.addEventListener("click", function () {
  console.log("button clciked");
  check();
});
