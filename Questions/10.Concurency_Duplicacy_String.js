/** @format */

var string = "apple";

function getDup(string) {
  let max = 0;
  let cha;
  string.split("").map((data) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (data === string[i]) {
        count++;
      }
    }

    if (max < count) {
      max = count;
      cha = data;
    }
  });

  return { cha, max };
}

function occurence(string) {
  var occ = {};
  string.split("").forEach((element) => {
    // occ.hasOwnProperty(element) ? occ[element]++ : (occ[element] = 1);

    if (occ.hasOwnProperty(element) == false) {
      occ[element] = 1;
    } else {
      occ[element] += 1;
    }
  });
  return occ;
}

console.log("long way -->", getDup(string));
console.log("occurence -->", occurence(string));

/**
 * Output: node 10.Concurency_Duplicacy_String.js 
    long way --> { cha: 'p', max: 2 }
    occurence --> { a: 1, p: 2, l: 1, e: 1 }
 */
