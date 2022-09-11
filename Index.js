function admin() {
  var question = prompt("Administrative password");
  var reponse = "12345";
  if (question === reponse) {
    authorize();
  } else {
    alert("enter correct password");
  }
  function authorize() {
    window.open("Admin.html");
  }
}
function student() {
  var questions = prompt("are you a student ? (Y/N)");
  var responses = "Y";
  if (questions === responses) {
    admit();
  } else {
    alert("only for students");
  }
  function admit() {
    window.open("Students.html");
  }
}
