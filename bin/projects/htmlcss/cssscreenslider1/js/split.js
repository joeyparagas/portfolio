document.addEventListener("DOMContentLoaded", function() {
  let wrapper = document.getElementById("wrapper");
  let topLayer = wrapper.querySelector(".top"); // notice .wrapper is the subcategory, not .document
  let handle = wrapper.querySelector(".handle");
  let skew = 0;
  let delta = 0;

  if (wrapper.className.indexOf("skewed") != -1) {
    //this checks inside wrapper for a class name string "skewed"
    //if it exist, run the following (returns -1 if it doesn't exist)
    skew = 1000;
  }

  wrapper.addEventListener("mousemove", function(e) {
    //e - addEvent parameter
    //e.clientX - tracks the event of the mouse position on X axis, also can do clientY
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + "px";

    topLayer.style.width = e.clientX + skew + delta + "px";
  });
});
