/* light mode */ 
        let lightModeButton = document.getElementById("light-mode-toggle");
        let lightMode = localStorage.getItem("lightMode");
      let body = document.body;
      
      let enableLightMode = () => {
        body.classList.add("light-mode"); 
        lightModeButton.classList.replace("fa-moon" , "fa-sun");       
        localStorage.setItem("lightMode", "enabled" );
      }
      
      let disableLightMode = () => {
        body.classList.remove("light-mode");
        lightModeButton.classList.replace("fa-sun" , "fa-moon");
        localStorage.setItem("lightMode", null );
      } 
       
       if (lightMode === "enabled") {
           enableLightMode()           
       }
        
        lightModeButton.addEventListener("click" , () => {
            lightMode = localStorage.getItem("lightMode")
        
          if ( lightMode !== "enabled") {
              enableLightMode()
          }else {
              disableLightMode()
          }
           
        })
        
        
        /* navigation */
        let nav = document.getElementsByTagName("nav")[0];
        let openMenu = document.getElementById("openMenu");
        let closeMenu = document.getElementById("closeMenu");
        let navLinks = document.querySelectorAll("nav.flex li a")
        
        navLinks.forEach(links => {
          links.addEventListener("click" , ()=>{
          nav.style.right = "-230 px"
            nav.style.transition = "0.8s ease-in"  
        })  
        })

        openMenu.addEventListener("click", () => {
            nav.style.right = 0
            nav.style.transition = "0.5s ease-in"
        })
        
        
        closeMenu.addEventListener("click" , ()=>{
           nav.style.right = "-230px"
            nav.style.transition = "0.5s ease-in" 
            
        })
        /* scroll-top */
        let scrollIcon = document.getElementById("scroll-top");
        window.addEventListener("scroll" ,()=>{
            if (window.pageYOffset > 200) {
                scrollIcon.classList.add("active")
            }else {
                scrollIcon.classList.remove("active")
            }
        })
        
        
        /*hide header on scroll */
                
    let header =
     document.getElementsByTagName("header")[0];
        let prevScrollpos = 0;
 window.addEventListener("scroll" , ()=>{
     let currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    header.style.transition = "0.3s ease-in"
  } else {
    header.style.top = "-70px";
    header.style.transition = "0.3s ease-in"
  }
  prevScrollpos = currentScrollPos;
 })
 
 
 /* loading */
 
 let loader = document.getElementById("preloader");
 
 window.addEventListener("load" , () => {
     loader.style.display = "none"
 })
