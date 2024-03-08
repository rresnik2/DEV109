
function validateForm() {
  var validUsername = false;
  var validUserPassword = false;
  var validFirstName = false;
  var validPhone = false;
  var validEmail = false;
  var validLastName = false;



  var letters = /^[A-za-z]+$/;
  var numbers = /^[0-9]+$/;
  var errorMessages = "";
  
  
  var phone = document.getElementById("Phone").value;
  var userEmail = document.getElementById("Email").value;
  var firstName = document.getElementById("FirstName").value;
  var lastName = document.getElementById("LastName").value;
  var pasword = document.getElementById("Password").value;
  var userName = document.getElementById("UserName").value;

  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
 
  
  if (userName.length > 12 ||
    userName === "")

    errorMessages += "<p>The username must be less than 12 characters</p>";
  else
    validUsername = true;

  if (password.length > 15 ||
    password === "")
    errorMessages += "<p>The password must be less than 15 characters and it is required</p>";

  else
    validUserPassword = true;
  

  if (firstName === "" || firstName.length > 15)

    errorMessages += "<p>The first name must be under 20 chracters and it is required. Only letters and number are accepted.</p>";

  else
    validFirstName = true;
  
  if (lastName === "" || lastName.length > 50)

    errorMessages += "<p>The last name must be under 50 chracters and it is required. Only letters and number are accepted.</p>";

  else
    validLastName = true;
  
  if (phone === "" ||
    phone.length > 15 ||
    !phone.match(letters))
    errorMessages += "<p>The phone number must be less than 15 chracters and it is required. Only numbers are accepted.</p>";

  else
    validPhone = true;
  
  if (isNaN(phone) || phone.length >15 || phone==="")
    errorMessages += "<p>Invalid phone number </p>";
  else
    validPhone = true;



  
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
  } else {
    validEmail = true;
  } //Or assign the value to a variable. For example validEmail = true
  if (!validEmail || !validUserPassword || !validUsername || !validFirstName || !validPhone ){
    document.getElementById("errorMessages").innerHTML = errorMessages;
    return false;
  }
}
