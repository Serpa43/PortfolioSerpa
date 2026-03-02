import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">lucaoserpa@gmail.com</p>
      <div className="footer__social">
        <a
          href="https://web.facebook.com/lucas.serpa.710/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
          aria-label="Facebook"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/lucas_serpa8/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
      </div>
      <p className="footer__copy">© Todos os direitos reservados</p>
    </footer>
  )
}
