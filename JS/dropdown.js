function dropdown() {
    const box = Array.apply(null, document.querySelectorAll('.box'));
    const contactdropdowncall = document.querySelector('.contactdropdowncall');
    const contactdropdownmessage = document.querySelector('.contactdropdownmessage');
    const contactdropdownmail = document.querySelector('.contactdropdownmail');
    const callBox = document.querySelector('.call-box');
    const sendmailbox = document.querySelector('.sendmail-box');
    const messagebox = document.querySelector('.message-box');
    const open1 = document.querySelector('.open1');
    const close1 = document.querySelector('.close1');
    const open2 = document.querySelector('.open2');
    const close2 = document.querySelector('.close2');
    const open3 = document.querySelector('.open3');
    const close3 = document.querySelector('.close3');

    box.forEach(item => {
        item.addEventListener('click' , () => {
            item.classList.toggle('box-active');
        });
    });

    sendmailbox.addEventListener('click', () => {
        open1.classList.toggle('open1-active');
        close1.classList.toggle('close1-active');
        contactdropdownmail.classList.toggle('contactdropdownmail-active');
    });

    callBox.addEventListener('click' , () => {
        open2.classList.toggle('open2-active');
        close2.classList.toggle('close2-active');
        contactdropdowncall.classList.toggle('contactdropdowncall-active');

    });

    messagebox.addEventListener('click', () => {
        open3.classList.toggle('open3-active');
        close3.classList.toggle('close3-active');
        contactdropdownmessage.classList.toggle('contactdropdownmessage-active');
    });



};

dropdown();