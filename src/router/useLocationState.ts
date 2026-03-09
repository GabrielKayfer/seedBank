import { useEffect, useState } from "react";
import { scrollToHash } from "./navigation";

function getLocationState() {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
}

export function useLocationState() {
  const [locationState, setLocationState] = useState(getLocationState);

  useEffect(() => {
    const syncLocation = () => {
      setLocationState(getLocationState());
    };

    window.addEventListener("popstate", syncLocation);

    return () => {
      window.removeEventListener("popstate", syncLocation);
    };
  }, []);

  useEffect(() => {
    if (locationState.hash) {
      requestAnimationFrame(() => scrollToHash(locationState.hash));
    }
  }, [locationState.hash, locationState.pathname]);

  return locationState;
}
