import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navBarLis = links.map((item) => {
    return <a href={`#${item}`} key={item}>{item}</a>
  })

  return <nav>{navBarLis}</nav>;
}

export default NavBar;
