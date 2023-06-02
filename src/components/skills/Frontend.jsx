import React from 'react'

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills__title">Frontend</h3>
      <div className="skills__box">
      <div className="skills__group">
        <h5>Programming Language</h5>
       <h3 className="skills__name" style={{marginBottom: '15px'}}>Javascript ES6 & Vanilla JS <br></br><span className="skills__level">Expert</span> </h3>
       </div>
       </div>
          

      <div className="skills__box">
        <div className="skills__group">
        <h5>Framework</h5>
          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">React JS</h3>
            <span className="skills__level">Expert</span>
          </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">	JQuery</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">	Bootstrap</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          </div>
        </div>

        <div className="skills__group">
        <h5>Library</h5>

          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">Leaflet JS</h3>
            <span className="skills__level">Expert</span>
          </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">Apexchart</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">Slick</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend