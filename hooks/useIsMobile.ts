import { Platform, useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";

export const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState( false  );


  useEffect(() => {
    const checkMobile = () => {
      if (Platform.OS === "web") {
        const viewportWidth = Math.min(
          window.innerWidth,
          document.documentElement.clientWidth
        );
        const screenWidth = window.screen.width;

        setIsMobile(Math.min(viewportWidth, screenWidth) < MOBILE_BREAKPOINT);
      } else {
        setIsMobile(width < MOBILE_BREAKPOINT);
      }
    };

    checkMobile();

    if (Platform.OS === "web") {
      window.addEventListener("resize", checkMobile);
    }

    return () => {
      if (Platform.OS === "web") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, [width]);

  return isMobile;
}
