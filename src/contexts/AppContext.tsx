"use client";

import { 
  usePathname, 
  // useRouter 
} from "next/navigation";
import { 
  type MouseEvent, 
  useState,
  useRef, 
  useEffect, 
  createContext 
} from "react";
import { 
  type ChildrenProps,
  type AppContextValue, 
} from "@/typing/interfaces";
import { isModifiedClick, scrollToTop } from "@/utils/utils";
// import { type TypeOptions, toast } from "react-toastify";
// import { isModifiedClick, normalizeCasing, scrollToTop } from "@/utils/utils";

const MIN_LOADING_INTERVAL = Number(process.env.NEXT_PUBLIC_MIN_LOADING_INTERVAL);
const APP_ISLOADING_DELAY = Number(process.env.NEXT_PUBLIC_APP_ISLOADING_DELAY);

const AppContext = createContext<AppContextValue | undefined>(undefined);

const AppContextProvider = ({ children }: ChildrenProps) => {
  const pathname = usePathname();
  // const router = useRouter();


  const [ appIsLoading, setAppIsLoading ] = useState(true);
  const [ scrollYPos, setScrollYPos ] = useState(0);

  const [ isLoggedIn, setIsLoggedIn ] = useState(!false);

  const [ showDropdownNav, setShowDropdownNav ] = useState(false);
  
  // used to return prevScrollYPos: persists across renders
  const prevScrollYPosRef = useRef<number | null>(null);

  const getPrevScrollYPosValue = () => prevScrollYPosRef.current ?? 0;

  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const clearOnScroll = () => setShowDropdownNav(false);

  const handleIsOnSamePage = (e?: MouseEvent<HTMLElement>) => {
    if (e && isModifiedClick(e)) {
      return;
    }
    
    setAppIsLoading(true);
    scrollToTop();
    handleClearAppState();
  };

  const handleClearAppState = (logOutUser = false) => {
    setAppIsLoading(true);

    if (logOutUser) {
      // setIsLoggedIn(false);
      console.log("Logging you out")
    }
    

    setTimeout(() => {
      setShowDropdownNav(false);
      setAppIsLoading(false);
    }, MIN_LOADING_INTERVAL * 2);
  };



  // useEffect to turn off appIsLoading on page load or after navigation
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setAppIsLoading(false);
      }, APP_ISLOADING_DELAY);
    };

    // what is the readyState on the document?
    if (document.readyState === "complete") {
      scrollToTop();
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [pathname]);
  
  // useEffect for updating of scrollYPos
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setScrollYPos(prev => {
            if (prev === currentScrollY) {
              return prev;
            };

            prevScrollYPosRef.current = prev;
            return currentScrollY;
          });
          
          clearOnScroll();
          // handleSetShowSideNavFalse();
          // setShowNavSelectOptions(false);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const contextValues: AppContextValue = {
    appIsLoading, 
    setAppIsLoading,
    scrollYPos, 
    setScrollYPos,
    getPrevScrollYPosValue,
    toggleButtonRef,
    isLoggedIn, 
    setIsLoggedIn,
    showDropdownNav, 
    setShowDropdownNav,
    handleIsOnSamePage
  }


  return (
    <AppContext.Provider value={contextValues}>
      { children }
    </AppContext.Provider>
  );
};



export { 
  AppContext,
  AppContextProvider
};