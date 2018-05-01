import React from 'react';

export default function Nav({}) {
  return (
    <div className="nav-tabs-navigation">
      <div className="nav-tabs-wrapper">
        <ul id="tabs" className="nav nav-tabs" role="tablist">
          <li className="nav-item"> 
            <a className="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
          </li>
          <li className="nav-item"> 
            <a className="nav-link active" data-toggle="tab" href="#profile" role="tab">Profile</a>
          </li>
          <li className="nav-item"> 
            <a className="nav-link active" data-toggle="tab" href="#messages" role="tab">Messages</a>
          </li>

        </ul>
      </div>
    </div>

  );
}