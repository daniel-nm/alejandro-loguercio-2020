import React from 'react';
import { motion } from "framer-motion";

// Components
import Panel from "../components/panel/PanelTransition";

// Styles
import { Container } from "../styles/globalStyles";
import { Div } from "../styles/components/policyStyles";

// Motion
import { transition } from "../animation/policy";

const Policy = () => {
  return (
    <Container>
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{...transition, delay: 0.5}}
      >
      <Div>
        <h1>Privacy Policy - Alejandro Loguercio</h1>
        <p>This privacy policy will explain how Alejandro Loguecio uses the personal data collected from you when you use our website.</p>
      </Div>
      <Div>
        <h2>What data does Alejandro Loguercio collect?</h2>
        <p>Alejandro Loguercio collects the following data:</p>  
        <ul>
          <li>Personal identification information (name, email address, phone number).</li>
        </ul>
      </Div>
      <Div>
        <h2>How does Alejandro Loguercio collect your data?</h2>
        <p>You directly provide Alejandro Loguercio with all of the data collected. Alejandro Loguercio collects data and processes data when you:</p>
        <ul>
          <li>Voluntarily complete the contact form or send a message via email.</li>
        </ul>
      </Div>
      <Div>
        <h2>How will Alejandro Loguercio use your data?</h2>
        <p>Alejandro Loguercio collects your data so that he can:</p>
        <ul>
          <li>Email you back to reply to any enquiry you may have.</li>
          <li>Email you with special offers you might like.</li>
        </ul>
      </Div>
      <Div>
        <h2>Does Alejandro Loguercio use cookies?</h2>
        <p>Yes. Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology.</p>
        <p>For further information, visit <a href="allaboutcookies.org.">allaboutcookies.org.</a></p>
      </Div>
      <Div>
        <h2>How does Alejandro Loguercio use cookies?</h2>
        <p>Alejandro Loguercio uses cookes to:</p>
        <ul>
          <li>Remember your preferred language selection when you visit the website again.</li>
        </ul>
      </Div>
      <Div>
        <h2>Your Consent</h2>
        <p>By using our site, you consent to our privacy policy</p>
      </Div>
      <Div>
        <h2>Changes to the Privacy Policy</h2>
        <p>If we device to change the privacy policy, Alejandro Loguercio will post the changes on this page.</p>
      </Div>
      </motion.div>
      <Panel />
    </Container>
  )
}

export default Policy
