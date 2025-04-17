/** @format */

var fullName = "Prashant Yadav";

var obj = {
  fullName: "Hacked Full Name",

  props: {
    fullName: "Inside Props",
    getFullName: function () {
      return this.fullName;
    },
  },

  getFullName: function () {
    return this.fullName;
  },

  getFullNameV2: () => this.fullName, // refer window object

  getFullNameV3: (function () {
    return this.fullName;
  })(), // iife function

  getFullNameV4: (function () {
    return "Prashant Yadav V4";
  })(),
};

console.log("obj.props.getFullName() ->> ", obj.props.getFullName());
console.log("obj.getFullName() ->> ", obj.getFullName());
console.log("obj.getFullNameV2() ->> ", obj.getFullNameV2());
console.log("obj.getFullNameV4() ->> ", obj.getFullNameV4); // its not function it string
console.log("obj.getFullNameV3() ->> ", obj.getFullNameV3());

/**
 * Output: node 5.object_Props_Function.js 
      obj.props.getFullName() ->>  Inside Props
      obj.getFullName() ->>  Hacked Full Name
      obj.getFullNameV2() ->>  undefined
      obj.getFullNameV4() ->>  Prashant Yadav V4
      /var/www/html/1.Github-Projects/Javascript-Topics/5.js:29
      console.log("obj.getFullNameV3() ->> ", obj.getFullNameV3());
                                                  ^
      TypeError: obj.getFullNameV3 is not a function
 *
 */
