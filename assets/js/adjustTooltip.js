// Get the tooltip element
const tooltip = document.querySelectorAll('.tooltip')[3];
const tooltipText = tooltip.querySelector('.tooltip-text');

// Function to position tooltip
function positionTooltip() {
    const rect = tooltip.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate if there's enough space above the tooltip
    const spaceAbove = rect.top;
    const tooltipHeight = tooltipText.offsetHeight;

    if (spaceAbove < tooltipHeight) {
        // Not enough space above, position below
        tooltipText.style.top = '135%'; // or adjust as needed
    } else {
        // Enough space above, position normally
        tooltipText.style.top = '-135%'; // original top position
    }
}

// Event listener on hover (assuming hover triggers tooltip)
tooltip.addEventListener('mouseenter', () => {
    positionTooltip();
    tooltipText.style.display = 'block';
});

tooltip.addEventListener('mouseleave', () => {
    tooltipText.style.display = '';
    tooltipText.style.top = '';
});
