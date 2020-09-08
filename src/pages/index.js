import React from "react"
import Header from "../components/Header";
import Services from "../components/Services";
import Video from "../components/Video";
import Social from "../components/Social";
import Footer from "../components/Footer";
import PopupNavigation from "../components/PopupNavigation";
import PopupWash from "../components/PopupWash";
import './index.css';

export default function Home() {
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = React.useState(false);
  const [isPopupWashOpen, setIsPopupWashOpen] = React.useState(false);

  function handlePopupNavigationClick() {
    setIsPopupNavigationOpen(true);
  }

  function handlePopupWashClick() {
    setIsPopupWashOpen(true);
  }

  function closeAllPopups() {
    setIsPopupNavigationOpen(false);
    setIsPopupWashOpen(false);
  }

  return (
    <div className="page">
        <PopupNavigation isOpen={isPopupNavigationOpen} onClose={closeAllPopups}/>
        <PopupWash isOpen={isPopupWashOpen} onClose={closeAllPopups}/>
        <Header onNavOpen={handlePopupNavigationClick}/>
        <Services onPopupWashOpen={handlePopupWashClick}/>
        <Video />
        <Social />
        <Footer />
    </div>
  )
}
