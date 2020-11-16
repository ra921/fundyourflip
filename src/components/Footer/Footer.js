import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText> You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                <FormInput name='email' type='email' placeholder='Your Email' />
                    <Button fontBig>Subscribe</Button>
                </Form>  
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/How it works'>How it works</FooterLink>
                        <FooterLink to='/Testimonials'>Testimonials</FooterLink>
                        <FooterLink to='/Careers'>Careers</FooterLink>
                        <FooterLink to='/Investors'>Investors</FooterLink>
                        <FooterLink to='/Terms of Service'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/Contact'>Contact</FooterLink>
                        <FooterLink to='/Support'>Support</FooterLink>
                        <FooterLink to='/Destinations'>Destinations</FooterLink>
                        <FooterLink to='/Sponsorships'>Sponsorships</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper> 
                        <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/Submit Video'>Submit Video</FooterLink>
                        <FooterLink to='/Ambassadors'>Ambassadors</FooterLink>
                        <FooterLink to='/Agency'>Agency</FooterLink>
                        <FooterLink to='/Influence'>Influencer</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/Instagram'>Instagram</FooterLink>
                        <FooterLink to='/Facebook'>Facebook</FooterLink>
                        <FooterLink to='/Youtube'>Youtube</FooterLink>
                        <FooterLink to='/Twitter'>Twitter</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        PUBLICTO
                    </SocialLogo>
                    <WebsiteRights>PUBLICTO © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" 
                        aria-label="Facebook">
                        <FaFacebook /> 
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" 
                        aria-label="Instagram">
                        <FaInstagram /> 
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" 
                        aria-label="Youtube">
                        <FaYoutube /> 
                        </SocialIconLink> 
                        <SocialIconLink href='/' target="_blank" 
                        aria-label="Twitter">
                        <FaTwitter /> 
                        </SocialIconLink> 
                        <SocialIconLink href='/' target="_blank" 
                        aria-label="Linkedin">
                        <FaLinkedin />  
                        </SocialIconLink>   
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
        );
};

export default Footer; 