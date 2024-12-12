// JavaScript for search functionality
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProjects(); // Call the search function when Enter is pressed
    }
});

function searchProjects() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultsContainer = document.getElementById("resultsContainer");

    resultsContainer.innerHTML = ""; // Clear previous results

    if (!input) {
        resultsContainer.innerHTML = "<p class='info-message'>Please enter a search term to find projects!</p>";
        return;
    }

    const projects = [
        { name: "Solar Energy Project", description: "A community solar project in rural areas.", category: "Energy" },
        { name: "Reforestation Initiative", description: "Planting trees to combat deforestation.", category: "Environment" },
        { name: "Plastic Waste Management", description: "Recycling and reducing plastic waste in cities.", category: "Waste Management" },
        { name: "Wind Energy Development", description: "Harnessing wind power for sustainable energy.", category: "Energy" },
        { name: "Ocean Cleanup Campaign", description: "Removing plastic waste from oceans worldwide.", category: "Marine" }
    ];

    resultsContainer.innerHTML = "<p class='loading-message'>Searching...</p>";

    setTimeout(() => {
        const filteredProjects = projects.filter(project => 
            project.name.toLowerCase().includes(input) || 
            project.description.toLowerCase().includes(input)
        );

        resultsContainer.innerHTML = ""; // Clear loading message

        if (filteredProjects.length > 0) {
            filteredProjects.forEach(project => {
                const projectElement = document.createElement("div");
                projectElement.classList.add("project-result");
                projectElement.innerHTML = `
                    <div class="project-header">
                        <h3>${highlightMatch(project.name, input)}</h3>
                        <span class="project-category">${project.category}</span>
                    </div>
                    <p>${highlightMatch(project.description, input)}</p>
                `;
                resultsContainer.appendChild(projectElement);
            });
        } else {
            resultsContainer.innerHTML = "<p class='info-message'>No projects found. Try searching for something else!</p>";
        }
    }, 500); // Simulated delay for loading animation
}

function refreshResults() {
    document.getElementById("searchInput").value = ""; // Clear the search input field
    document.getElementById("resultsContainer").innerHTML = ""; // Clear the displayed results
}

// Helper Function: Highlight matching terms
function highlightMatch(text, term) {
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, "<span class='highlight'>$1</span>");
}
