import React from 'react'
import styled from '@emotion/styled';
import theme from '../../components/styles/theme';


export default function About() {
    return (
 <Section>   
<AboutHeader>
<AboutHeading id = "about">About out Me</AboutHeading>
</AboutHeader>
<Container>
<TextFlex>
 <p>Hi! I'm Gilbert, a software developer based in Nyeri, Kenya</p> 

 <p>
I enjoy developing software that solves problems that we experience in our daily lifes, "Software that changes the world".
  </p>
  <p>I also create animation videos using 3D technologies</p>
  <p> Here are the technologies I use for software development:</p>
  <SkillList>
   <SkillItem>Javascript(ES6)</SkillItem>
   <SkillItem>HTML </SkillItem>
   <SkillItem>CSS</SkillItem>
   <SkillItem>React Js</SkillItem>
   <SkillItem>Node Js</SkillItem>
   <SkillItem>Express Js</SkillItem>
   <SkillItem>PHP</SkillItem>
   <SkillItem>MySQL</SkillItem>
   <SkillItem>Mongo DB</SkillItem>
   <SkillItem>APIs</SkillItem>
   <SkillItem>React Native</SkillItem>
   <SkillItem>Python</SkillItem>
   <SkillItem>Java</SkillItem>
</SkillList>
<p> Here are the technologies I use for 3D animation:</p>
<SkillList>
  <SkillItem>Blender</SkillItem>
  <SkillItem>Maya</SkillItem>
  <SkillItem>Unreal Engine</SkillItem>
  <SkillItem>Cinema 4D</SkillItem>
  <SkillItem>Mixamo</SkillItem>
</SkillList>
</TextFlex>
<ImgFlex>
<ImgOverlay>
    <AboutImg src={Image} alt =""></AboutImg>
    </ImgOverlay>
</ImgFlex>
</Container>
 </Section>
    )
}




const Section = styled.section`
background-color:${theme.colors.navy};



`;


const AboutHeader = styled.div`
padding-left:0.5em;
padding-top:2em; 
`;

const AboutHeading = styled.h3`
@media (min-width: 768px){
  margin-left:8em;
   

};
margin-left:0.5em;
font-family:"Calibre";
font-size:32px;
font-weight:600;
color:${theme.colors.vLightSlate};



::before
{counter-increment: section 1;
content: "0" counter(section) ".";
margin-right: 10px;
font-family: "SF Mono";
font-weight: normal;
font-size:32px;
color: rgb(100, 255, 218);
font-size: 20px;
position: relative;
bottom: 4px;
};

::after
{
content: "";
display: block;
height: 1px;
width: 5em;
background-color: rgb(48, 60, 85);
position: relative;
top: -20px;
margin-left: 5.9em;
};

`;

const Container = styled.div` 
 @media (min-width: 768px){
   margin-left:10em;
   /*width:100%; */


};
margin-left:2em;
 display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
  border:1rem;


margin:2em;
margin-bottom:8em;
margin-top:3em;
margin-left:1em;
margin-right:2em;

`;
/* Flexbox children for the container details are here. */
const TextFlex = styled.div`
width: 60%;
max-width: 480px;
font-family:"Calibre";
font-weight:400;
color:${theme.colors.slate};
font-size:20px;
margin-top:0;
padding-left:2em;

@media (max-width: 768px){

  width:90%;
  max-width:550px;
};

`;

const ImgFlex = styled.div ` 

position: relative;
width:70%;
max-width:400px;
padding-left:2em;
margin-left: 2em;
padding-top:5em;


::after{

  height:inherit;
    display: block;
    width: 100%;
    background: #808080;
    border-right: 1px white;
    content: '';
};

@media (min-width: 768px){
  width: 40%;
max-width: 300px;

};


`;

/* Flex End */ 


 const AboutImg = styled.img`
  max-width: 100%;
  height: auto;
  position:relative;
  bottom:4em;


  `;
  const ImgOverlay = styled.div`
 
`;


/* List component eventually */
const SkillList = styled.ul`
display:grid;
grid-template-columns: repeat(2, minmax(140px,200px));
@media (max-width: 768px){


};

`;
 const SkillItem = styled.li`
 list-style:none;
 ::before{
  content: "▹";
padding-right:10px;
font-size: 14px;
line-height: 12px;
color:${theme.colors.green};
 };
 
 `;