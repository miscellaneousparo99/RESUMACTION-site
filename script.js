document.getElementById('resume-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const summary = document.getElementById('summary').value;

  const resumeHTML = `
    <h2>${fullName}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Professional Summary</h3>
    <p>${summary}</p>
  `;

  document.getElementById('resume-output').innerHTML = resumeHTML;
});