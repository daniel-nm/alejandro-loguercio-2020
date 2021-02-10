import React from 'react'

// Styles
import { Container } from "../../styles/globalStyles";
import { VatDiv, Footnote } from "../../styles/components/classesStyles";

const ClassFootNote = ({ content, language }) => {

  // JSON data
  const data = content[language];

  return (
    <Container>
      <VatDiv>
      {data.text.slice(1,2).map((item) => (
        <p key={item.id}>{item.para}</p>
      ))}
      </VatDiv>
      {data.footnote.map((item) => (
        <Footnote key={item.id}>{item.para}</Footnote>
      ))}
    </Container>
  )
}

export default ClassFootNote
