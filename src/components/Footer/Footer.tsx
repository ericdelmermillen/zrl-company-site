import './Footer.scss';

const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "Zidgy Road Labs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          &copy; {COMPANY_NAME} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;