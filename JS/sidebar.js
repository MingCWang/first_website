const SideBar = () => {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    const shade = document.querySelector('.shade');


    // FUNCTIONS
    function deletetransition() {
        sidebar.style.transition = '';
        shade.style.transition = '';
    };

    function sidebaranimation() {
        if (sidebar.style.transition) {
            setTimeout(deletetransition, 300);
        } else {
            sidebar.style.transition = 'transform 0.3s ease-out';
            shade.style.transition = '0.3s ease-out';
        }
    };



    // click burger and shade
    [burger, shade].forEach(function(element) {
        element.addEventListener('click', () => {

            sidebaranimation();
           
            sidebar.classList.toggle('sidebar-active');

            // burger animation
            burger.classList.toggle('toggle');
            // Shade
            shade.classList.toggle('shade-show');
            

        });
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


