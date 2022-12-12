document.querySelector(".form-container").addEventListener("submit", validate);
const messageFieldBetaling = document.querySelector("#besked");

function validate(evt) {
  let error;

  if (this.adresse.value == "") {
    evt.preventDefault();
    error = "udfyld venligst din adresse!";
    messageFieldBetaling.textContent = error;
    this.adresse.focus();
    return false;
  }

  if (this.by.value == "") {
    evt.preventDefault();
    error = "udfyld venligst din by!";
    messageFieldBetaling.textContent = error;
    this.adresse.focus();
    return false;
  }

  if (this.Postnummer.value == "") {
    evt.preventDefault();
    error = "udfyld venligst postnummer!";
    messageFieldBetaling.textContent = error;
    this.Postnummer.focus();
    return false;
  }

  if (this.email.value == "") {
    evt.preventDefault();
    error = "Udfyld venligst din e-mail adresse!";
    messageFieldBetaling.textContent = error;
    this.email.focus();
    return false;
  }
  const atpos = this.email.value.indexOf("@");
  const dotpos = this.email.value.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > this.email.value.length) {
    evt.preventDefault();
    error = "Din e-mail adresse skal værte gyldig(fx navn@mail.dk)!";
    messageFieldBetaling.textContent = error;
    this.email.focus();
    return false;
  }
}
