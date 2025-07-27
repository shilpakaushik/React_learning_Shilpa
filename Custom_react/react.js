

function customReactRender(reactElement, mainContainer)  {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    mainContainer.appendChild(domElement);
    return domElement;
     */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props) {
        if (prop !== 'children') {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }
    return mainContainer.appendChild(domElement);

}


const reactElement = {
    type:"a", 
    props: {
    href:  "https://react.dev",
    target: "_blank"
  },
    children: "Welcome react dev tutorial"
   
}

const mainContainer = document.getElementById('root');
customReactRender(reactElement, mainContainer)

