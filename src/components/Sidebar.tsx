import React from 'react'
import * as OBC from "openbim-components"

const Sidebar = () => {

  const sidebarStyle: React.CSSProperties = {
    gridArea: "sidebar",
    backgroundColor: "#202932",
    borderRightColor: "#3c4854",
    borderRightWidth: "1px",
    display: "flex",
    flexDirection: "column",
    rowGap: "12px",
    justifyContent: "center",
    alignItems: "center",
    height: '100vh'
  }

  return (
    <>
      <div style={sidebarStyle}>
        <span className={OBC.Button.Class.Base + "material-icons"}>home</span>
        <span className={OBC.Button.Class.Base + "material-icons"}>menu_open</span>
      </div>
    </>
  )
}
export default Sidebar;