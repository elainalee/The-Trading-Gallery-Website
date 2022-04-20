import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import NavBar from './NavBar';

import './StickyNavBar.css';

export function useScroll() {
	// storing this to get the scroll direction
   const [lastScrollTop, setLastScrollTop] = useState(0);
	// the offset of the document.body
   const [bodyOffset, setBodyOffset] = useState(
     document.body.getBoundingClientRect()
   );
   
   const [scrollY, setScrollY] = useState(bodyOffset.top);
   const [scrollX, setScrollX] = useState(bodyOffset.left);
   const [scrollDirection, setScrollDirection] = useState("down");
 
   const listener = e => {
     setBodyOffset(document.body.getBoundingClientRect());
     setScrollY(-bodyOffset.top);
     setScrollX(bodyOffset.left);
     setScrollDirection(lastScrollTop > -bodyOffset.top ? "up" : "down");
     setLastScrollTop(-bodyOffset.top);
   };

 
   useEffect(() => {
     window.addEventListener("scroll", listener);
     return () => {
       window.removeEventListener("scroll", listener);
     };
   });
 
   return {
     scrollY,
     scrollX,
     scrollDirection,
     bodyOffset,
   };
 }

function StickyNavBar() {
  const { scrollY, scrollX, scrollDirection, bodyOffset } = useScroll();
  const styles = {
    quietActive: {
      visibility: "visible",
    },
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    quietHidden: {
      visibility: "hidden",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    },
  }

    return (
        <nav 
          className="Header" 
          style={((bodyOffset.top > -200) ? styles.quietActive : (scrollDirection === "up") ? styles.active: (bodyOffset.top >= -400) ? styles.hidden : styles.hidden)}
          id={bodyOffset.top >= -400 ? "" : "sticky-nav"}>
          <NavBar />
        </nav>
    )
}

export default withRouter(StickyNavBar);
