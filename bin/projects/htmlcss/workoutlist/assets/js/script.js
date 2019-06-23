// The following is done in JS without the use of classes
//
// $("li").click(function() {
//   // notice that its comparing it to rgb color NOT "gray"
//   if ($(this).css("color") === "rgb(128, 128, 128)") {
//     $(this).css({
//       color: "black",
//       // notice it's not text-decoration.
//          This causes problems. Must use camel case
//       textDecoration: "none"
//     });
//   } else {
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//     });
//   }
// });

// The problem with the following is that it doesn't work with future elements
// It only works with the current list of elements but becuaes of the .click()
// attribute being used, it will not apply to new items to be added to the list
// We need to use the .on() attribute for this to work.

// This method is used to toggleClass. Much shorter.
// $("li").click(function() {
//   $(this).toggleClass("completed");  // toggle completed class
// });

// // Click on X to delete ToDo
// // you can use e or event
// $("span").click(function(e) {
//   // .parent points the <li> tag since it's nested inside it (a child of the <li>)
//   $(this)
//     .parent()
//     .fadeOut(500, function() {
//       $(this).remove();
//     });
//   // Since the span is nested inside the <li> tag, this prevents the toggleClass from running
//   event.stopPropagation();
// });

// $("input[type=text]").keypress(function(event) {
//   // check to see if enter is pushed: which = 13
//   if (event.which === 13) {
//     // capture user input text: .val()
//     let inputText = $(this).val();
//     // clear the input box
//     $(this).val("");
//     // add new li to list
//     $("ul").append("<li><span>X</span> " + inputText + "</li>");
//   }
// });

// Using on() to listen to future additional items and updated version
//
//
// We must modify to listen to ul tags instead of li tags
// This is becuase new li tags will be added by user.
//
// When an li is clicked inside a ul, run function
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Same thing here where we modify to ul tags instead
$("ul").on("click", "span", function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type=text]").keypress(function(event) {
  // defined inputText above conditional to check for empty input
  let inputText = $(this).val();
  // makes it so user can't add empty inputs
  if (event.which === 13 && inputText != "") {
    $(this).val("");

    // notice use single ' to insert trash icon class tag
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span>" + inputText + "</li>"
    );
  }
});

$("#toggle-form").click(function() {
  $("input[type=text]").fadeToggle(function() {
    if ($("#toggle-form").html() === '<i class="fa fa-minus"></i>') {
      $("#toggle-form").html("<i class='fa fa-plus'></i>");
    } else {
      $("#toggle-form").html("<i class='fa fa-minus'></i>");
    }
  });
});

// $("#toggle-form").click(function() {
//   $("input[type=text]").fadeToggle();
//   if ($("#toggle-form").html() === '<i class="fa fa-minus"></i>') {
//     $(this).html("<i class='fa fa-plus'></i>");
//   } else {
//     $(this).html("<i class='fa fa-minus'></i>");
//   }
// });
