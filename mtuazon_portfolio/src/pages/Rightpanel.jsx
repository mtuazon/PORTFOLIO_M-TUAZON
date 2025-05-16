import React from 'react'

export default function Rightpanel() {
  return (
    <>
      <style>{`
        .right-panel {
          flex: 0 0 55%;
          background: #edd6ff;
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-y: auto;
          border-radius: 32px 0 0 32px;
        }
        .right-panel .card {
          width: 80%;
          background: #fefcf3;
          border-radius: 24px;
          padding: 32px;
          text-align: center;
          box-sizing: border-box;
        }
        .right-panel .card h1 {
          margin: 0 0 8px;
          font-size: 2.5rem;
          color: #111827;
        }
        .right-panel .card p {
          margin: 0;
          color: #374151;
        }
        .right-panel .buttons {
          margin-top: 32px;
          display: flex;
          gap: 32px;
        }
        .right-panel .buttons a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 48px;
          background: #fefcf3;
          color: #8b5cf6;
          font-weight: 600;
          text-decoration: none;
          border-radius: 12px;
          transition: background 0.2s;
        }
        .right-panel .buttons a:hover {
          background: rgba(254,252,243,0.8);
        }
      `}</style>

      <main className="right-panel">
        <div className="card">
          <h1>MARIVIC TUAZON</h1>
          <p>(she/her)</p>
        </div>
        <div className="buttons">
          <a href="/Marivic_Tuazon_Resume.pdf">Resume</a>
          <a href="#portfolio">Portfolio</a>
        </div>
      </main>
    </>
  )
}
