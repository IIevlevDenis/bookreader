const fontSmall = document.querySelector('.font-small'),
      fontMedium = document.querySelector('.font-medium'),
      fontDefault = document.querySelector('.font-default'),
      fontLarge = document.querySelector('.font-large'),
      element = document.documentElement;

function changeFontSize(){
    fontSmall.addEventListener("click", () => {
        localStorage.removeItem('font');
    
        element.setAttribute('data-font', 'small');
        localStorage.setItem('font', 'small');
    });
    if (localStorage.getItem('font') == 'small') {
        element.setAttribute('data-font', 'small');
    }
    
    fontMedium.addEventListener("click", () => {
        localStorage.removeItem('font');
    
        element.setAttribute('data-font', 'medium');
        localStorage.setItem('font', 'medium');
    });
    if (localStorage.getItem('font') == 'medium') {
        element.setAttribute('data-font', 'medium');
    }
    fontDefault.addEventListener("click", () => {
        localStorage.removeItem('font');
        element.removeAttribute('data-font');
        localStorage.setItem('font', 'default');
    });
    if (localStorage.getItem('font') == null) {
        element.removeAttribute('data-font');
    }
    fontLarge.addEventListener("click", () => {
        localStorage.removeItem('font');
    
        element.setAttribute('data-font', 'large');
        localStorage.setItem('font', 'large');
    });
    if (localStorage.getItem('font') == 'large') {
        element.setAttribute('data-font', 'large');
     }
    }

export default changeFontSize;