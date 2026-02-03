const API_URL = "https://unitymaster-backend.onrender.com";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(API_URL + "/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("Login Successful");
    } else {
      alert("Wrong Email or Password");
    }
  });
}
