// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to apply theme based on preference
function applyTheme(theme) {
    document.body.classList.toggle('light-mode', theme === 'light');
    toggleSwitch.checked = theme === 'light'; // Set the toggle state
    localStorage.setItem('theme', theme); // Save the user's preference
}

// Get the toggle switch
const toggleSwitch = document.getElementById('mode-toggle');

// Check for saved preference in local storage
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Determine the theme to apply
const themeToApply = savedTheme || systemTheme; // Use saved preference or system preference
applyTheme(themeToApply);

// Add event listener to the toggle switch
toggleSwitch.addEventListener('change', () => {
    const newTheme = toggleSwitch.checked ? 'light' : 'dark'; // Determine new theme based on toggle
    applyTheme(newTheme); // Apply the new theme
});