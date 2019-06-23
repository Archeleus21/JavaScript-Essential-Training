//finding attributes and finding out if they exist or not

//access CTA element
const CTAELEMENT = document.querySelector(".cta a");

if( CTAELEMENT.hasAttribute("target"))
{
  console.log(CTAELEMENT.getAttribute("target"));
}
else
{
  CTAELEMENT.setAttribute("target", "_blank");
}

//prints in the consol attributes attached to the CTA elements
console.log(CTAELEMENT.attributes);
