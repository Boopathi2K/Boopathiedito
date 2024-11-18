document.addEventListener("DOMContentLoaded", () => {
    // Select all filter buttons and video items
    const buttons = document.querySelectorAll(".filter-buttons button");
    const items = document.querySelectorAll(".video-item");

    // Loop through each button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the category filter from the clicked button
            const filter = button.getAttribute("data-filter");

            // Loop through each video item
            items.forEach(item => {
                // Show or hide items based on their category
                if (filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display = "block";  // Show item
                } else {
                    item.style.display = "none";   // Hide item
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-buttons button");
    const items = document.querySelectorAll(".video-item");

    // Add scroll event listener to trigger animations
    window.addEventListener('scroll', () => {
        items.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add("visible");
            }
        });
    });

    // Check if an item is in the viewport
    function isInViewport(item) {
        const rect = item.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Filter functionality for categories
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            items.forEach(item => {
                if (filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display = "block";  // Show item
                } else {
                    item.style.display = "none";   // Hide item
                }
            });
        });
    });
});
