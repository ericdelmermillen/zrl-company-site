import { type Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import { type ChildrenProps } from "@/typing/interfaces";
import { AppContextProvider } from "@/contexts/AppContext";
import { ModalContextProvider } from "@/contexts/ModalContext";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import Footer from "@/components/Footer/Footer";
import IsLoading from "@/components/IsLoading/IsLoading";
import Modal from "@/components/Modal/Modal";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--body-font",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--heading-font",
  fallback: ["Trebuchet MS", "Helvetica", "Arial", "sans-serif"],
  display: "swap",
});

const RootLayout = ({ children }: Readonly<ChildrenProps>) => {
  return (
    <html 
      lang="en"
      suppressHydrationWarning 
      data-scroll-behavior="smooth"
      className={`${openSans.variable} ${poppins.variable}`}
    >
      <body>
        <AppContextProvider>
          <ThemeProvider>
            <ModalContextProvider>
              <IsLoading />
              <ToastProvider />
              <Navbar />
              <Modal />
              <div className="app">
                {children}
              </div>
              <Footer />
            </ModalContextProvider>
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
};


const metadata: Metadata = {
  title: {
    default: "Zidgy Road Labs | Full-Stack Software Agency",
    template: "%s | Zidgy Road Labs",
  },
  description:
    "Custom full-stack web application development, cloud architecture, and modern software solutions for startups and growing businesses.",
  keywords: [
    "Software Agency",
    "Full-Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "Cloud Architecture",
    "AWS",
    "Toronto Software Agency",
  ],
  authors: [{ name: "Zidgy Road Labs", url: "https://zidgyroadlabs.com" }],
  creator: "Zidgy Road Labs",
  metadataBase: new URL("https://zidgyroadlabs.com"),
  openGraph: {
    title: "Zidgy Road Labs | Full-Stack Software Agency",
    description:
      "Custom full-stack web application development, cloud architecture, and modern software solutions.",
    url: "https://zidgyroadlabs.com",
    siteName: "Zidgy Road Labs",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zidgy Road Labs | Full-Stack Software Agency",
    description:
      "Custom full-stack web application development, cloud architecture, and modern software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default RootLayout;
export { metadata };