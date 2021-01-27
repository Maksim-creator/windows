import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

document.addEventListener('DOMContentLoaded', () => {
    let modalState = {};
    let deadline = '2021-02-15'

    changeModalState(modalState);
    modal();
    tabs('.decoration_slider','.no_click' ,'.decoration_content > div > div', 'after_click');
    tabs('.glazing_slider','.glazing_block' ,'.glazing_content', 'active');
    forms('form', 'input', modalState);
    tabs('.balcon_icons', '.balcon_icons_img','.big_img > img', 'do_image_more', 'inline-block' );
    timer('.container1', deadline);
    images()
})