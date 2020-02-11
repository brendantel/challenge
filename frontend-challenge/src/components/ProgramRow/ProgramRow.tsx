import React from 'react';
import { useRouter } from 'next/router'

import {
  CollegeName,
  Container,
  FieldContainer,
  FieldHeader,
  FieldValue,
  FieldWrapper,
  Logo,
  ProgramName,
  TitleWrapper
} from './ProgramRow.styles';

const ProgramRow = ({ program: { school, degreeType, deliveryMode, name, id, costPerCredit } }) => {


  /*
    When the container is clicked on it should route to /programDetail
    and pass a query parameter id with the program id
  */
  const router = useRouter()
  const handleClick = e => {
    e.preventDefault()
    router.push({ pathname: '/programDetail', query: { id } })
  }

  return (

    <Container onClick={handleClick}>

      <Logo url={school.schoolLogo} />

      <TitleWrapper>
        <ProgramName>{name}</ProgramName>
        <CollegeName>{school.name}</CollegeName>
      </TitleWrapper>

      <FieldWrapper>
        <FieldContainer>
          <FieldHeader start={4} end={5}>
            Degree Type
            </FieldHeader>
          <FieldValue start={4} end={5}>
            {degreeType}
          </FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldHeader start={5} end={6}>
            Delivery
            </FieldHeader>
          <FieldValue start={5} end={6}>
            {deliveryMode}
          </FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldHeader start={6} end={7}>
            Cost Per Credit
            </FieldHeader>
          <FieldValue start={6} end={7}>
            ${costPerCredit || 100}
          </FieldValue>
        </FieldContainer>
      </FieldWrapper>

    </Container>

  )


};

export default ProgramRow;
