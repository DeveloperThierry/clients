import React from "react";

const Navbar = ({onOpen, onSearch}) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value)
  }
  return (
    <div className="navbar bg-base-100 shadow-sm p-4">
      <div className=" navbar-start flex-1">
        <a className="btn btn-ghost text-xl">Clients</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="form-control">
            <input type="text" placeholder="Search"
            className="input input-bordered w-48 md:w-auto" onChange={handleSearchChange}/>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary" onClick={onOpen}>Add Client</a>
      </div>
    </div>
  );
};

export default Navbar;
