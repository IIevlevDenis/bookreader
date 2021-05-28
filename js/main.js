import bookReader from './modules/bookReader';
import changeTheme from './modules/theme';
import changeFontSize from './modules/size';

window.addEventListener('DOMContentLoaded', () => {

const file = document.querySelector('#file'),
    panel = document.querySelector('.panel'),
    view = document.querySelector('#view');

file.addEventListener('change', function () {
    const file = this.files[0] || {};

    if (file.type !== "text/plain") {
        return;
    }
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'utf-8');

    fileReader.addEventListener('load', () => {
        try {
            localStorage.setItem("book", fileReader.result);

        } catch (err) {
            if (err.number === 22) {
                throw new Error('Local storage is full');
            }
        }

        localStorage.setItem("title", file.name);
        localStorage.setItem("current", 0);
        readerBook.updateBook();
           
    });
    fileReader.addEventListener('error', () => {
        console.log(fileReader.error);
    });
});
function readFile(object) {
    let file = object.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function() {
      try{
      view.querySelector('p').innerHTML = reader.result;
      }
      catch (err){
          if(err.number === 22){
              throw new Error('Local storage is full');
          }
      }
      localStorage.setItem("title", file.name);
    });
    reader.addEventListener('error', () => {
        console.log(reader.error);
    });
    reader.readAsText(file);
 }
 file.addEventListener('change', function () {
    localStorage.setItem("current", 0);
    readerBook.updateBook();
 readFile(file);
 });

changeFontSize();

changeTheme();

const readerBook = new bookReader(view, panel);
if (localStorage.getItem("book")){
    readerBook.updateBook();
}
});