import { useRef, useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';


var options = {
  damping : 0.049,
}

const Scroll = () => {
  useEffect(() => {
    Scrollbar.init(document.querySelector('.subpage'), options);

  }, [])
  return null;
}

export default Scroll;