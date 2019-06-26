//responsive images
//grab and store anything with the "img" tag
const IMAGES = document.querySelectorAll("img");
//object for sizes
const SIZES = {
  showcase: "100vw",
  reason: "(max-width: 799px) 100vw, 372px",
  feature: "(max-width: 799px) 100vw, 558px",
  story: "(max-width: 799px) 100vw, 670px",
};

//will select the proper src image for certain conditions
function makeSrcset(imgSrc)
{
  let markup = [];
  //smallest image size
  let width = 400;

  //runs 5 times for the 5 image sizes
  for (let i = 0; i < 5; i++)
  {
    markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";

    //adds 400 for each image size up to 2000
    width += 400;
  }

  //makes a comma seperated list from the array
  return markup.join();
}

//loop through the entire document and look for the
//source address of all the images and store them in an array
for (let i = 0; i < IMAGES.length; i++)
{
  //stores each src in an array
  let imgSrc = IMAGES[i].getAttribute("src");

  //cuts off last 8 characters in the name of each src so
  //they can be changed later
  imgSrc = imgSrc.slice(0, -8);

  //stores and call the function
  let srcset = makeSrcset(imgSrc);
  IMAGES[i].setAttribute("srcset", srcset);
  console.log(srcset);

  //gets the data-type attribute from each image
  let type = IMAGES[i].getAttribute("data-type");

  //need to put in square brackets to not confuse object and
  //get the data-type from type not the objects properties
  let sizes = SIZES[type];
  IMAGES[i].setAttribute("sizes", sizes);
  console.log(sizes);
}
