// Event listener for submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show Loader
  document.getElementById("loading").style.display = "block";

  // Loader times out in 2 secons
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  // Input Variables for calculations
  const barWeight = document.getElementById("bar-weight");
  const totalWeight = document.getElementById("total-weight");

  // Variables of which plates are used
  const option55 = document.getElementById("option55");
  const option45 = document.getElementById("option45");
  const option35 = document.getElementById("option35");
  const option25 = document.getElementById("option25");
  const option10 = document.getElementById("option10");
  const option5 = document.getElementById("option5");
  const option2 = document.getElementById("option2");

  // Output Variables after calculations
  const plate55 = document.getElementById("plate55");
  const plate45 = document.getElementById("plate45");
  const plate35 = document.getElementById("plate35");
  const plate25 = document.getElementById("plate25");
  const plate10 = document.getElementById("plate10");
  const plate2 = document.getElementById("plate2");

  // Array of barbell plates
  const weights = {
    plates: [],
    plateCount: []
  };

  // Check which plates were selected and hide output for unused plates
  if (option55.parentElement.classList[2] === "active") {
    weights.plates.push(55);
  } else {
    plate55.parentElement.parentElement.style.display = "none";
  }

  if (option45.parentElement.classList[2] === "active") {
    weights.plates.push(45);
  } else {
    plate45.parentElement.parentElement.style.display = "none";
  }

  if (option35.parentElement.classList[2] === "active") {
    weights.plates.push(35);
  } else {
    plate35.parentElement.parentElement.style.display = "none";
  }

  if (option25.parentElement.classList[2] === "active") {
    weights.plates.push(25);
  } else {
    plate25.parentElement.parentElement.style.display = "none";
  }

  if (option10.parentElement.classList[2] === "active") {
    weights.plates.push(10);
  } else {
    plate10.parentElement.parentElement.style.display = "none";
  }

  if (option5.parentElement.classList[2] === "active") {
    weights.plates.push(5);
  } else {
    plate5.parentElement.parentElement.style.display = "none";
  }

  if (option2.parentElement.classList[2] === "active") {
    weights.plates.push(2.5);
  } else {
    plate2.parentElement.parentElement.style.display = "none";
  }

  // Calculate plate weight
  const plateWeight = totalWeight.value - barWeight.value;
  let currentWeight = plateWeight;

  // Check user input error, store and output data
  if (
    parseInt(totalWeight.value) >= parseInt(barWeight.value) &&
    parseInt(totalWeight.value) % 5 === 0
  ) {
    console.log(`Current plates selected = ${weights.plates}`);
    weights.plates.forEach(function(plate) {
      // Check how many plates needed for current weight
      let x = Math.floor(currentWeight / plate);
      let y = evenOdd(x);
      weights.plateCount.push((x - y) / 2);
      currentWeight = currentWeight - (x - y) * plate;

      // Output values back to DOM
      if (plate === 55) {
        plate55.parentElement.parentElement.style.display = "block";
        plate55.value = (x - y) / 2;
      } else if (plate === 45) {
        plate45.parentElement.parentElement.style.display = "block";
        plate45.value = (x - y) / 2;
      } else if (plate === 35) {
        plate35.parentElement.parentElement.style.display = "block";
        plate35.value = (x - y) / 2;
      } else if (plate === 25) {
        plate25.parentElement.parentElement.style.display = "block";
        plate25.value = (x - y) / 2;
      } else if (plate === 10) {
        plate10.parentElement.parentElement.style.display = "block";
        plate10.value = (x - y) / 2;
      } else if (plate === 5) {
        plate5.parentElement.parentElement.style.display = "block";
        plate5.value = (x - y) / 2;
      } else if (plate === 2.5) {
        plate2.parentElement.parentElement.style.display = "block";
        plate2.value = (x - y) / 2;
      } else {
        console.log("Something went wrong.");
      }
    });
    console.log(`Current weight remaining = ${currentWeight}`);
    // Reveal results and hide loader
    document.getElementById("results").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers.");
  }

  // Account for missing weight
  if (currentWeight > 0 && currentWeight % 5 === 0) {
    showError(`Incorrect plates selected for this weight. Please add more.`);
  }
}

// Check if current weight is even or odd
function evenOdd(currentWeight) {
  let remainder = currentWeight % 2;
  if (remainder === 0) {
    return 0;
  } else {
    return 1;
  }
}

// Show Error
function showError(error) {
  // hide results and loader
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";

  // Get div elements to where error will be inserted between
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Create the div
  const errorDiv = document.createElement("div");

  // Add class to div
  errorDiv.className = "alert alert-danger";

  // Create text (createTextNode) inside the div (appendChild)
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error div above heading (insertBefore(parent div, where you want to insert above))
  card.insertBefore(errorDiv, heading);
  card.insert;
  // Error times out after 6 sec
  setTimeout(clearError, 6000);
}
function clearError() {
  document.querySelector(".alert").remove();
}
