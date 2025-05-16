import React from 'react'
import Topbar from './Topbar.jsx'
import Leftpanel from './Leftpanel.jsx'
import Rightpanel from './Rightpanel.jsx'

export default function Home() {
  return (
    <>
      <style>{`
        .home {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        .home .content {
          flex: 1;
          display: flex;
          overflow: hidden;
        }
      `}</style>

      <div className="home">
        <Topbar />
        <div className="content">
          <Leftpanel />
          <Rightpanel />
        </div>
      </div>
    </>
  )
}
