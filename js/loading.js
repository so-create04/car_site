window.onload = function() {
    setTimeout(() => {
        // Hide the loader
        const loader = document.querySelector(".load-section");
        loader.classList.add("loaded");

        // Show the main content
        const topVisualization = document.querySelector(".main");
        topVisualization.style.display = "inherit";

        const headerTitleVisualization = document.querySelector(".header__logo-title");
        headerTitleVisualization.style.visibility = "visible";        
        const headerMenuVisualization = document.querySelector(".header__menu-bar");
        headerMenuVisualization.style.visibility = "visible";

        const footerVisualization = document.querySelector(".footer");
        footerVisualization.style.display = "inherit"
        footerVisualization.style.visibility = "visible"

        // Reset body styles
        var side = document.body;
        side.style.display = "initial";
        side.style.alignItems = "initial";
        side.style.justifyContent = "initial";
    }, 2610); // Adjust the delay as needed
};
