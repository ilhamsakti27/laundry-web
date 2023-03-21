const burgerNav = () => {
    let menu = document.querySelector('#topNav');
    if (menu.className === "topnav") {
        menu.className += " responsive";
      } else {
        menu.className = "topnav";
      }
};