import { graphql, useStaticQuery} from "gatsby";
import React, { Fragment } from "react";
import styled from "styled-components";

import media from "@agney/gatsby-theme-wedding/src/components/media";
import animationParams from "@agney/gatsby-theme-wedding/src/components/animation-params"


const Text = styled.span`
  margin: 1rem;
  font-size: 1.5rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 400;

  ${Text} {
    font-size: 4rem;
  }

  ${media.phone`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
  `}
`;

const ImpText = styled(Text)`
  color: ${props => props.theme.colors.secondary};

  ${media.phone`
    color: ${props => props.theme.colors.light};
    font-weight: 600;
  `}
`;

const RSVPText= styled(Text)`
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.light};
  font-weight: 400;
  font-size: 2rem;

  ${media.phone`
  border: 2px solid black;
  padding: 25px;
  margin: 0 0 0 18%;
  display: flex;
  width: 50%;
  flex-direction: column;
`}
`

const QUERY = graphql`
  query {
    event {
      profiles {
        name
      }
      events {
        title
        occasion {
          place {
            name
          }
        }
      }
    }
  }
`;
function CoverText() {
  const { event } = useStaticQuery(QUERY);
  return (
    <Fragment>
      <Heading>
        <Text>{event.profiles[1].name}</Text>
        <Text>&</Text>
        <Text>{event.profiles[0].name}</Text>
      </Heading>
      <Text as="p">Join us on</Text>
      <ImpText as="p" {...animationParams} data-sal-delay="100">
        {event.events[0].title}
      </ImpText>
      <Text as="p">in</Text>
      <ImpText as="p" {...animationParams}>
        Fort Collins, Colorado
      </ImpText>
      <RSVPText as="p" {...animationParams} > <a href="https://forms.gle/bmuFPHouDTgg1CMV8">R.S.V.P. Now!</a> </RSVPText>
      <ImpText as="p" {...animationParams} > Questions? See the <a href="https://wedding.ryanjillian.com/faq">FAQ</a> </ImpText>
    </Fragment>
  );
}

export default CoverText;
