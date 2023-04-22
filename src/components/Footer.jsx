import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="BeautyHub logo" style={{ height: '40px', marginRight: '10px' }} />
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>BeautyHub</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="https://www.facebook.com"><FaFacebookF size={20} style={{ marginRight: '10px' }} /></a>
          <a href="https://www.twitter.com"><FaTwitter size={20} style={{ marginRight: '10px' }} /></a>
          <a href="https://www.instagram.com"><FaInstagram size={20} style={{ marginRight: '10px' }} /></a>
          <a href="https://www.linkedin.com"><FaLinkedinIn size={20} /></a>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>Email: info@beautyhub.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Beauty St, Suite 456, City, State Zip.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
