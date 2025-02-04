import "./Footer.scss";
import tg from '../icons/tgLogo.png'
import insta from '../icons/instaLogo.png'
import twitter from '../icons/twitLogo.png'
import twitch from '../icons/twitchLogo.png'
import hltv from '../icons/hltvLogo.png'
import uesf from '../icons/uesfLogo.png'

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
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Telegram <img src={tg} alt="telegram" /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Instagram <img src={insta} alt="instagram" /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Twitter<img src={twitter} alt="twitter" /></a>
        </div>
        <div className="sponsors">
          <div className="title"><p>Інформацію взято з:</p></div>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Twitch <img src={twitch} alt="twitch" /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Hltv <img src={hltv} alt="hltw" /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">UESF <img src={uesf} alt="telegram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
