// Function to populate the header with JSON data
function populateHeader(data) {
    // Update the photo
    document.getElementById('photo').src = data.photo;
  
    // Update the name
    document.getElementById('name').textContent = data.name;
  
    // Update the hobbies
    document.getElementById('hobbies').textContent = data.hobbies;
  
    // Update the courses table
    const coursesTableBody = document.getElementById('courses-table').querySelector('tbody');
    coursesTableBody.innerHTML = ''; // Clear existing rows
    data.courses.forEach(course => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${course.courseName}</td><td>${course.year}</td>`;
      coursesTableBody.appendChild(row);
    });
  
    // Update the email
    const emailElement = document.getElementById('email');
    emailElement.textContent = data.email;
    emailElement.href = `mailto:${data.email}`;
  }
  
  // Fetch the JSON file and call populateHeader
  fetch('students.json')
    .then(response => response.json())
    .then(data => populateHeader(data))
    .catch(error => console.error('Error loading JSON:', error));
  