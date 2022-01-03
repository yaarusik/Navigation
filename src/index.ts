console.log("Hello World!");

import {a} from './module';
import style from './style.css';
import image from './assets/icons/inl.left.svg'



a();

const el = document.createElement('div');
el.textContent = 'World!';
el.className = style.style;

const img = document.createElement('div');
img.innerHTML = image;
document.body.appendChild(img);

document.body.appendChild(el);