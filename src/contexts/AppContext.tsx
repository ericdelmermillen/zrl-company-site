"use client";

import { 
  redirect,
  usePathname, 
  useRouter 
} from "next/navigation";
import { 
  useState,
  useRef, 
  useEffect, 
  createContext 
} from "react";
import { 
  type ChildrenProps,
  type AppContextValue, 
} from "@/typing/interfaces";
import { addClassToDiv, scrollToTop } from "@/utils/utils";
import { toast } from "react-toastify";

const MIN_LOADING_INTERVAL = parseInt(process.env.NEXT_PUBLIC_MIN_LOADING_INTERVAL || "250", 10);
const APP_ISLOADING_DELAY = parseInt(process.env.NEXT_PUBLIC_APP_ISLOADING_DELAY || "500", 10);
const NAV_CLICK_DELAY = parseInt(process.env.NEXT_PUBLIC_NAV_CLICK_DELAY || "300", 10);

const AppContext = createContext<AppContextValue | undefined>(undefined);

const AppContextProvider = ({ children }: ChildrenProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const [ appIsLoading, setAppIsLoading ] = useState<boolean>(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(!false);
  const [ showDropdownNav, setShowDropdownNav ] = useState<boolean>(false);
  const [ scrollYPos, setScrollYPos ] = useState<number>(0);

  const prevScrollYPosRef = useRef<number | null>(null);
  const logoutTimerRef = useRef<number | null>(null);
  const navLinkClickTimerRef = useRef<number | null>(null);
  const clearAppStateTimerRef = useRef<number | null>(null);

  const getPrevScrollYPosValue = () => prevScrollYPosRef.current ?? 0;

  const clearOnScroll = () => {
    // might need clearing here for modalInputs
    setShowDropdownNav(false);
  };

  const handleNavLinkClick = (href: string, isMobileView: boolean = false) => {
    const isOnHome = pathname === "/";
    const [ route, targetId ] = href.split("#");

    if (navLinkClickTimerRef.current) {
      clearTimeout(navLinkClickTimerRef.current);
    }

    if (isMobileView) {
      setShowDropdownNav(false);
    }

    if (route && !isOnHome) {
      setAppIsLoading(true);
      router.push(route); 
    }

    if (targetId) {
      navLinkClickTimerRef.current = window.setTimeout(() => {
        addClassToDiv("navbar", "hide");
        const targetElement = document.getElementById(targetId);
        targetElement && targetElement.scrollIntoView({ behavior: "smooth" });
      }, (isMobileView || (route && !isOnHome)) ? (NAV_CLICK_DELAY * 2) : 0);
    }
  };

  // async returning a promise
  const handleLogoutUser = async () =>  {
    const isOnHome = pathname === "/";
    setAppIsLoading(true);

    // handle async logoutUser action
    setIsLoggedIn(false);

    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }

    logoutTimerRef.current = window.setTimeout(() => {
      setShowDropdownNav(false);
      setAppIsLoading(false);

      if (!isOnHome) {
        router.push("/");
      } else {
        scrollToTop();
      }
    }, showDropdownNav ? (MIN_LOADING_INTERVAL * 2) : 0);
  };

  const handleClearAppState = (logOutUser = false) => {
    setAppIsLoading(true);

    if (clearAppStateTimerRef.current) {
      clearTimeout(clearAppStateTimerRef.current);
    }

    if (logOutUser) {
      setIsLoggedIn(false);
      toast("Logging you out...");
      redirect("/");
    }

    clearAppStateTimerRef.current = window.setTimeout(() => {
      setShowDropdownNav(false);
      setAppIsLoading(false);
    }, MIN_LOADING_INTERVAL * 2);
  };

  // useEffect to turn off appIsLoading on page load or after navigation
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | number;

    const handleLoad = () => {
      timeoutId = setTimeout(() => {
        setAppIsLoading(false);
      }, APP_ISLOADING_DELAY * 2);
    };

    // what is the readyState on the document?
    if (document.readyState === "complete") {
      scrollToTop();
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    }
  }, [pathname]);
  
  // useEffect for updating of scrollYPos
  useEffect(() => {
    let ticking = false;
    let animationFrameId: number | undefined;

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setScrollYPos(prev => {
            if (prev === currentScrollY) {
              return prev;
            };

            prevScrollYPosRef.current = prev;
            return currentScrollY;
          });
          
          clearOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () =>{
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const contextValues: AppContextValue = {
    appIsLoading, 
    setAppIsLoading,
    scrollYPos, 
    setScrollYPos,
    getPrevScrollYPosValue,
    isLoggedIn, 
    setIsLoggedIn,
    showDropdownNav, 
    setShowDropdownNav,
    handleNavLinkClick,
    handleLogoutUser,
    handleClearAppState
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