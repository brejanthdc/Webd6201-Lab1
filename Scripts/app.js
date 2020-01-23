//Name: Brejanth Rajendran
//StudentId: 100557484
//Date: 2020/01/23

"use strict";
(function (){
    //2(a):
    //creates a variable for the products link
    let LinkName = document.getElementsByTagName("li")[1];
    // changes the text content from whatever it was to Projects
    LinkName.innerHTML ='<li id="products"class="nav-item"><a class="nav-link" href="#"><i class="fas fa-list"></i> Projects</a></li>' ;
   
 
    //Check what was changed
    //console.log(LinkName);
    //2(b):
    // creates a varible that contains the Contact us link and its html
    let Contactlink = document.getElementsByTagName("li")[5];

    // use console to find out what li[5] is
    //console.log(Contactlink);

    //Clones the contactLink var to a new link
    let NewLink = Contactlink.cloneNode(true);
    //Changes the contact link from contact us to human Resources
    NewLink.innerHTML = '<li  class="nav-item"><a class="nav-link" href="#"><i class="fas fa-user-circle"></i> Human Resources</a></li>';
   
    //check for changes
    //console.log(NewLink);
   
    //Insert NewLink before contact us link 
    Contactlink.parentNode.insertBefore(NewLink,Contactlink);
    
    //Creates a var that holds main navbar
    let Navbar = document.getElementsByTagName("nav")[0];
    //Creates a new nav bar and stores it inside of bottomNav
    let BottomNav = document.createElement("nav");

    // this creates the current year but I don't know how to insert it into html tag
    //let CurrentYear = new Date().getFullYear();
    //console.log(CurrentYear);

    //Adds html code to the newly created nav bar, and in this case it is a bottom nav bar
    BottomNav.innerHTML = '<nav class="navbar fixed-bottom navbar-light bg-light"> <a class="navbar-brand" href="#">&copy CopyRight 2020 </a></nav>';
    

    //Inserts the new navbar before old one
    Navbar.parentNode.insertBefore(BottomNav,Navbar);
    })();    