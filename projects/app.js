// Fetch the user data
fetch('https://api.github.com/users/DiscoverProgramming')
  .then(response => response.json())
  .then(userData => {
    // Fetch the repositories
    fetch('https://api.github.com/users/DiscoverProgramming/repos')
      .then(response => response.json())
      .then(repoData => {
        // Loop over the repositories
        for (let i = 0; i < repoData.length; i++) {
          let repo = repoData[i];

          // Create a new div element
          let div = document.createElement('div');
          div.className = 'repo-box';
          div.style.setProperty('--i', i); // Add this line

          // Create elements for the user and repository details
          let img = document.createElement('img');
          let detailsDiv = document.createElement('div');
          let name = document.createElement('h2');
          let description = document.createElement('p');
          let link = document.createElement('a');

          // Set the src, innerHTML and href attribute
          img.src = userData.avatar_url;
          name.innerHTML = repo.name;
          description.innerHTML = repo.description;
          link.innerHTML = 'View on GitHub';
          link.href = repo.html_url;

          // Append the name, description, and link to the details div
          detailsDiv.appendChild(name);
          detailsDiv.appendChild(description);
          detailsDiv.appendChild(link);

          // Append the img and details div to the repo-box div
          div.appendChild(img);
          div.appendChild(detailsDiv);

          // Append the div to the repo-container
          document.getElementById('repo-container').appendChild(div);
        }
      })
      .catch(error => console.error('Error:', error));
  })
  .catch(error => console.error('Error:', error));