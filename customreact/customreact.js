function customRender(reactElement,mainContainer){
const domElement=document.createElement(reactElement.type);
domElement.innerHTML=reactElement.children;
domElement.setAttribute("href",reactElement.props.href);
domElement.setAttribute("target",reactElement.props.target);
mainContainer.appendChild(domElement);
}

const reactElement={    
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:"click to visit google.com"
}

const mainContainer=document.getElementById("root");
console.log("this is main container",mainContainer);

customRender(reactElement,mainContainer)