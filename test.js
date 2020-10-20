AOS.init({
    once: true
  }); 
  var image = document.getElementsByClassName('image-1');
  new simpleParallax(image, {
    orientation: 'up',
    overflow: true,
    scale: 1.3, 
    delay: 2,
    transition: 'cubic-bezier(0,0,0,1)'
  });
  var image2 = document.getElementsByClassName('image-2');
  new simpleParallax(image2, {
    orientation: 'down',
    overflow: true,
    scale: 1.3,
    delay: 2,
      transition: 'cubic-bezier(0,0,0,1)'
  });
  var image3 = document.getElementsByClassName('image-3');
  new simpleParallax(image3, {
    orientation: 'right',
    overflow: false,
    scale: 1.1,
    delay: 2,
      transition: 'cubic-bezier(0,0,0,1)'
  });
  const cursor = document.querySelector(".cursor");
  
  const button = document.querySelectorAll("button");
  
  const links = document.querySelectorAll("a");
  
  const bounce = "bounce";
  
  const inactive = "inactive"; 
  
  function moveMouse(e) {
    const x = e.clientX;
    const y = e.clientY;
  
    cursor.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
  }
  
  
  document.addEventListener("mousemove", moveMouse);
  
  
  // const menu = document.querySelector(".menu");
  
  // const navbackground = document.querySelector(".navigation__background");
  
  // const navbackgroundselected = document.querySelector(".navigation__checkbox_checked")
  
  // menu.addEventListener('click', ()=> {
  //   navbackground.classList.toggle("checked"),
  //   menu.classList.toggle("white-border")
  // })