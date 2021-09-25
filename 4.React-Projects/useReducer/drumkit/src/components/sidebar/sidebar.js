import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar hidden-sm">
      <ul className="sidebar__links">
        <li>
          <div className="btn-drum">
            <i className="fas fa-bars"></i>
          </div>
        </li>
        <li>
          <div className="sidebar-btns">
            <div className="btn-drum">
              <i className="fas fa-search"></i>
            </div>

            <div className="btn-drum signal">
              <i className="fas fa-signal"></i>
            </div>
            <div className="btn-drum">
              <i className="fas fa-pencil-alt"></i>
            </div>
          </div>
        </li>
        <li>
          <div className="btn-drum">
            <i className="fas fa-sliders-h"></i>
          </div>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
