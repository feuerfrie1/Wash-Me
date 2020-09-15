import React from "react"
import Header from "../components/Header";
import Services from "../components/Services";
import Video from "../components/Video";
import Social from "../components/Social";
import Shares from "../components/Shares";
import Footer from "../components/Footer";
import PopupNavigation from "../components/PopupNavigation";
import PopupWash from "../components/PopupWash";
import PopupDetail from "../components/PopupDetail";
import PopupPasting from "../components/PopupPasting";
import PopupTires from "../components/PopupTires";
import './index.css';

export default function Home() {
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = React.useState(false);
  const [isPopupWashOpen, setIsPopupWashOpen] = React.useState(false);
  const [isPopupDetailOpen, setIsPopupDetailOpen] = React.useState(false);
  const [isPopupPastingOpen, setIsPopupPastingOpen] = React.useState(false);
  const [isPopupTiresOpen, setIsPopupTiresOpen] = React.useState(false);

  function handlePopupNavigationClick() {
    setIsPopupNavigationOpen(true);
  }

  function handlePopupWashClick() {
    setIsPopupWashOpen(true);
  }

  function handlePopupDetailClick() {
    setIsPopupDetailOpen(true);
  }

  function handlePopupPastingClick() {
    setIsPopupPastingOpen(true);
  }
  function handlePopupTiresClick() {
    setIsPopupTiresOpen(true);
  }

  function closeAllPopups() {
    setIsPopupNavigationOpen(false);
    setIsPopupWashOpen(false);
    setIsPopupDetailOpen(false);
    setIsPopupPastingOpen(false);
    setIsPopupTiresOpen(false);
  }

  return (
    <div className="page">
        <PopupNavigation isOpen={isPopupNavigationOpen} onClose={closeAllPopups}/>
        <PopupWash isOpen={isPopupWashOpen} onClose={closeAllPopups}/>
        <PopupDetail isOpen={isPopupDetailOpen} onClose={closeAllPopups}/>
        <PopupPasting isOpen={isPopupPastingOpen} onClose={closeAllPopups}/>
        <PopupTires isOpen={isPopupTiresOpen} onClose={closeAllPopups}/>
        <Header onNavOpen={handlePopupNavigationClick}/>
        <Services onPopupWashOpen={handlePopupWashClick} onPopupDetailOpen={handlePopupDetailClick} onPopupPastingOpen={handlePopupPastingClick} onPopupTiresOpen={handlePopupTiresClick}/>
        <Video />
        <Social />
        <Shares />
        <Footer />
    </div>
  )
}
