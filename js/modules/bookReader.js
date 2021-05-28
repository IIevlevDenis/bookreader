class bookReader {
    constructor(view, panel) {
        this.view = view;
        this.panel = panel;
        this.paragraph = view.querySelector('p');
        this.currentText = panel.querySelector('#current');
        this.progressBar = document.querySelector('.progress-bar');
        this._attachListeners();
    }

    updateBook() {
        this.paragraph.textContent = localStorage.getItem("book");
        this.createPage();
        this.updateCurrent();
    }

    createPage(page = 0) {
        if (page > 0) {
            const marginTop = parseInt(this.paragraph.style.marginTop) || 0;
            if (this.paragraph.offsetHeight > this.view.offsetHeight + -marginTop) {
                localStorage.current++;
            }
        } else if (page < 0) {
            if (+localStorage.current) {
                localStorage.current--;

            }
        }
        this.paragraph.style.marginTop = -(localStorage.current * this.view.offsetHeight) + 'px';
        this.updateCurrent();
    }

    updateCurrent() {
        this.currentText.textContent = 'Страница:' + ' ' + (+localStorage.current + 1);
    }

    _attachListeners() {
        this.panel.querySelector('#previous').addEventListener('click', () => {
        this.progressBar.style.width = Math.round
        (localStorage.current/(this.paragraph.offsetHeight / this.view.offsetHeight) * 100) + '%';
        this.createPage(-1);
        });
        document.addEventListener('keydown', (event) => {
            if (event.keyCode == '37') {
                this.createPage(-1);
                this.progressBar.style.width = Math.round
                (localStorage.current/(this.paragraph.offsetHeight / this.view.offsetHeight) * 100) + '%';
            }
        });
        this.panel.querySelector('#next').addEventListener('click', () => {
            this.progressBar.style.width = Math.round
            (localStorage.current/(this.paragraph.offsetHeight / this.view.offsetHeight) * 100) + '%';
            this.createPage(1);
        });
        document.addEventListener('keydown', (event) => {
            if (event.keyCode == '39') {
                this.progressBar.style.width = Math.round
                (localStorage.current/(this.paragraph.offsetHeight / this.view.offsetHeight) * 100) + '%';
                this.createPage(1);
            }
        });
    }
}

export default bookReader;

