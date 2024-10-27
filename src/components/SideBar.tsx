import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
      <Link to={"/"}>
        <li>Home</li>
      </Link>

      <li className="text-3xl my-5 font-lato">User Panel</li>
      <li>
        <Link to={"/dashBoard/addProject"} className="font-lato">
          Add Project
        </Link>
      </li>
      <li>
        <Link to={"/dashBoard/addBlog"} className="mt-2 font-lato">
          Add Blog
        </Link>
      </li>
    </ul>
  );
}
