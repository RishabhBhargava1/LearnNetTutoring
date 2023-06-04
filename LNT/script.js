const formOpenBtn = document.querySelector("#form-open"),
  signUpUser = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  learnerBtn = document.querySelector("#learner_form"),
  tutorBtn = document.querySelector("#tutor_form");
formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  document.getElementById("learnerSignup").style.fontSize = "x-large";
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
learnerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
tutorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

function selectLearner() {
  var x = document.getElementById("tutor");
  var y = document.getElementById("learner");
  var tutor = document.getElementById("tutorSignup");
  var learner = document.getElementById("learnerSignup");

  tutor.style.fontSize = "16px";
  learner.style.fontSize = "x-large";
  x.style.display = "none";
  y.style.display = "block";
}
function selectTutor() {
  var y = document.getElementById("tutor");
  var x = document.getElementById("learner");
  var tutor = document.getElementById("tutorSignup");
  var learner = document.getElementById("learnerSignup");

  learner.style.fontSize = "16px";
  tutor.style.fontSize = "x-large";
  x.style.display = "none";
  y.style.display = "block";
}

function validateForm() {
  //open("Login.html", "_self");
  formContainer.classList.remove("active");
}