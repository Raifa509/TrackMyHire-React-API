import React from 'react'

function Footer() {
  return (
    <>
    <footer
      style={{
        backgroundColor: "#3d3f40ff",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <p style={{ margin: 0, fontSize: "14px" }}>
        © {new Date().getFullYear()} TrackMyHire. All rights reserved.
      </p>
    </footer>
    </>
  )
}

export default Footer