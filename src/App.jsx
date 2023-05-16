import React from 'react';
function App(){
  return(
    <>Hello </>
    // <Navbar>
    //   <NavItem icon="😁"/>
    //   <NavItem icon="😁"/>
    //   <NavItem icon="😁"/>
    // </Navbar>
  );
}
function Navbar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}
function Navbar(props){
  return(
    <li className="nav-item">
      <a href="2" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}

export default App;
