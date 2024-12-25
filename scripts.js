// Funktion zum Umschalten des Dropdown-Menüs
function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Dropdown-Menü schließen, wenn außerhalb geklickt wird
document.addEventListener('click', function (event) {
    const menu = document.getElementById('dropdown-menu');
    const button = document.querySelector('.menu-button');
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none';
    }
});

// Dynamische Anpassung des Inhaltsabstands
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const container = document.querySelector('.container');
    const headerHeight = header.offsetHeight;
    container.style.paddingTop = `${headerHeight + 20}px`;
});

// Funktion zum Kopieren der Contract-Adresse
function copyContractAddress() {
    const contractAddress = "0xYourContractAddressHere";
    const feedback = document.getElementById("copy-feedback");
    feedback.style.display = 'none'; // Hinweis ausblenden
    navigator.clipboard.writeText(contractAddress).then(() => {
        feedback.style.display = 'block';
        setTimeout(() => feedback.style.display = 'none', 2000); // Nach 2 Sekunden ausblenden
    });
}
