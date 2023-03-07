import { ConsultModal, BurgerModal } from './Modal.js';
import FormValidator from './FormValidator.js';

const consaltEl = document.querySelector('.modal__consultation');
const burgerEl = document.querySelector('.modal__burger');
const btnOpenConsal = document.querySelector('.header__button');
const btnBurger = document.querySelector('.header__burger');
const btnBack = document.querySelector('.modal__btn-back');
const logo = document.querySelector('.header__logo');
const phone = document.querySelector('.header__phone');
const modalForm = document.querySelector('.modal__form');
const btnSubmit = modalForm.querySelector('.form__submit');
const inputList = Array.from(modalForm.querySelectorAll('.form__input'));

const consultModal = new ConsultModal(consaltEl, btnOpenConsal, 'disabled', 'dark', [ logo, phone, btnBurger ], btnBack);
const burgerModal = new BurgerModal(burgerEl, btnBurger, 'active', 'hide', [ logo, phone, btnOpenConsal ] );
const formValidator = new FormValidator(modalForm, 'disabled', 'error', btnSubmit, inputList);

formValidator.enableValidation();
consultModal.setEventListeners();
burgerModal.setEventListeners();