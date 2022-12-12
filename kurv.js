//plus minus input//
const plusList = document.querySelectorAll(".plus");
const minusList = document.querySelectorAll(".minus");

plusList.forEach((element) => {
  element.addEventListener("click", plus_clk);
});
minusList.forEach((element) => {
  element.addEventListener("click", minus_clk);
});

function minus_clk() {
  let input = document.querySelector("#input_"+this.id);
  if (Number(input.value) != 0) {
    input.value = Number(input.value) - 1;
  }
}

function plus_clk() {
  let input = document.querySelector("#input_"+this.id);
  input.value = Number(input.value) + 1;
}