import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faUser,
  faMessage,
} from '@fortawesome/free-solid-svg-icons'


const ContactUsFooter = () => {
  const footerStyle = {
    //paddingTop: '90px',
    padding: '40px 0px 30px',
    marginLeft:'-30px',
    marginRight:'-30px',
    marginBottom:'-30px',
    // backgroundColor: '#e0e0e0',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
    backdropFilter: 'blur(10px)', // Frosted glass effect
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
    
  }

  const locationSectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px -40px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    height:'100',

  }
  const contactFormSectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px 20px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    height: '100',
  }

  const headingStyle = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25px',
    marginBottom: '1rem',
    paddingLeft:'350px',
  }
  const spanStyle = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25px',
    marginBottom: '1rem',
    paddingLeft:'400px',
  }

  const fontstyle = {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: '20px',
    marginBottom:'-15px',
    marginTop:'-10px',
    //marginBottom: '1rem',
    paddingLeft:'200px',
  }

  const numstyle = {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '1rem',
  }

  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  }

  const inputIconStyle = {
    backgroundColor: '#e9ecef',
    border: '1px solid #ced4da',
    borderRight: 'none',
    padding: ' 0.2rem 0.5rem 0.5rem',
    
    borderRadius: '5px 0 0 5px',
    height:'2rem',
  }

  const inputStyle = {
    color: '#333',
    border: '1px solid #ced4da',
    padding: '0.3rem',
    borderRadius: '0 5px 5px 0',
    width: '100%',
    fontSize: '16px',
    height: '2rem',
    backgroundColor: '#fff',
  }

  const textareaStyle = {
    ...inputStyle,
    borderRadius: '5px',
    height: '50px',
  }

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '0.3rem',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    marginBottom:'7px',
  }

  return (
    <footer style={footerStyle}>
      <div className="container">
        {/* Single Location Heading */}
        <h2 style={headingStyle} className="text">
          Our Locations <span style={spanStyle}>Let us know your thought</span>
        </h2>

        <div className="row">
          {/* Location 1 */}
          <div className="col-md-4 mb-4">
            <div style={locationSectionStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.142755790626!2d77.618416!3d12.9214914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1f2b76d7a608fb%3A0x4da49cc7f16e1466!2sThiran360AI!5e0!3m2!1sen!2sin!4v1726748384053!5m2!1sen!2sin"
                width="100%"
                height="195"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <h6 className="text-center py-2">
                📌 Madiwala, Bangalore -560068
              </h6>
            </div>
          </div>

          {/* Location 2 */}
          <div className="col-md-4 mb-4">
            <div style={locationSectionStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4506596116653!2d77.45464059999999!3d11.447362499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93defffea8007%3A0x94d8ec21e155d18c!2sCFW3%2BWVR%2C%20Kullampalayam%2C%20Gobichettipalayam%2C%20Tamil%20Nadu%20638476!5e0!3m2!1sen!2sin!4v1726657143713!5m2!1sen!2sin"
                width="100%"
                height="195"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <h6 className="text-center py-2">
                📌Gobichettipalayam,Erode-638476
              </h6>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-4 mb-4">
            <div style={contactFormSectionStyle}>
              <form>
                <div style={inputGroupStyle}>
                  <span style={inputIconStyle}>
                    <FontAwesomeIcon icon={faUser} color="#007bff" />
                  </span>
                  <input
                    type="text"
                    style={inputStyle}
                    placeholder="Your Name"
                  />
                </div>
                <div style={inputGroupStyle}>
                  <span style={inputIconStyle}>
                    <FontAwesomeIcon icon={faEnvelope} color="#007bff" />
                  </span>
                  <input
                    type="email"
                    style={inputStyle}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '8px' }}>
                  <textarea
                    className="form-control"
                    style={textareaStyle}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={buttonStyle}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = '#0056b3')
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = '#007bff')
                  }
                >
                  <FontAwesomeIcon icon={faMessage} /> Send Message
                </button>
              </form>
            </div>
          </div>
          <div>
            <h6 style={fontstyle}>
              Contact us:📞+91 9659245977 ✉️info@thiran360ai.com
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ContactUsFooter