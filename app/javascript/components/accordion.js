const initAccordion = () => {
  document.querySelectorAll('.btn-lilac').forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle('btn-lilac-active');
      if (button.classList.contains('btn-lilac-active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = 0;
      }

    })
  });
};

export {  initAccordion }


