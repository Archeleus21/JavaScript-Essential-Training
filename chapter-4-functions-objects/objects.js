//objects

//objects are used when you want to create a cluster of data
//and then manipulate that data
var course = new Object();

/*//long hand
course.title = "JavaScript Essential Training";
course.instructor = "Morten Rand-Hendriksen";
course.level = 1;
course.published = true;
course.views = 0;
*/
//short hand
var course = {
  title = "JavaScript Essential Training";
  instructor = "Morten Rand-Hendriksen";
  level = 1;
  published = true;
  views = 0;
  //update views with anonymous function
  updateViews: function() {
    return ++course.views;
  }
}
/*
//display
console.log(course.views);
course.updateViews();
console.log(course.views);
*/
