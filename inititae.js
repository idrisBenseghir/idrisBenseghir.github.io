function initiateProject() {
    const message = document.getElementById("thankYouMessage");
    message.style.display = "block";
    message.style.opacity = 0;

    // Gradual fade-in effect
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        message.style.opacity = opacity;
        opacity += 0.1;
    }, 50);

    // Clear the form
    document.getElementById("projectForm").reset();
}
function updateProgress() {
    const form = document.getElementById("projectForm");
    const fields = form.querySelectorAll("input, textarea, select");
    const filledFields = Array.from(fields).filter((field) => field.value.trim() !== "");
    const progress = Math.round((filledFields.length / fields.length) * 100);

    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = `${progress}%`;
}

function initiateProject() {
    // Show the thank-you message
    const message = document.getElementById("thankYouMessage");
    message.style.display = "block";
    message.style.opacity = 0;

    // Gradual fade-in effect for the thank-you message
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        message.style.opacity = opacity;
        opacity += 0.1;
    }, 50);

    // Clear the form
    document.getElementById("projectForm").reset();

    // Reset the progress bar
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = "0%";
}
function clearForm() {
    const form = document.getElementById("projectForm");
    form.reset();
    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("thankYouMessage").style.display = "none";
}




