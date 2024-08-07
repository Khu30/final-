document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const userDropdown = document.getElementById('userDropdown');

  loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;

      // Create an option element for the dropdown
      const option = document.createElement('option');
      option.value = email; // Use email as the value (customize as needed)
      option.textContent = username; // Display username in the dropdown

      // Append the option to the dropdown
      userDropdown.appendChild(option);

      // Clear the input fields
      document.getElementById('username').value = '';
      document.getElementById('email').value = '';
  });
});
