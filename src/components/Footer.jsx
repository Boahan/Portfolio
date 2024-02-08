import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
              <br />
        </div>

        <div className="col">
            <h3>Office <div className="underline"><span></span></div></h3>
             <p>ITBP road</p>
            <p>roorke</p>
            <p>uttarakhand India</p>
            <p className="email-id">sample@gmail.com</p>
            <h4>xxxxxxxxxx</h4>
        </div>

        <div className="col">
        <h3>Links <div className="underline"><span></span></div></h3>
        <ul>
            <li><a href="">Home</a></li>
            
            <li><a href="">Contact us</a></li>
            
            <li><a href="">Explore</a></li>
            
        </ul>
        </div>
        <div className="col">
            
            <div className="social-icons">

                <a href="https://www.facebook.com/fampay.in/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://github.com/fampay"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/fampay.in/"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
      </div>
      <p className="copyright">All Right Reserved   ©  2024</p>
    </div>
  )
}
export default Footer