// Modal

const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');
let modalWasShown = false;

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modalWasShown = true;
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalTrigger.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
window.addEventListener('scroll', () => {
    const scrollHeight = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollHeight >= pageHeight && !modalWasShown) {
        openModal();
    }
});
let showModal = false;

const timeOut = () => {
    if (!showModal) {
        setTimeout(openModal, 10000); // Откроет модальное окно через 10 секунд
        showModal = true;
    }
};
timeOut();
