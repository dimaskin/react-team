import React from 'react';
import './index.css'

export default function ProjectList({projects}) {
  return (
    <ul className="list project-list">
      {projects.map(project =>
        <li className="list-item project-list-item">
          <div className="list-item__text">
            <h3 className="list-item__primary-test">website project</h3>
            <p  className="list-item__secondary-test">design and build a custom website</p>
          </div>
          <span className="label">Активный</span>
        </li>
      )}
    </ul>
  );
}