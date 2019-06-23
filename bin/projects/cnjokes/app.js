document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (number <= 0) {
      document.querySelector(".jokes").innerHTML = "";
      document.querySelector(
        ".continue"
      ).innerHTML = `<b>Enter a number greater than 0 for results.</b>`;
    } else {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        let output = "";

        if (response.type === "success") {
          response.value.forEach(function(joke) {
            output += `<li>${joke.joke}</li>`;
          });
        }

        document.querySelector(
          ".continue"
        ).innerHTML = `<b>Continue to click on the button for different results.</b>`;
        document.querySelector(".jokes").innerHTML = output;
      }
    }
  };

  xhr.send();

  e.preventDefault();
}
