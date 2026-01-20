document.addEventListener('DOMContentLoaded', () => {

    const moodSection = document.querySelector(".mood-finder");

    if (moodSection) {
        const images = [
            "https://i.pinimg.com/736x/ae/50/9a/ae509a6b4b87e3241a98f8d5824bf478.jpg",
            "https://i.pinimg.com/736x/27/13/99/2713995034cea1903cb8d8e2c9757c4a.jpg",
            "https://i.pinimg.com/736x/e7/46/70/e746704afe634bfad4c0917bcf777523.jpg"
        ];

        let index = 0;
        
        moodSection.style.backgroundImage = `url(${images[index]})`;
        moodSection.style.backgroundSize = "cover";
        moodSection.style.backgroundPosition = "center";

        setInterval(() => {
            index = (index + 1) % images.length;
            moodSection.style.backgroundImage = `url(${images[index]})`;
        }, 2000);
    }

    const suggestBtn = document.getElementById('suggestBtn');
    const resultArea = document.getElementById('resultArea');

    if (suggestBtn) {
        suggestBtn.addEventListener('click', () => {

            const moodSelect = document.getElementById('moodSelect');
            const tasteInput = document.querySelector('input[name="taste"]:checked');

            const mood = moodSelect ? moodSelect.value : "productive";
            const taste = tasteInput ? tasteInput.value : "bold";

            let match = [];

            if (mood === "productive") {
                match = (taste === "bold")
                    ? ["Espresso Shot", "Butter Croissant"]
                    : ["Hot Mocha", "Vanilla Donut"];
            } 
            else if (mood === "relaxed") {
                match = (taste === "bold")
                    ? ["Caffe Latte", "Chocolate-chip Muffin"]
                    : ["Oreo Donut", "Caramel Macchiato"];
            } 
            else if (mood === "adventurous") {
                match = (taste === "bold")
                    ? ["Espresso", "Nutella Croissant"]
                    : ["Blueberry Muffin", "Cappuccino"];
            }

            if (resultArea) {
                resultArea.innerHTML = `<strong>Our Suggestions:</strong> ${match.join(", ")}`;
                resultArea.classList.add("active");
            }
        });
    }

});
