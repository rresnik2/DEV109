function ValitdateForm() {
  var validUsername = false;
  var validUserPassword = false;
  var validFirstName = false;
  var validPhone = false;
  var validEmail = false;

  var letters = /^[A-za-z]+$/;
  var numbers = /^[0-9]+$/;
  var userEmail = document.getElementById("email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");

  var errorMessages = "";

  if (myContact.userName.value.length > 12 ||
    myContact.userName.value.length === null ||
    myContact.userName)

    errorMessages += "<p>The username must be less than 12 characters</p>";
  else
    validUsername = true;

  if (myContact.password.value == null ||
    myContact.password.value.length > 15 ||
    myContact.password.value == "")
    errorMessages += "<p>The password must be less than 15 characters and it is required</p>";

  else
    validUserPassword = true;
  document.getElementById("errorMessages").innerHTML = errorMessages;

  if (myContact.firstname.value == null || myContact.firstname.value === "" ||
    myContact.firstname.value.length > 15)

    errorMessages += "<p>Invaled first name.</p>";

  else
    validFirstName = true;

  if (myContact.phone.value === "" ||
    myContact.phone.value == null || myContact.phone.value.length > 15 ||
    !myContact.phone.value.match(letters))
    errorMessages += "<p>The phone number is invalid.</p>";

  else
    validPhone = true;

  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length)
    errorMessages += "<p>The email is invalid.</p>";
  else
    validEmail = true;

  
  
}
