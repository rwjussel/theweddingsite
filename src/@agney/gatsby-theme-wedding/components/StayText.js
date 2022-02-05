import { graphql, useStaticQuery } from "gatsby";
import React, { Fragment } from "react";
import styled from "styled-components";

import media from "@agney/gatsby-theme-wedding/src/components/media";
import animationParams from "@agney/gatsby-theme-wedding/src/components/animation-params"


const Text = styled.span`
  margin: 1rem;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 400;

  ${Text} {
    font-size: 4rem;
    color: ${props => props.theme.colors.secondary};
  }

  ${media.phone`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
  `}
`;

const ImpText = styled(Text)`
  text-align:left;
  color: ${props => props.theme.colors.primary};

  ${media.phone`
    color: ${props => props.theme.colors.light};
    font-weight: 600;
  `}
`;

function StayText() {
  return (
    <Fragment>
      <Heading>
        <Text>Where to Stay</Text>
      </Heading>
      <ImpText as="p" {...animationParams} data-sal-delay="100">
        Jillian & Ryan Wedding Reserve Rate Details:
      </ImpText>
      <ImpText as="li" {...animationParams} data-sal-delay="100">
        Earliest Check-in: Thursday, May 26, 2022
      </ImpText>
      <ImpText as="li" {...animationParams} data-sal-delay="100">
        Latest Check-out: Monday, May 30, 2022
      </ImpText>
      <ImpText as="li" {...animationParams}>
        Last Day to Book: Wednesday, April 27, 2022
      </ImpText>
      <ImpText>
        <a href="https://www.marriott.com/events/start.mi?id=1634066673792&key=GRP">Reserve rooms now with group rate.</a>
      </ImpText>
      <ImpText as="li" >
        The Elizabeth Hotel, Autograph Collection for 249 USD - 289 USD per night
      </ImpText>
      
      
    </Fragment>
  );
}

export default StayText;
