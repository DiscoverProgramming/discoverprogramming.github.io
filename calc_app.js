/**
 * Calculates the RPM (Revolutions Per Minute) based on the input values.
 */
function CalcRPM() {
    // Get the input values from the HTML elements
    let speed = parseFloat(document.getElementById("speed").value);
    let tire_diameter = parseFloat(document.getElementById("tire_diameter").value);
    let gear_ratio = parseFloat(document.getElementById("gear_ratio").value);
    let transmission_gear_ratio = parseFloat(document.getElementById("transmission_gear_ratio").value);

    // Check if any of the input values are NaN or negative
    if (isNaN(speed) || isNaN(tire_diameter) || isNaN(gear_ratio) || isNaN(transmission_gear_ratio) ||
        speed <= 0 || tire_diameter <= 0 || gear_ratio <= 0 || transmission_gear_ratio <= 0) {
        alert("Please enter valid positive numbers for all input fields.");
        return;
    }

    // Calculate the final gear ratio
    let final_gear_ratio = transmission_gear_ratio * gear_ratio;

    // Calculate the RPM
    let rpm = (speed * final_gear_ratio * 336) / tire_diameter;

    // Display the calculated RPM in the HTML input field
    document.getElementById("rpm_input").value = rpm.toFixed(2);
}