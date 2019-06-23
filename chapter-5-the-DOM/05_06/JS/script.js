//figure
const FEATURED = document.querySelector(".featured-image");

//image
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

var captionText = document.createTextNode(altText);

captionElement.append(altText);
FEATURED.append(captionElement);
//^^ does same as below
//captionElement.appendChild(captionText);
//console.log(captionElement);
//FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt", "");
