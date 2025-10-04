document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".quote-form-card form");
  const resultBox = document.createElement("div");

  // Style the result box (popup)
  resultBox.style.position = "fixed";
  resultBox.style.top = "50%";
  resultBox.style.left = "50%";
  resultBox.style.transform = "translate(-50%, -50%)";
  resultBox.style.background = "#fff";
  resultBox.style.padding = "30px";
  resultBox.style.borderRadius = "10px";
  resultBox.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  resultBox.style.display = "none"; // Hidden by default
  resultBox.style.zIndex = "9999";
  resultBox.innerHTML = `
      <h2>Shipping Quotes</h2>
      <ul style="list-style:none; padding:0; text-align:left;">
        <li><b>FedEx:</b> $40.99</li>
        <li><b>Amazon Logistics:</b> $35.50</li>
        <li><b>DHL:</b> $45.25</li>
        <li><b>Canada Post:</b> $30.75</li>
      </ul>
      <p style="margin-top:15px; font-weight:bold; color:green;">Best Price: Canada Post - $30.75</p>
      <button id="closeBox" style="margin-top:15px; padding:8px 15px; border:none; background:#e74c3c; color:white; border-radius:5px; cursor:pointer;">Close</button>
  `;

  document.body.appendChild(resultBox);

  // Show result box on submit
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop refresh
    resultBox.style.display = "block";
  });

  // Close button logic
  resultBox.querySelector("#closeBox").addEventListener("click", () => {
    resultBox.style.display = "none";
  });
});

  // Tab toggle functionality
  const tabLinks = document.querySelectorAll(".tab-link");

  tabLinks.forEach(tab => {
    tab.addEventListener("click", function () {
      // remove active from all
      tabLinks.forEach(t => t.classList.remove("active"));
      // add active to clicked one
      this.classList.add("active");
    });
  });

