import React from 'react';

// Components
import ContactImg from "../components/contact/ContactImg";
import ContactForm from "../components/contact/ContactForm";
import PanelTransition from "../components/panel/PanelTransition";

// Motion
import { transition } from "../animation/contact";

// Styles
import { Page } from "../styles/components/contactStyles";

const Contact = () => {
  return (
    <Page exit={{opacity: 0}}>
      <ContactImg transition={transition} />
      <ContactForm transition={transition} />
      <PanelTransition />
    </Page>
  )
}

export default Contact