// complex way of doing it

document.getElementById("plus-btn").addEventListener("click", function () {
  const caseInputField = document.getElementById("input-case");
  const caseInputFieldNumber = parseInt(caseInputField.value);
  if (caseInputFieldNumber == 1) {
    document.getElementById("minus-btn").disabled = false;
  }
  let update = 0;
  if (caseInputFieldNumber > 0) {
    update = caseInputFieldNumber + 1;
    console.log(update);
  }
  caseInputField.value = update;
  const casePrice = parseInt(caseInputField.value) * 59;
  document.getElementById("price-case").innerText = casePrice;
});

document.getElementById("minus-btn").addEventListener("click", function () {
  const caseInputField = document.getElementById("input-case");
  const caseInputFieldNumber = parseInt(caseInputField.value);
  if (caseInputFieldNumber == 2) {
    document.getElementById("minus-btn").disabled = true;
  }
  let update = 0;
  if (caseInputFieldNumber > 1) {
    update = caseInputFieldNumber - 1;
    console.log(update);
  }
  caseInputField.value = update;
  const casePrice = parseInt(caseInputField.value) * 59;
  document.getElementById("price-case").innerText = casePrice;
});

// beginner friendly way of doing it

/* document.getElementById("iphone-plus").addEventListener("click", function () {
  const iphoneInputField = document.getElementById("iphone-input");
  const iphoneInputNumber = parseInt(iphoneInputField.value);
  const update = iphoneInputNumber + 1;
  iphoneInputField.value = update;
  const iphonePrice = iphoneInputField.value * 1000;
  document.getElementById("iphone-price").innerText = iphonePrice;
});

//iphone minus functionality

document.getElementById("iphone-minus").addEventListener("click", function () {
  const iphoneInputField = document.getElementById("iphone-input");
  const iphoneInputNumber = parseInt(iphoneInputField.value);
  const update = iphoneInputNumber - 1;
  iphoneInputField.value = update;
  const iphonePrice = iphoneInputField.value * 1000;
  document.getElementById("iphone-price").innerText = iphonePrice;
});

//case plus functionality

document.getElementById("case-plus").addEventListener("click", function () {
  const caseInputField = document.getElementById("case-input");
  const caseInputNumber = parseInt(caseInputField.value);
  const update = caseInputNumber + 1;
  caseInputField.value = update;
  const casePrice = caseInputField.value * 60;
  document.getElementById("case-price").innerText = casePrice;
});

//case minus functionality

document.getElementById("case-minus").addEventListener("click", function () {
  const caseInputField = document.getElementById("case-input");
  const caseInputNumber = parseInt(caseInputField.value);
  const update = caseInputNumber - 1;
  caseInputField.value = update;
  const casePrice = caseInputField.value * 60;
  document.getElementById("case-price").innerText = casePrice;
}); */
