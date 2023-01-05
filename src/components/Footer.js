import github from "../assets/img/github.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/MichaelShawUK/memory-card">
        <img id="github-logo" src={github} alt="Github logo"></img>
      </a>
    </footer>
  );
};

export default Footer;
