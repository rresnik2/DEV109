function validateForm() {

  var validFullName = false;
  var validEmail = false;
  var letters = /^[A-za-z]+$/;
  var numbers = /^[0-9]+$/;
  var errorMessages = "";

  var userEmail = document.getElementById("email").value;
  var fullName = document.getElementById("fname").value;

  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");


  if (fullName === "" || fullName.length > 50)

    errorMessages += "<p>The full name must be under 50 characters and it is required. Only letters and number are accepted.</p>";

  else
    validFullName = true;


  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
  } else {
    validEmail = true;
  }
  if (!validEmail || !validFullName) {
    document.getElementById("errorMessages").innerHTML = errorMessages;
    return false;
  }
}
