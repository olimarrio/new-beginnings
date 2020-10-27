const initAccordion = () => {
  document.querySelectorAll('.orange-button').forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle('orange-button-active');
      if (button.classList.contains('orange-button-active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = 0;
      }

    })
  });
};

export {  initAccordion }


