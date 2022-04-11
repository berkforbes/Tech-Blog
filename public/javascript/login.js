async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-input-login");
  const password = document.querySelector("#password-input-login");

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
