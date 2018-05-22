$(document).ready(function() {
    $("dataTable").DataTable();
} );

// Get references to each tbody element (date, city, state, country, shape, and button)
var $tbody = document.querySelector("#table-body");
var $dateInput = document.querySelector("#date-input");
var $cityInput = document.querySelector("#city-input");
var $stateInput = document.querySelector("#state-input");
var $countryInput = document.querySelector("#country-input");
var $shapeInput = document.querySelector("#shape-input");
var $submitButton = document.querySelector("#submit");

// Set variable for data set
var alien_sightings = dataSet;

// Render table initially
renderTable();

// Create function to render table
function renderTable() {

    // Looping through data set
    for (var i = 0; i < alien_sightings.length; i++) {
    
        // Insert a row
        var $row = $tbody.insertRow(i);

        // Get current object & keys
        var sighting = alien_sightings[i];
        var fields = Object.keys(sighting);

        // Insert alien_sightings
        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = sighting[field];
        };
    };
};

// Event listener for submit button, call filterInput when clicked
$submitButton.addEventListener("click", filterInput);

// Create function to filter date
function filterDate(encounter) {
    return encounter.datetime == $dateInput.value.trim().toLowerCase();
};

// Create function to filter city
function filterCity(encounter) {
    return encounter.city == $cityInput.value.trim().toLowerCase();
};

// Create function to filter state
function filterState(encounter) {
    return encounter.state == $stateInput.value.trim().toLowerCase();
};

// Create function to filter country
function filterCountry(encounter) {
    return encounter.country == $countryInput.value.trim().toLowerCase();
};

// Create function to filter shape
function filterShape(encounter) {
    return encounter.shape == $shapeInput.value.trim().toLowerCase();
};

// Create function to filter input
function filterInput(event) {

    // Prevent default
    event.preventDefault();

    // Reset data set each time button is clicked
    alien_sightings = dataSet;

    // Create filters based on input
    if ($dateInput.value) {
        alien_sightings = alien_sightings.filter(filterDate);
    };

    if ($cityInput.value) {
        alien_sightings = alien_sightings.filter(filterCity);
    };

    if ($stateInput.value) {
        alien_sightings = alien_sightings.filter(filterState);
    };

    if ($countryInput.value) {
        alien_sightings = alien_sightings.filter(filterCountry);
    };

    if ($shapeInput.value) {
        alien_sightings = alien_sightings.filter(filterShape);
    };

    if (!$dateInput && !$cityInput && !$stateInput && !$countryInput && !$shapeInput) {
        alien_sightings = dataSet;
    };

    // Clear inputs
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";

    // Re-render table
    $tbody.innerHTML = "";
    renderTable();
};