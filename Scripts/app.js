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
    

})();    