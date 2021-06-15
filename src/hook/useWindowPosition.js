import { useLayoutEffect, useState } from 'react';

export default function useWindowPostion(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight
      console.log("windowpageOffset", window.pageYOffset, offetSetHeight);
      if (window.pageYOffset > offetSetHeight * 0.8) {
        setAnimation(true);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}