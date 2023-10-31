function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <img alt="logo" src="../../logo.svg" />
        <div className="di">DIGITAL HUB</div>
      </div>
      <div className="headerRight">
        <div className="rightUser">user name</div>
        <div className="logoRight">
          <div className="userLogo"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
