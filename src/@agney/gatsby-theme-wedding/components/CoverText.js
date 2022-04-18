import { graphql, useStaticQuery} from "gatsby";
import React, { Fragment } from "react";
import styled from "styled-components";

import media from "@agney/gatsby-theme-wedding/src/components/media";
import animationParams from "@agney/gatsby-theme-wedding/src/components/animation-params"


const Text = styled.span`
  margin: 1rem;
  font-size: 1.5rem;
  
  ${media.phone`
    margin: 0 0 1rem 0;
    display: flex;
    flex-direction: column;
  `}
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 400;

  ${Text} {
    font-size: 4rem;
  }

  ${media.phone`
    margin: 0 0 12rem 0;
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

const FaqText= styled(Text)`
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
      <ImpText as="p" {...animationParams} data-sal-delay="100">
        Fort Collins, Colorado
      </ImpText>
      <RSVPText as="p" {...animationParams} data-sal-delay="100"> <a href="https://forms.gle/bmuFPHouDTgg1CMV8">R.S.V.P. Now!</a> </RSVPText>
      <ImpText as="p" {...animationParams} data-sal-delay="100">   We kindly request no gifts for our wedding. Your journey to celebrate with us is enough of a gift.  If you insist on giving we have selected charities that you may donate to on our behalf. </ImpText>
      <FaqText as="p" {...animationParams} data-sal-delay="100"> Questions? See the <a href="https://wedding.ryanjillian.com/faq" >FAQ</a> </FaqText>
    </Fragment>
  );
}

export default CoverText;
