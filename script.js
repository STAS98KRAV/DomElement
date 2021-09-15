'use strickt';
// создан класс DomElement который имеет свойтва селектор, высота, ширина, и тд.
function DomElement (selector='.dd', height='120', width='120', bg='red', fontSize='14'){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
// создан метод домэлемент который определяет класс или ид.
DomElement.prototype.addSelector = function (){
    let newElement;
    let whatSelector = this.selector.charAt(0);
    if (whatSelector === '.'){
        newElement = document.createElement('div');
        newElement.classList.add(this.selector.substr(1));
        newElement.textContent = 'Class div';
    } else if (whatSelector === '#'){
        newElement = document.createElement('p'); 
        newElement.setAttribute('id',this.selector.substr(1));
        newElement.textContent = 'ID paragraph';
    }
    newElement.style.cssText = `
        height: ${this.height}px; 
        width: ${this.width}px; 
        background: ${this.bg}; 
        font-size: ${this.fontSize}px;
    `;
    document.body.appendChild(newElement);
};
let clDm = new DomElement('.ddd', '200', '200', 'blue', '30');
clDm.addSelector();
//DomElement.selector('.ddd');

// как создается элемент  с классом и элемент с ид?