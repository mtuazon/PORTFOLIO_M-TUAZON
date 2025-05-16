import React from 'react'

export default function Topbar() {
  return (
    <>
      <style>{`
        .topbar {
          height: 60px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .topbar .brand {
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
        }
        .topbar .nav {
          display: flex;
          gap: 32px;
        }
        .topbar .nav a {
          text-decoration: none;
          color: #111827;
          transition: color 0.2s;
        }
        .topbar .nav a:hover {
          color: #7c3aed;
        }
      `}</style>

      <header className="topbar">
        <div className="brand">mtuazon</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#exp">Experience</a>
          <a href="#proj">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  )
}
