function dropdown() {
    const box = Array.apply(null, document.querySelectorAll('.box'));
    const contactdropdown = document.querySelector('.contactdropdown');
    const callBox = document.querySelector('.call-box');
    const sendmailbox = document.querySelector('.sendmail-box');
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    box.forEach(item => {
        item.addEventListener('click' , () => {
            item.classList.toggle('box-active');
            open.classList.toggle('open-active');
            close.classList.toggle('close-active');
        });
    });


    callBox.addEventListener('click' , () => {
       
        contactdropdown.classList.toggle('contactdropdown-active');

    });

    sendmailbox.addEventListener('click', () => {



    });




};

dropdown();