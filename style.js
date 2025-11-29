// When the page loads
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get user input
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const event = document.getElementById("event").value;
      const phone = document.getElementById("phone").value;

      // Create a record object
      const registration = { name, email, event, phone };

      // Get existing registrations or empty array
      const savedData = JSON.parse(localStorage.getItem("registrations")) || [];

      // Add new registration
      savedData.push(registration);

      // Save back to localStorage
      localStorage.setItem("registrations", JSON.stringify(savedData));

      alert("🎉 Registration Successful!");
      form.reset();
    });
  }

  // If on registered.html, show saved registrations
  const dataContainer = document.getElementById("registeredList");
  if (dataContainer) {
    const savedData = JSON.parse(localStorage.getItem("registrations")) || [];

    if (savedData.length === 0) {
      dataContainer.innerHTML = "<p>No registrations yet.</p>";
    } else {
      let tableHTML = `
        <table border="1" cellspacing="0" cellpadding="10">
          <tr><th>Name</th><th>Email</th><th>Event</th><th>Phone</th></tr>
      `;
      savedData.forEach((reg) => {
        tableHTML += `
          <tr>
            <td>${reg.name}</td>
            <td>${reg.email}</td>
            <td>${reg.event}</td>
            <td>${reg.phone}</td>
          </tr>`;
      });
      tableHTML += "</table>";
      dataContainer.innerHTML = tableHTML;
    }
  }
});