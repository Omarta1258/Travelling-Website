document.getElementById('verificationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve form values
    var humanVerification = parseInt(document.getElementById('humanVerification').value);
    var age = document.getElementById('age').value;
    var country = document.getElementById('country').value;
    var name = document.getElementById('name').value;
    var verifyInfo = document.getElementById('verifyInfo').checked;
  
    // Perform human verification
    var result = 42 - 13;
  
    // Verify if all fields are filled and human verification is correct
    if (humanVerification === result && age && country && name && verifyInfo) {
      // Check if age is less than 18
      if (parseInt(age) < 18) {
        alert('You must be older than 18 to travel.');
      } else if (!/^[a-zA-Z\s]*$/.test(name)) { // Check if name contains only letters
        alert('Please enter a valid name without numbers or special characters.');
      } else {
        // Do something with the form data, e.g., send it to a server
        console.log('Form submitted successfully!');
        window.location.href = "h.htm";

      }
    } else {
      alert('Please fill in all fields correctly and verify your information.');
    }
  });
  
  // Add event listener to name input for real-time validation
  document.getElementById('name').addEventListener('input', function(event) {
    var input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) { // Check if input contains only letters
      event.target.setCustomValidity('Please enter a valid name without numbers or special characters.');
    } else {
      event.target.setCustomValidity('');
    }
  });