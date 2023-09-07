import React from 'react'
import ButtonStyle, { ButtonDetail } from './styles/ButtonStyle';
import IMGStyle, { LogoStyle } from './styles/ImageStyle';
import Display from './styles/DisplayStyle';

const Header = () => {
  return (
    <>
       <Display>
        <LogoStyle src="./images/logo.png" alt="aa" />
        <section>
          {/* props yolluyoruz xx yy */}
          <ButtonStyle xx>Apply Courses</ButtonStyle>
          <ButtonStyle yy="#A62440">Talk to Adviser</ButtonStyle>
        </section>
      </Display>
      <hr />
      <Display>
        <section>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            {" "}
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <ButtonStyle yy="#A62440">Start Your New Carrier</ButtonStyle>
          <ButtonDetail>Details</ButtonDetail>
        </section>
        <IMGStyle src="./images/hero.jpg" alt="" />
      </Display> 
    </>
      
  );
}

export default Header