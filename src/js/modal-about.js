(() => {
    const refs = {
      closeModalBtn: document.querySelector("[data-modal-icon-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();