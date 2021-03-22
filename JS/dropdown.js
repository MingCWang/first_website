function dropdown() {
    const box = Array.apply(null, document.querySelectorAll('.box'));
    const contactdropdown = document.querySelector('.contactdropdown');
    const contactdropdownActive = document.querySelector('.contactdropdown-active');
    const callBox = document.querySelector('.call-box');


    box.forEach(item => {
        item.addEventListener('click' , () => {
            item.classList.toggle('box-active');
            
        });
    });


    callBox.addEventListener('click' , () => {
        contactdropdown.classList.toggle('contactdropdown-active');
    });


      

   
      

};

dropdown();