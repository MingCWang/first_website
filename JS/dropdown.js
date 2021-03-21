function dropdown() {
    const box = Array.apply(null, document.querySelectorAll('.box'));
    const contactdropdown = document.querySelector('.contactdropdown');
   

    box.forEach(item => {
        item.addEventListener('click' , () => {
            item.classList.toggle('box-active');
            contactdropdown.classList.toggle('contactdropdown-active');
        });
    });
      

   
      

};

dropdown();