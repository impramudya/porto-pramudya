import React from 'react'

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
        <h5>Programming Language</h5>
          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">Javascript</h3>
            <span className="skills__level">Expert</span>
          </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">PHP</h3>
            <span className="skills__level">Expert</span>
          </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">Python</h3>
            <span className="skills__level">Specialist</span>
          </div>
          </div>
        </div>

        <div className="skills__group">
        <h5>Framework</h5>
          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">Express JS</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">Laravel/Lumen</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          </div>

          
          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">Flask</h3>
            <span className="skills__level">Specialist</span>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Backend