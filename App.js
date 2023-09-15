   import React from "react";
   import ReactDOM from "react-dom/client";
   const H2= React.createElement('h2',{ key: "contact.id" }, "Hello World");
   const H1= React.createElement('div',{ key: "contact.id" }, H2);
   console.log(H1);
   const root = ReactDOM.createRoot(document.getElementById('root'));
   
   root.render(H1);
   
    /*const h1 =document.createElement('h1');
    const h1Text = document.createTextNode("This is new.");
    h1.appendChild(h1Text);     
    const rootelement = document.querySelector("#root");
    var createdH1Element= rootelement.appendChild(h1);
    console.log(createdH1Element);
    */