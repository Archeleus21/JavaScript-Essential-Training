// object constructor
function Course(title, instructor, level, published, views)
{
  this.title = title;
  this.instructor = title;
  this.level = title;
  this.published = title;
  this.views = title;
  this.updateViews = function(){
    return ++this.views;
  };
}

//populate an array with course objects
var courses = [
  new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0);
  new Course("Up and Running with ECMAScript 6", "Eve Porcello", 1, true, 123456);
];
//display
console.log(courses);

//display certain property from certain course
console.log(courses[1].instructor);

//run anonymous function
console.log(courses[1].updateViews);

/*
//create multiple courses/objects using the object constructor
var course01 = new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0);
var course02 = new Course("Up and Running with ECMAScript 6", "Eve Porcello", 1, true, 123456);

//display
console.log(course01);
console.log(course02);
*/
