import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar, SideBarAdmin } from "../components";

function DepotLayout(props) {
  const [sessionStorage, setSessionStorage] = React.useState({});

  React.useEffect(() => {
    setSessionStorage({
      depots: JSON.parse(window.sessionStorage.getItem("depots"))
    });
  }, [])

  // console.log(sessionStorage);
  return (
    <div className="depot-layout">
      {props.isAdmin
      ?
        <SideBarAdmin curDepot={props.curDepot} setCurDepot={props.setCurDepot} setIsAdmin={props.setIsAdmin} />
      :
        <SideBar curDepot={props.curDepot} setCurDepot={props.setCurDepot} /> 
      }
      <Outlet />
    </div>
  );
}

export default DepotLayout;