import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="contacts">
          <p>Наші контакти:</p>
          <p>follower.help@work.ua</p>
          <p>support@work.ua</p>
          <p>gamehelp@work.ua</p>
        </div>
        <div className="socials">
          <p>Ми у соціальних мережах:</p>
          <a href="#telegram">Telegram</a>
          <a href="#instagram">Instagram</a>
          <a href="#twitter">Twitter</a>
        </div>
        <div className="sponsors">
          <p>Інформацію взято з:</p>
          <p>twitch</p>
          <p>hltv</p>
          <p>UESF</p>
        </div>
      </footer>
  );
};

export default Footer;
