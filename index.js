const SideBar = () => {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    const shade = document.querySelector('.shade');
    

    function slideaway() {
        sidebar.style.transition = ''
    };


    

    burger.addEventListener('click', () => {
        
        sidebar.classList.toggle('sidebar-active');

        // Sidebar animation
        if (sidebar.style.transition) {
            setTimeout(slideaway, 500);
        } else {
            sidebar.style.transition = 'transform 0.2s ease-out';
        }

        // burger animation
        burger.classList.toggle('toggle');

        // Shade
        shade.classList.toggle('shade-show');
    });
}

SideBar();