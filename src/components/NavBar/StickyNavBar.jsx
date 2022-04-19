import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import NavBar from './NavBar';

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
   const [scrollDirection, setScrollDirection] = useState();
 
   const listener = e => {
     setBodyOffset(document.body.getBoundingClientRect());
     setScrollY(-bodyOffset.top);
     setScrollX(bodyOffset.left);
     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
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
     scrollDirection
   };
 }

function StickyNavBar() {
  const { y, x, scrollDirection } = useScroll();  
  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }
    return (
        <nav className="Header" style={scrollDirection === "down" ? styles.active: styles.hidden}   >
          <NavBar />
        </nav>
    )
}

export default withRouter(StickyNavBar);
