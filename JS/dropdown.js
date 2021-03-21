function dropdown() {
    const box = Array.apply(null, document.querySelectorAll('.box'));
            
   

    box.forEach(item => {
        item.addEventListener('click' , () => {
            item.style.borderBottom = 'thin solid black';
        });
    });
      


};

dropdown();