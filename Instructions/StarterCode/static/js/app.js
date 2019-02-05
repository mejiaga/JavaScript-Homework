// from data.js
var tableData = data;

// YOUR CODE HERE!
var $tbody = document.querySelector("tbody");
// renderTable renders the tableData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get get the current UFO object and its fields
    var ufo = tableData[i];
    var observations = Object.keys(ufo);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < observations.length; j++) {
      // For every observations in the ufo object, create a new cell at set its inner text to be the current value at the current  ufo'sobservation
      var observation = observations[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[observation];
    }
  }
}



// Render the table for the first time on page load
renderTable();

