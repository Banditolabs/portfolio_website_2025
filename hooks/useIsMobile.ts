import { useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";

export const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );


  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);

  return isMobile;
}
