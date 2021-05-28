const themeButton = document.getElementById("theme-button"),
      element = document.documentElement;

function changeTheme() {
    themeButton.addEventListener("click", () => {
        if (element.hasAttribute('data-theme')) {
            element.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        } else {
            element.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    if (localStorage.getItem('theme') !== null) {
        element.setAttribute('data-theme', 'dark');
    }
}

export default changeTheme;