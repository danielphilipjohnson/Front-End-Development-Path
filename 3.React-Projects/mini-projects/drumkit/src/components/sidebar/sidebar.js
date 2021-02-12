import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__links">
        <li>
          <div className="btn-drum">
            <i class="fas fa-bars"></i>
          </div>
        </li>
        <li>
          <div class="sidebar-btns">
            <div className="btn-drum">
              <i class="fas fa-search"></i>
            </div>

            <div className="btn-drum signal">
              <i class="fas fa-signal"></i>
            </div>
            <div className="btn-drum">
              <i class="fas fa-pencil-alt"></i>
            </div>
          </div>
        </li>
        <li>
          <div className="btn-drum">
            <i class="fas fa-sliders-h"></i>
          </div>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
