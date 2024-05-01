document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('darkmode-toggle');
    const body = document.getElementById('main-body');
    const gridItems = document.querySelectorAll('.grid-item');
    const navItems = document.querySelectorAll('nav ul li a');
    const headerItems = document.querySelectorAll('header');
    const textItems = document.querySelectorAll('#code-version, h1, h2');
    const DandDItems = document.querySelectorAll('#drop-area');
    const browseItems = document.querySelectorAll('#file-label');
    const generateButtonItems = document.querySelectorAll('#generate-button');

    // Función para cambiar los estilos
    function toggleDarkMode() {
        if (checkbox.checked) {
            body.style.backgroundColor = '#333';
            gridItems.forEach(item => {
                item.style.backgroundColor = '#555';
                item.style.color = '#fff';
            });
            navItems.forEach(navItem => {
                navItem.style.color = '#fff';
            });
            headerItems.forEach(headerItem => {
                headerItem.style.backgroundColor = '#222';
            });
            textItems.forEach(textItem => {
                textItem.style.color = '#fff';
            });
            DandDItems.forEach(DandDItem => {
                DandDItem.style.color = '#999';
                DandDItem.style.backgroundColor = '#444';
                DandDItem.style.border = '2px dashed #ccc';
            });
            browseItems.forEach(browseItem => {
                browseItem.style.backgroundColor = '#777';
            });
            generateButtonItems.forEach(generateButtonItem => {
                generateButtonItem.style.setProperty('--primary', '150, 150, 150');
                generateButtonItem.style.setProperty('--secondary', '61, 61, 61');
            });
            
        } else {
            body.style.backgroundColor = '#fff';
            gridItems.forEach(item => {
                item.style.backgroundColor = '#00b3ff';
                item.style.color = '#000';
            });
            navItems.forEach(navItem => {
                navItem.style.color = '#000';
            });
            headerItems.forEach(headerItem => {
                headerItem.style.backgroundColor = '#009dff';
            });
            textItems.forEach(textItem => {
                textItem.style.color = '#000';
            });
            DandDItems.forEach(DandDItem => {
                DandDItem.style.color = '#000';
                DandDItem.style.backgroundColor = '#00b3ff';
                DandDItem.style.border = '2px dashed #000';
            });
            browseItems.forEach(browseItem => {
                browseItem.style.backgroundColor = '#0075cf ';
            });
            generateButtonItems.forEach(generateButtonItem => {
                generateButtonItem.style.setProperty('--primary', '64, 168, 247');
                generateButtonItem.style.setProperty('--secondary', '41, 108, 158');
            });            
        }
    }
    toggleDarkMode();
    checkbox.addEventListener('change', function() {
        toggleDarkMode();
    });

    // Cambiar el color de fondo en el evento hover:
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (checkbox.checked) {
                item.style.backgroundColor = '#777';
                
            } else {
                item.style.backgroundColor = '#028dc9';
            }
        });

        item.addEventListener('mouseleave', function() {
            if (checkbox.checked) {
                item.style.backgroundColor = '#555';
            } else {
                item.style.backgroundColor = '#00b3ff';
            }
        });
    });

    browseItems.forEach(browseItem => {
        browseItem.addEventListener('mouseenter', function() {
            if (checkbox.checked) {
                browseItem.style.backgroundColor = '#999';
            } else {
                browseItem.style.backgroundColor = '#0053cf';
            }
        });

        browseItem.addEventListener('mouseleave', function() {
            if (checkbox.checked) {
                browseItem.style.backgroundColor = '#777';
            } else {
                browseItem.style.backgroundColor = '#0075cf';
            }
        });
    });
});
