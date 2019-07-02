// Grab all clickable Project Items
const itemText = document.querySelectorAll(".item-text");

// Grab Close X button
const closeM = document.querySelectorAll(".modal-close");

// Grab all Modals
const modalBg = document.querySelectorAll(".modal-bg");

// Assign click per Project Item and Close X Buttons
for (let i = 0; i < itemText.length; i++) {
  // Click Project Item and show matching Modal
  itemText[i].addEventListener("click", function () {
    modalBg[i].classList.remove("hide");
  });

  // Modal closes with matching X button
  closeM[i].addEventListener("click", function () {
    modalBg[i].classList.add("hide");
  });
}
