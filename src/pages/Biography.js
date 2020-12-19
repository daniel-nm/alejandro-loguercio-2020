import React from 'react'

// Components
import BioImg from "../components/biography/BioImg";
import BioText from "../components/biography/BioText";
import PanelTransition from "../components/panel/PanelTransition";

// Motion
import { transition } from "../animation/biography";

// Styles
import { Page } from "../styles/components/biographyStyles";

const Biography = () => {
  return (
    <Page exit="exit">
      <BioImg transition={transition} />
      <BioText transition={transition} />
      <PanelTransition />
    </Page>
  )
}

export default Biography
