function updatePrice(product, price, isIncreasing) {
  const productInputField = document.getElementById(product + "-input");
  const productInputNumber = parseInt(productInputField.value);
  let update = 0;
  if (isIncreasing == true) {
    update = productInputNumber + 1;
  } else {
    update = productInputNumber - 1;
  }
  if (update == 0) {
    document.getElementById(product + "-minus").disabled = true;
    productInputField.value = update;
  } else {
    document.getElementById(product + "-minus").disabled = false;
    productInputField.value = update;
  }
  const productPrice = productInputField.value * price;
  const productPriceText = document.getElementById(product + "-price");
  productPriceText.innerText = productPrice;
  return productPriceText.innerText;
}
function updateTransaction() {
  const subTotalText = document.getElementById("sub-total");
  const iphonePrice = document.getElementById("iphone-price").innerText;
  const casePrice = document.getElementById("case-price").innerText;
  const subTotal = parseInt(iphonePrice) + parseInt(casePrice);
  subTotalText.innerText = subTotal;
  let tax = subTotal * 0.15;
  document.getElementById("tax").innerText = tax;
  const netTotalText = document.getElementById("net-total");
  const netTotal = parseInt(subTotalText.innerText) + tax;
  netTotalText.innerText = netTotal;
  return netTotal;
}
// iphone plus btn
document.getElementById("iphone-plus").addEventListener("click", function () {
  const iphonePlusButton = updatePrice("iphone", 1000, true);
  updateTransaction();
});
// iphone minus btn
document.getElementById("iphone-minus").addEventListener("click", function () {
  const iphoneMinusButton = updatePrice("iphone", 1000, false);
  updateTransaction();
});
//case plus btn
document.getElementById("case-plus").addEventListener("click", function () {
  const caseMinusButton = updatePrice("case", 60, true);
  updateTransaction();
});
//case minus btn
document.getElementById("case-minus").addEventListener("click", function () {
  const caseMinusButton = updatePrice("case", 60, false);
  updateTransaction();
});
