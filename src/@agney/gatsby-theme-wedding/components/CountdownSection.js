import React from "react";
import styled from "styled-components";
import Countdown from "react-countdown-now";
//import { graphql, useStaticQuery } from "gatsby";

import backgroundImg from "../images/background.jpg";
import CountItem from "./CountItem";
import animationParams from "./animation-params";
import media from "./media";
import StayText from "./StayText"

const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 8rem 0;
  justify-content: center;
  background: url(${backgroundImg}) rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-size: cover;
  flex-direction: column;
  background-position: center;
  color: #fff;
`;

const CountContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;

  ${media.phone`
    flex-direction: column;
  `}
`;

const TitleContainer = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 0;
`;

const Subtitle = styled.sub`
  font-weight: 600;
  font-size: 1rem;
`;

const TextContainer = styled.div`
  width: 30rem;
  align-self: center;
  text-align: center;
  border: 10px;
  border-style: double;
  border-color:${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.light};
  padding-bottom: 2rem;

  ${media.phone`
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    z-index: 5;
    color: #ffffff;
    padding-bottom: 2rem;
  `}
`;

function CountdownSection() {
  const thedate = "28-May-2024 11:00 AM"
  return (
    <Container>
      <TitleContainer>
        <Title {...animationParams}>Save the Date</Title>
        <Subtitle {...animationParams} data-sal-delay="600">
          Join us in Celebration
        </Subtitle>
      </TitleContainer>
      <Countdown
        date={new Date(thedate)}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <p>Done.</p>;
          }
          return (
            <CountContainer>
              <CountItem title="Days" count={days} />
              <CountItem title="Hours" count={hours} />
              <CountItem title="Minutes" count={minutes} />
              <CountItem title="Seconds" count={seconds} />
            </CountContainer>
          );
        }}
      
      />
      <TextContainer>
        <StayText/>
      </TextContainer>

    </Container>
 


  );
}

export default CountdownSection;
