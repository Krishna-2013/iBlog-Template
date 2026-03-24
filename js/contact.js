const form = document.querySelector(".formBox");

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });
  });

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 360);
  }, 2600);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Your message has been submitted.");
    form.reset();
  });
}
