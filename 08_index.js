console.log("Script Running...")
const sidebar = document.querySelector('.sidebar');
const ham = document.querySelector('.ham');
const cross = document.querySelector('.cross');

// Initially hide the cross icon
cross.style.display = 'none';
ham.addEventListener("click", () => {
    sidebar.classList.toggle('sidebarGo');

    if (sidebar.classList.contains('sidebarGo')) {
        ham.style.display = 'inline';
        cross.style.display = 'none';
    } else {
        ham.style.display = 'none';
        cross.style.display = 'inline';
    }
});
cross.addEventListener("click", () => {
    sidebar.classList.add('sidebarGo');
    cross.style.display = 'none'; 
    setTimeout(()=>{
ham.style.display = 'inline';  
    },400)      
         
});