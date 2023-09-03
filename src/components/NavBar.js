import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const nav = links.map((navs)=> {
    return <a key={navs} href={`#${navs}`}>{navs}</a>
  })

  return  <nav>
            {nav}
          </nav>;
}

export default NavBar;
