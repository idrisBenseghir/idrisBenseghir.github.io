document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".history-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.history-image');
    const descriptionContainer = document.getElementById('description-container');
    const descriptionText = document.getElementById('description-text');
    const closeButton = document.getElementById('close-button');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            const description = image.getAttribute('data-description');
            descriptionText.innerHTML = description;
            descriptionContainer.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        descriptionContainer.style.display = 'none';
    });
});

