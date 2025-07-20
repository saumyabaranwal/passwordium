function generatePassword() {
  const type = document.getElementById("type").value;
  const length = parseInt(document.getElementById("length").value);
  let password = "";

  if (!length || length <= 0) {
    document.getElementById("result").textContent = "❌ Enter a valid length.";
    return;
  }
  const numbers = "0123456789";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChars = "!@#$%^&*()_+{}[]<>?/|\\abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let charset = "";

  if (type === "numeric") charset = numbers;
  else if (type === "alphabetic") charset = letters;
  else if (type === "alphanumeric") charset = alphanum;
  else if (type === "random") charset = randomChars;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById("result").textContent = "🔐 " + password;
}