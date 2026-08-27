// Seleccionamos el botón
const themeToggleBtn = document.getElementById('theme-toggle');

// Revisamos si el usuario ya tenía guardada una preferencia en su navegador
const currentTheme = localStorage.getItem('theme');

// Si ya tenía preferencia de modo oscuro, la aplicamos
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Función que se ejecuta cuando hacen clic en el botón
themeToggleBtn.addEventListener('click', () => {
    // Obtenemos el tema actual
    let theme = document.documentElement.getAttribute('data-theme');
    
    // Lo cambiamos al opuesto
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
