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
	// the vertical direction
   const [scrollY, setScrollY] = useState(bodyOffset.top);
	// the horizontal direction
   const [scrollX, setScrollX] = useState(bodyOffset.left);
	// scroll direction would be either up or down
   const [scrollDirection, setScrollDirection] = useState("up");
 
   const listener = e => {
     setBodyOffset(document.body.getBoundingClientRect());
     setScrollY(-bodyOffset.top);
     setScrollX(bodyOffset.left);
     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
     setLastScrollTop(-bodyOffset.top);
   };

  //  console.log("bodyOffset.top ", bodyOffset.top);
  //  console.log("scrollY ", scrollY);
 
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
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    },
    quietHidden: {
      visibility: "hidden",
    }
  }

  // console.log("bodyOffset.top ", bodyOffset.top);
  //  console.log("scrollY ", scrollY);
  console.log("scrollDirection ", scrollDirection);

    return (
        <nav 
          className="Header" 
          style={bodyOffset.top > -175 ? styles.active : bodyOffset.top == -175 ? styles.quietHidden : (scrollDirection === "down" ? styles.active: styles.hidden)}
          id={bodyOffset.top >= -175 ? "fixed-nav" : "sticky-nav"}>
          <NavBar />
        </nav>
    )
}

export default withRouter(StickyNavBar);
