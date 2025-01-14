import Link from 'next/link';
import Navcss from "../styles/Navbar.module.css"
import { useState, useEffect } from "react";

export default function Tree({}) {
  const files = {
      Components: [{
        name: "Services",
        sections: [
          {name: "Loading ", link: "newt9.dev"},
          {name: "buying", link: "newt9.dev"},
          {name: "carrying", link: "newt9.dev"},
        ]
      },
      {
        name: "Info",
        sections: [
          {name: "One ", link: "newt9.dev"},
          {name: "Two", link: "newt9.dev"},
          {name: "Three", link: "newt9.dev"},
        ]
      },
      {
        name: "Get started ",
        sections: [
          {name: "Start ", link: "newt9.dev"},
          {name: "Middle", link: "newt9.dev"},
          {name: "End", link: "newt9.dev"},
        ]
      }]
  }

  const [focus, setfocus] = useState("none");

 return <div className={Navcss.tree}>
  {files.Components.map((item) => 
    <>
    <div className={Navcss.treepiece} onClick={() => setfocus(item.name)}>{item.name}
    {(focus == item.name && item.sections.map((sub) => <a href={sub.link}>{sub.name}</a>))}
    </div>
    </>
  )}
 </div>
}