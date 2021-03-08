const SideBar = () => {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    const shade = document.querySelector('.shade');
    
    

    function slideaway() {
        sidebar.style.transition = ''
    };


    // click shade

    shade.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-active');

        // burger animation
        burger.classList.toggle('toggle');

        // Shade
        shade.classList.toggle('shade-show');
    });
    
    // click burger

    burger.addEventListener('click', () => {
        
        sidebar.classList.toggle('sidebar-active');

        // Sidebar animation
        if (sidebar.style.transition) {
            setTimeout(slideaway, 500);
        } else {
            sidebar.style.transition = 'transform 0.3s ease-out';
        }

        // burger animation
        burger.classList.toggle('toggle');

        // Shade
        shade.classList.toggle('shade-show');
    });
}

const background = () => {
    const p = document.querySelector('.parallax-bg');

    window.onscroll = function(){
        let scrollY = window.scrollY;
        p.style.backgroundPosition = 'center ' + (scrollY*0.5) + 'px';
      };

};



const callfunctions = () => {
    SideBar();
    background();
};


callfunctions();


