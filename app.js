const qrCode = document.querySelector(".qr-code");
const button = document.querySelector("button");
const input = document.querySelector("input");

function navigateToLink() {
  const link = document.createElement("a");
  link.href = input.value;
  link.target = "_blank";
  link.click();
}

function generateQrCode() {
  qrCode.innerHTML = "";

  new QRCode(qrCode, {
    text: input.value,
    width: 200,
    height: 200,
    colorDark: "hsl(0, 0%, 100%)",
    colorLight: "hsl(216, 95%, 58%)",
  });

  input.value = "";
}

qrCode.addEventListener("click", navigateToLink);
button.addEventListener("click", generateQrCode);
generateQrCode();
