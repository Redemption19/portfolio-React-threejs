const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
      <div className="social-icon">
  <a href="https://github.com/Redemption19" target="_blank" rel="noopener noreferrer">
    <img src="/assets/github.svg" alt="github" />
  </a>
</div>
<div className="social-icon">
  <a href="https://www.linkedin.com/in/bismark-abban/" target="_blank" rel="noopener noreferrer">
    <img src="/assets/linkedin.svg" alt="linkedin" />
  </a>
</div>
<div className="social-icon">
  <a href="https://web.facebook.com/profile.php?id=100090408287915" target="_blank" rel="noopener noreferrer">
    <img src="/assets/facebook.svg" alt="facebook" />
  </a>
</div>
<div className="social-icon">
  <a href="https://www.instagram.com/bismark.abban/" target="_blank" rel="noopener noreferrer">
    <img src="/assets/instagram.svg" alt="instagram" />
  </a>
</div>
<div className="social-icon">
  <a href="https://x.com/AbbanBismark" target="_blank" rel="noopener noreferrer">
    <img src="/assets/twitter-x.svg" alt="twitter" />
  </a>
</div>

</div>

      <p className="text-white-500">© 2024 Bismark Abban. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
