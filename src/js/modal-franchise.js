(() => {
    const refs = {
      openModalBtn: document.querySelector("[franchise-modal-open]"),
      closeModalBtn: document.querySelector("[franchise-modal-close]"),
       closeModalBtn: document.querySelector("[franchise-modal-close1]"),
      modal: document.querySelector("[franchise-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
  