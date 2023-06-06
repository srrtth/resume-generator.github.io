// Function to add a new entry
function addEntry(sectionId) {
    var section = document.getElementById(sectionId);
    var entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
      <input type="text" name="${sectionId}Title[]" placeholder="Section Title" required>
      <textarea name="${sectionId}Content[]" placeholder="Section Content" required></textarea>
      <button type="button" class="removeEntry">Remove</button>
    `;
    section.appendChild(entry);
  
    var removeButtons = document.getElementsByClassName('removeEntry');
    for (var i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener('click', removeEntry);
    }
  }
  
  // Function to remove an entry
  function removeEntry(event) {
    event.target.parentElement.remove();
  }
  
  // Add event listeners to dynamically add/remove entries
  document.getElementsByClassName('addEntry').forEach(function(button) {
    button.addEventListener('click', function(event) {
      var sectionId = event.target.parentElement.id;
      addEntry(sectionId);
    });
  });
  
  var removeButtons = document.getElementsByClassName('removeEntry');
  for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeEntry);
  }
  
  // Form submission and resume generation
  document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var phone = document.getElementsByName('phone')[0].value;
  
    var universities = document.getElementsByName('university[]');
    var degrees = document.getElementsByName('degree[]');
    var graduationYears = document.getElementsByName('graduationYear[]');
  
    var companies = document.getElementsByName('company[]');
    var positions = document.getElementsByName('position[]');
    var descriptions = document.getElementsByName('description[]');
  
    var customTitles = document.getElementsByName('customTitle[]');
    var customContents = document.getElementsByName('customContent[]');
  
    // Generate resume HTML
    var resumeHTML = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
  
      <h2>Education</h2>
    `;
  
    for (var i = 0; i < universities.length; i++) {
      var university = universities[i].value;
      var degree = degrees[i].value;
      var graduationYear = graduationYears[i].value;
  
      resumeHTML += `
        <p>${degree}, ${university} (${graduationYear})</p>
      `;
    }
  
    resumeHTML += `
      <h2>Experience</h2>
    `;
  
    for (var i = 0; i < companies.length; i++) {
      var company = companies[i].value;
      var position = positions[i].value;
      var description = descriptions[i].value;
  
      resumeHTML += `
        <p>${position} at ${company}</p>
        <p>${description}</p>
      `;
    }
  
    resumeHTML += `
      <h2>Custom Sections</h2>
    `;
  
    for (var i = 0; i < customTitles.length; i++) {
      var customTitle = customTitles[i].value;
      var customContent = customContents[i].value;
  
      resumeHTML += `
        <h3>${customTitle}</h3>
        <p>${customContent}</p>
      `;
    }
  
    // Display generated resume
    document.getElementById('preview').innerHTML = "<h2>Preview:</h2>";
    document.getElementById('preview').innerHTML += resumeHTML;
  });
  