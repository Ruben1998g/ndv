import css from './css/index.scss';
import toggled from './modules/toggled.js'


document.addEventListener('DOMContentLoaded', ()=>{
   toggled('header-block__open', '.modal', '.modal__close');
});

