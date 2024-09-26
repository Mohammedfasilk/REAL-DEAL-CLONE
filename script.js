window.addEventListener('scroll',() => {
    const scrolled = window.scrollY;
    if(scrolled >= 80){

       document.getElementById("top").className = "fk"; 
       document.getElementById("logo").className = "logo-adjust"; 
                 
        
    }
    else{
        document.getElementById("top").className = "nav-top";
        document.getElementById("logo").className = "logo";
      
    }
    
})