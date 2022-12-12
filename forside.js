const ul = document.querySelector(".dropdown");
const mereinfo = document.querySelector(".mereinfo");
console.log("ul");
// mereinfo.addEventListener("click", showHide);
mereinfo.addEventListener("mouseenter", showHide);
// mereinfo.addEventListener("mouseleave", showHide);

function showHide() {
  if (ul.style.display !== "block") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
}

//validate//

document.querySelector("#form1").addEventListener("submit", validate);
const messageField = document.querySelector("#besked");

function validate(evt) {
  let error;

  if (this.email.value == "") {
    evt.preventDefault();
    error = "Udfyld venligst din e-mail adresse!";
    messageField.textContent = error;
    this.email.focus();
    return false;
  }
  const atpos = this.email.value.indexOf("@");
  const dotpos = this.email.value.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > this.email.value.length) {
    evt.preventDefault();
    error = "Din e-mail adresse skal værte gyldig(fx navn@mail.dk)!";
    messageField.textContent = error;
    this.email.focus();
    return false;
  }
}