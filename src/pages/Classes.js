import React, { useEffect, useContext } from 'react';

// Components 
import ClassText from "../components/classes/ClassText";
import ClassBio from "../components/classes/ClassBio";
import ClassVideo from "../components/classes/ClassVideo";
import ClassPrices from "../components/classes/ClassPrices";
import ClassContact from '../components/classes/ClassContact';
import PanelTransition from "../components/panel/PanelTransition";

// Styles
import { Page } from "../styles/components/classesStyles";

// Animation
import { transition } from "../animation/biography";

// Content
import Content from "../content/classes.json";

// Context
import LanguageContext from "../context/LanguageContext";
import ClassFootNote from '../components/classes/ClassFootNote';

const Classes = () => {

  // App language
  const [language, setLanguage] = useContext(LanguageContext);

  // Set language to German
  useEffect(() => {
    localStorage.setItem("AL - Lang", "de");
    setLanguage("de");
  }, [setLanguage]);

  return (
    <Page>
      <ClassText content={Content} language={language} transition={transition} />
      <ClassBio content={Content} language={language} />
      <ClassVideo />
      <ClassPrices content={Content} language={language} />
      {/* <ClassContact content={Content} language={language} /> */}
      <ClassFootNote content={Content} language={language} />
      <PanelTransition />
    </Page>
  )
}

export default Classes
