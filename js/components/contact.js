import { announce } from "../components.js";

export function initContact() {
  const form = document.querySelector(".contact-form");
  const feedback = form.querySelector(".form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.className = "form-feedback";

    if (!form.reportValidity()) {
      feedback.textContent = "Please check the form fields and try again.";
      feedback.classList.add("error");
      return;
    }

    feedback.textContent = "Thanks for reaching out! Your email app will open with your message.";
    feedback.classList.add("success");
    announce("Your message is ready to send.");
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:shipon@example.com?subject=${subject}&body=${body}`;
  });
}
