export async function loadComponent(selector, filePath) {
  const container = document.querySelector(selector);

  if (!container) {
    throw new Error(`Component container not found: ${selector}`);
  }

  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`Failed to load ${filePath}: ${response.status} ${response.statusText}`);
  }

  container.innerHTML = await response.text();
}

export function announce(message, type = "success") {
  const status = document.querySelector(".site-status");
  if (!status) return;

  status.textContent = message;
  status.className = `site-status visible ${type}`;
  window.clearTimeout(announce.timeoutId);
  announce.timeoutId = window.setTimeout(() => {
    status.className = "site-status";
    status.textContent = "";
  }, 4500);
}
