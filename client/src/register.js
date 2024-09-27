import "./style.css";
const $form = document.getElementById("register-form");
$form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData($form);
        const entries = Object.fromEntries(formData.entries());
fetch("http://localhost:4321/auth/sign-up", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(entries)
    }).then(response => {
    if (response.ok) {
    console.log("Registro exitoso");
    } else {
    console.log("Registro fallido");
    }
});
});
