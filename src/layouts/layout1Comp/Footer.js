
const Footer = () => {
  return (
    <footer
      style={{
        height: "60px",
        width: "100%",
        borderTop: "1px solid rgba(230, 230, 230, 0.64)",
        display:'flex',
        background:'white'
      }}
    >
      <div className="container" style={{display:'flex'}}>
        <style>{`
                    footer li{text-transform: uppercase; color:#888}
                    footer ul{
                        width:100%;
                        align-self:center;
                        display: flex;
                        list-style: none;
                        justify-content: space-between;
                    }
                `}</style>
        <ul style={{margin:'0'}}>
          <li>
            <small>about</small>
          </li>
          <li>
            <small>careers</small>
          </li>
          <li>
            <small>mobile apps</small>
          </li>
          <li>
            <small>professionals</small>
          </li>
          <li>
            <small>buttons</small>
          </li>
          <li>
            <small>advertise</small>
          </li>
          <li>
            <small>sell</small>
          </li>
          <li>
            <small>terms & privacy</small>
          </li>
          <li>
            <small>© 2020 houzz</small>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
