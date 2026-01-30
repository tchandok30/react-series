

function customrender(reactelement,container) {
    // const domelement=document.createElement(reactelement.type);
    // domelement.innerHTML=reactelement.children;
    // domelement.setAttribute('href',reactelement.props.href);
    // domelement.setAttribute('target',reactelement.props.target);
    // container.appendChild(domelement)
    const domelement=document.createElement(reactelement.type);
    domelement.innerHTML=reactelement.children;
    for (const key in reactelement.props) {
        domelement.setAttribute(key,reactelement.props[key])
        
    }container.appendChild(domelement);
}

const reactelement={
    type: 'a',
    props:{
        href: "https://www.google.com",
        target: '_blank'
    },
    children:'Click me to visit Google'
}
let maincontainer=document.getElementById('root')
customrender(reactelement,maincontainer);