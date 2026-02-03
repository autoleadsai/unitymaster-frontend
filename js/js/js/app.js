async function sendMessage() {
  const msg = document.getElementById("message").value;

  const res = await fetch("https://YOUR-BACKEND-URL/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();
  document.getElementById("status").innerText =
    "AI Reply: " + data.reply;
}
