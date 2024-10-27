import SideBar from "@/components/SideBar";
import { Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ml-6">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Click
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <SideBar></SideBar>
            {/* <li onClick={signOutUser} className="cursor-pointer">
    <span>Log Out</span>
  </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
