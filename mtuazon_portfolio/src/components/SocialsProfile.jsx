import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import profilePic from '../assets/M_TUAZON_ID.jpg'    // swap in your image

export default function SocialsProfile() {
  return (
    <>
      <style>{`
        .socials-profile {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }
        .socials-profile .profile img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
        }
        .socials-profile .social-icons {
          display: flex;
          gap: 16px;
          justify-content: center;
          font-size: 1.5rem;
        }
        .socials-profile .social-icons a {
          color: #d1d5db;
          transition: color 0.2s;
        }
        .socials-profile .social-icons a:hover {
          color: #fff;
        }
      `}</style>

      <div className="socials-profile">
        <div className="profile">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </>
  )
}