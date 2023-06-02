import React from 'react'

const Datascience = () => {
  return (
    <div className="skills_content">
      <h3 className="skills__title">Data Science</h3>

      <div className="skills__box">
        <div className="skills__group">
        <h5>Programming Language</h5>

          <div className="skills__data">
          <i class='bx bx-badge-check'></i>

          <div>
            <h3 className="skills__name">Pyhton</h3>
            <span className="skills__level">Specialist</span>
          </div>
          </div>
          
        <div className="skills__group">
        <h5>Library</h5>
          <div className="skills__data">
          <i class='bx bx-badge-check'></i>
          <div>
            <h3 className="skills__name">Spacy</h3>
            <span className="skills__level">Ameture</span>
          </div>
          </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Datascience