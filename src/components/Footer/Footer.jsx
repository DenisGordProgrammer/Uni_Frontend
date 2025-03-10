import "./Footer.scss";
import tg from '../../../src/assets/images/tgLogo.png'
import insta from '../../../src/assets/images/instaLogo.png'
import twitter from '../../../src/assets/images/twitLogo.png'
import twitch from '../../../src/assets/images/twitchLogo.png'
import hltv from '../../../src/assets/images/hltvLogo.png'
import uesf from '../../../src/assets/images/uesfLogo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className='container links-container'>
        <div className="contacts">
          <div className="title"><p>Наші контакти:</p></div>
          <p>follower.help@work.ua</p>
          <p>support@work.ua</p>
          <p>gamehelp@work.ua</p>
        </div>
        <div className="socials">
          <div className="title"><p>Ми у соціальних мережах:</p></div>
          <a href="https://t.me/hltvtelegram">Telegram <img src={tg} alt="telegram" /></a>
          <a href="https://www.instagram.com/hltvorg/">Instagram <img src={insta} alt="instagram" /></a>
          <a href="https://www.twitter.com/HLTVorg">Twitter<img src={twitter} alt="twitter" /></a>
        </div>
        <div className="sponsors">
          <div className="title"><p>Інформацію взято з:</p></div>
          <a href="hhttps://www.twitch.tv/hltvorg">Twitch <img src={twitch} alt="twitch" /></a>
          <a href="https://www.hltv.org">Hltv <img src={hltv} alt="hltw" /></a>
          <a href="https://uesf.org.ua">UESF <img src={uesf} alt="UESF" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
