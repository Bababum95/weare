class Modal {
    constructor(modal, btnOpen, btnActiveClass, styleClass, elements) {
        this.modal = modal;
        this.btnOpen = btnOpen;
        this.btnActiveClass = btnActiveClass;
        this.styleClass = styleClass;
        this.elements = elements;
    }

    _openModal() {
        this.modal.classList.add('show');
        this.btnOpen.classList.add(this.btnActiveClass);
        this.elements.forEach((element) => {
            element.classList.add(this.styleClass);
        });
    };

    _closeModal() {
        this.modal.classList.remove('show');
        this.btnOpen.classList.remove(this.btnActiveClass);
        this.elements.forEach((element) => {
            element.classList.remove(this.styleClass);
        });
    }

    _disabledBtn() {
        this.btnOpen.disabled = true;
    };

    _enableBtn() {
        this.btnOpen.disabled = false;
    };
};

class BurgerModal extends Modal {
    constructor(modal, btnBurger, btnActiveClass, styleClass, elements) {
        super(modal, btnBurger, btnActiveClass, styleClass, elements);
        this.btnBurger = btnBurger;
        this.btnActiveClass = btnActiveClass;
    }

    setEventListeners() {
        this.btnBurger.addEventListener('click', () => {
            this._toggleModalState();
        });
    }

    _toggleModalState() {
        if (this.btnBurger.classList.contains(this.btnActiveClass)) {
            super._closeModal();
        } else {
            super._openModal();
        }
    }
}

class ConsultModal extends Modal {
    constructor(modal, btnOpen, btnActiveClass, styleClass, elements, btnClose) {
        super(modal, btnOpen, btnActiveClass, styleClass, elements);
        this.btnOpen = btnOpen;
        this.btnClose = btnClose;
    }

    setEventListeners() {
        this.btnOpen.addEventListener('click', () => {
            super._openModal();
            super._disabledBtn();
        });
        this.btnClose.addEventListener('click', () => {
            super._closeModal();
            super._enableBtn();
        });
    }
}

export { ConsultModal, BurgerModal };