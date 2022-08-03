console.log("Script is running...")
document.querySelector('.cross').style.display = 'none'
//since cross and ham are made as cursor pointers,
//whenever the user clicks any of these icons the siderbarGo container gets toggeled
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    //now we need to have the hamburger icon present only when the sidebar is not being displayed and cross icon otherwise
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 300);
    }
})