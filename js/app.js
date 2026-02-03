let count = 0;

function sendMessage() {
  count++;
  if (count > 2) {
    alert("Free limit reached. Upgrade to Pro.");
    return;
  }
  document.getElementById("status").innerText =
    "AI Reply: Thank you for contacting us!";
}
