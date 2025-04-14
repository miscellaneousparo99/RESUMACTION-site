document.getElementById('resumeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementById('previewName').textContent = document.getElementById('name').value;
  document.getElementById('previewContact').textContent = 
    `Email: ${document.getElementById('email').value} | Phone: ${document.getElementById('phone').value}`;
  document.getElementById('previewSummary').textContent = document.getElementById('summary').value;
  document.getElementById('previewEducation').textContent = document.getElementById('education').value;
  document.getElementById('previewExperience').textContent = document.getElementById('experience').value;
  document.getElementById('previewSkills').textContent = document.getElementById('skills').value;
  document.getElementById('previewProjects').textContent = document.getElementById('projects').value;

  document.getElementById('resumeForm').style.display = 'none';
  document.getElementById('resumePreview').style.display = 'block';
});