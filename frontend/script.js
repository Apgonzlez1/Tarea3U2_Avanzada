document.getElementById("registroForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const edad = parseInt(document.getElementById("edad").value);
  const biografia = document.getElementById("biografia").value;
  const rol = document.getElementById("rol").value;

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  const response = await fetch("http://localhost:3000/api/registro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email, password, edad, biografia, rol })
  });

  const data = await response.json();
  alert(data.message);
});
