const SideBar = () => {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    
    function slideaway() {
        sidebar.style.transition = ''
    };

    burger.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-active');

        
        // Sidebar animation
        if (sidebar.style.transition) {
            setTimeout(slideaway, 10000);
            console.log('no transition');
        } else {
            sidebar.style.transition = 'transform 0.2s ease-out';
            console.log('has transition');
        }

        // burger animation
        burger.classList.toggle('toggle');

    });
}

SideBar();