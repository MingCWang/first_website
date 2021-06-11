function dropdown() {
    const box = Array.apply(null, document.querySelectorAll('.box'));
    const contactdropdowncall = document.querySelector('.contactdropdowncall');
    const contactdropdownmessage = document.querySelector('.contactdropdownmessage');
    const callBox = document.querySelector('.call-box');
    const sendmailbox = document.querySelector('.sendmail-box');
    const messagebox = document.querySelector('.message-box');
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    box.forEach(item => {
        item.addEventListener('click' , () => {
            item.classList.toggle('box-active');
        });
    });


    callBox.addEventListener('click' , () => {
        open.classList.toggle('open-active');
        close.classList.toggle('close-active');
        contactdropdowncall.classList.toggle('contactdropdowncall-active');

    });

    sendmailbox.addEventListener('click', () => {

    });

    messagebox.addEventListener('click', () => {

        contactdropdownmessage.classList.toggle('contactdropdownmessage-active');
    });



};

dropdown();