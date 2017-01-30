//ex-02: `makeNamesObject`

// Create a function that accepts 3 strings with first + last names as arguments
// The function should return an object with 3 properties:
// The first name will be a property-name and the last name will be the value

// EXAMPLE:
// makeNamesObject("George Washington", "John Adams", "Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

var makeNamesObject = function (string1, string2, string3) {

  var firstStrArr = string1.split(' ');
  var secondStrArr = string2.split(' ');
  var thirdStArr = string3.split(' ');
  var newObject = {
    [firstStrArr[0]]: firstStrArr[1],
    [secondStrArr[0]]: secondStrArr[1],
    [thirdStArr[0]]: thirdStArr[1]
  }


return newObject;
}








//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
