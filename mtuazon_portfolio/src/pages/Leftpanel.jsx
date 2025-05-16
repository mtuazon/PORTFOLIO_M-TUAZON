import React from 'react'
import SocialsProfile from '../components/SocialsProfile.jsx'

export default function Leftpanel() {
  return (
    <>
      <style>{`
        .left-panel {
          flex: 0 0 45%;
          background: #272e38;
          color: #f9fafb;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 0 32px 32px 0;
        }
      `}</style>

      <aside className="left-panel">
        <SocialsProfile />
      </aside>
    </>
  )
}
