// ui-controller.js
console.log("🧠 Neural Ops UI Controller loaded");

const overlay = document.getElementById("ops-overlay");
const titleEl = document.getElementById("ops-title");
const descEl = document.getElementById("ops-desc");

const cards = document.querySelectorAll(".diag-card");

const MODULES = {
  "active-threat": {
    title: "Active Threat Detection",
    desc: "Scanning neural traffic in real-time. Malicious signals are isolated before reaching cognitive regions."
  },
  "bio-auth": {
    title: "Bio-Auth Lock",
    desc: "DNA-verified access enforced. Implant configuration locked to authorized neural signature."
  },
  "firmware": {
    title: "Firmware Integrity",
    desc: "Verifying implant firmware hash against trusted manufacturer blockchain."
  },
  "forensic": {
    title: "Forensic Logging",
    desc: "Recording immutable audit trail of all external neural access attempts."
  },
  "system-status": {
    title: "System Status",
    desc: "All subsystems operational. Monitoring patient vitals and neural stability."
  }
};

cards.forEach(card => {
  card.addEventListener("click", () => {
    const action = card.dataset.action;

    console.log("Module clicked:", action);

    // Highlight active card
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    // Update overlay
    const module = MODULES[action];
    if (module) {
      titleEl.textContent = module.title;
      descEl.textContent = module.desc;
      overlay.classList.remove("hidden");
    }
  });
});
