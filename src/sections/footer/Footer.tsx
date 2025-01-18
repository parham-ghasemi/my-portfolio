const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-8 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <p className="text-white-500 text-sm">© 2025 Parham Ghasemi. All rights reserved.</p>

      <div className="flex gap-3">
        <a href="https://www.github.com/parham-ghasemi" target="_blank" rel="noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://x.com/parham_ghasemy" target="_blank" rel="noreferrer" className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/pax_209" target="_blank" rel="noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>


      <div className="text-white-500 flex gap-2 w-[256px] h-[24px]">
        {/* <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p> */}
      </div>
    </footer>
  );
};

export default Footer;