import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// scrolls to top of the page whenever the route changes
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}