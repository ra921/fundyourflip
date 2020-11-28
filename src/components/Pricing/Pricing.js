import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>(one-time payment)</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>5,000 Investors w/</PricingCardFeature>
                  <PricingCardFeature>CSV files (Email Only)</PricingCardFeature>
                  <PricingCardFeature>Mon-Fri Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button
                  primary 
                  onClick={() => window.open('https://transactions.sendowl.com/products/78410078/2BA01291/purchase')}
                >
                  Choose Plan
                </Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$599.99</PricingCardCost>
                <PricingCardLength>(one-time payment)</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>7,000 Investors w/</PricingCardFeature>
                  <PricingCardFeature>CSV files (Email + Phone)</PricingCardFeature>
                  <PricingCardFeature>Mon-Fri Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button
                  primary
                  onClick={() => window.open('https://transactions.sendowl.com/products/78410080/64832A2A/purchase')}
                >
                  Choose Plan
                </Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$799.99</PricingCardCost>
                <PricingCardLength>(one-time payment)</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>9,000 Investors w/</PricingCardFeature>
                  <PricingCardFeature>CSV files (Email, Phone, Company)</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button
                  primary
                  onClick={() => window.open('https://transactions.sendowl.com/products/78409960/9E09907E/purchase')}
                >
                  Choose Plan
                </Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;