import React from 'react';
import './App.css';

// Make sure you add an import for your card!
import ArielleP from './components/ArielleP';
import Tu from './components/Tu';
import GaganBhatCard from './components/GaganBhatCard';
import ACMCard from './components/ACMCard';
import SchobbishCard from './components/SchobbishCard';
import EmilyB from './components/EmilyB';
import Jadendick from './components/jadendick';
import VedSCard from './components/VedS';
import LizW from './components/LizW';
import MitchA from './components/MitchA'
import SanjeevPCard from './components/SanjeevP';
import PingKengCard from './components/pingkeng';
import RichardN from './components/RichardN';
import AarushiPCard from './components/AarushiP';
import JesseT from './components/JesseT';
import AbhishekM from './components/AbhishekM';
import PaulL from "./components/PaulL";
import SaiB from './components/SaiB';
import TravisD from './components/TravisD';
import JerryT from './components/JerryT';
import NamT from './components/NamT';
import FarishahN from './components/FarishahN';
import AmruthaRCard from './components/AmruthaRCard'
import VaughanMcInerneyCard from './components/VaughanMcInerney'
import NehaRCard from './components/NehaR';
import ACMCardRajmeet from './components/ACMCardRajmeet';

function App() {
  return (
    <div className="app">
      {/*You can ignore the <div> below. This is just used to add some contextual info at the top of the page*/}
      <div id="info">
        <h1>React-tionary Business</h1>
        <h4>A webpage dedicated to business cards made in React during <a href="https://www.acmutd.co/">ACM UTD</a>'s <a href="https://hacktoberfest.acmutd.co/">Hacktoberfest</a> event</h4>
        <p>Visit <a href="https://hacktoberfest.digitalocean.com/">www.hacktoberfest.digitalocean.com</a> for more information</p>
      </div>

      <div id="business-cards">
      {/*Notice how you can give named attributes to your component!*/}
      <JesseT name = "Jesse Truong" email = "jessetruong4551@gmail.com" phone = "83268077817" address = "14719 East Ginger Spice"/>
      <Tu name="Tu Chu" email="tu.chu@utdallas.edu" phone="123-456-7890" address="800 West Campbell Road" website="N/A" />
      <ACMCard name="Association for Computing Machinery" email="contact@acmutd.co" phone="555-1234" address="800 West Campbell Road" website="acmutd.co"/>
      <EmilyB name="Emily Basile" email="ebb160130@utdallas.edu" phone="666-666" address="800 West Campbell Road" website="https://github.com/kree666"/>
      <Jadendick name="jaden" email="email@email.com" phone="384383983443534534" address="itd" website="acmutd.co" />
      <VedSCard name="Ved Sharma" email="vss190005@utdallas.edu" phone="1234567890" address="101 Market Street" website="example.com"/>
      <LizW name="Liz Wigglesworth" github="lizgw" email="liz.wigglesworth@gmail.com" website="lizgw.github.io"/>
      <MitchA name ="Mitchell Ament" email = "mitchgament@gmail.com" phone = "425-503-7277" address = "Plano, TX" website="github.com/MitchAment"/>
      <SanjeevPCard name="Sanjeev Penupala" email="sanjeev.penupala@acmutd.co" phone="713-7399" address="420 Green Hills" website="sanjeevpenupala.dev"/>
      <PingKengCard name="Ping-Keng Hsieh" email="pxh190002@utdallas.edu" phone="682-283-XXXX" address="800 West Campbell Road" website="github.com/cookiej4u"/>
      <RichardN name="Richard Noeske" email="yourname@yourdomain.com" phone="N/A" address="1234 Faketown USA" website="projects.acmutd.co"/>
      <AarushiPCard name="Aarushi Pandey" email="aarushipandey2211@gmail.com" phone="4255535565" address="2400 Waterview Parkway, Richardson, TX " website="www.linkedin.com/in/aarushi-s-pandey/"/>
	    <AbhishekM name="Abhishek Amol Mishra" email="abhiamishra0@gmail.com" phone="469-408-9099" address="8819 Rodeo Drive Apt 237" website="acmutd.co"/>
      <PaulL name="Paul Lupeituu" email="keahi.lupeituu@gmail.com" website="acmutd.co" />
      <SaiB name="Sai Bommisetty" email="kushalbommi@gmail.com" phone="300-1497" address="6265 Coit Road" website="acmutd.co/projects"/>
      <TravisD name="Travis A. Dula" email="travisadula@gmail.com" phone="972.987.9679" address="Plano, TX" website="https://www.linkedin.com/in/travis-dula/"/>
      <JerryT name="Jerry Teng" email="Jerry.Teng@UTDallas.edu" phone="917-915-6555" address="2400 Waterview Parkway" linkedin="https://www.linkedin.com/in/jerryteng01/" website="https://csg.utdallas.edu/"/>
      <NamT name ="Nam Truong" email = "namtruong831@gmail.com" phone = "9725236666" address="2226 Jacqueline Dr" website = "acmutd.co"/>
      <FarishahN name="Farishah N" email = "Sample@gmail.com" phone = "123-456-7890" address= "800 W Campbell Rd."  website="acmutd.co" /> 
      <AmruthaRCard name="Amrutha Bhargavi Rajkumar" email="amruthabhargavi95@gmail.com" phone="996-5257" address="4721 Christopher Court" website="https://amrutha-bhargavi.github.io/personal-portfolio/"/>
      <VaughanMcInerneyCard name="Vaughan McInerney" email="vmm190002@utdallas.edu" phone="(000) 000-0000" address="Richardson, TX" website="github.com/vmm20"/>
      <GaganBhatCard name="Gagan Bhat" email="gaganbhat6@gmail.com" phone="XXX-XXX-XXXX" address="2501 Ohio Dr. Plano, TX" website="http://gaganbhat.me/"/>
      <NehaRCard name="Neha Rode" email="neha.rode@acmutd.co" phone="540-1451" address="4242 Mulberry Lane" website="disney.com"/>
      <SchobbishCard name="Nathan Adam" email="nla190001@utdallas.edu" phone="867-5309" address="2801 Rutford Ave" website="https://a.schobbish.com/in"/>
	    {/*Add your component above this comment to put it into the app!*/}
      <ACMCardRajmeet name="Rajmeet Juneja" email="rajmeet2001@gmail.com" phone="214-960-7915" address="800 West Campbell Road" website="www.rajmeetjuneja.com"/>
      <ArielleP name="Arielle Posadas" email="arielle1901@gmail.com" phone="123-585-7670" address="Spring, TX" website="https://github.com/posadari"/>
      {/*Add your component above this comment to put it into the app!*/}
      </div>
    </div>
  );
}

export default App;
