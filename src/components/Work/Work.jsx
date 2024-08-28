import React from 'react'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EditIcon from '@mui/icons-material/Edit';
import ComputerIcon from '@mui/icons-material/Computer';
import "./style.css"
export default function Work() {
  let arr = [
    {
      id: 1,
      icon: <EventNoteIcon />,
      title: "Research",
      sub: "I do a lot of research. Because research brings me more knowledge."
    },
    {
      id: 2,
      icon: <AutoGraphIcon />,
      title: "Analyze",
      sub: "I always analyze everything I do. Because during the analysis, more ideas arise."
    },
    {
      id: 3,
      icon: <EditIcon />,
      title: "Design",
      sub: "Since my work is mainly related to design, I take a particular approach to design.",
    },
    {
      id: 4,
      icon: <ComputerIcon />,
      title: "Launch",
      sub: "Every site is fast to launch. It depends on the internet speed.",
    }
  ]
  return (
    <div className='work py-5'>
      <div className="py-5"></div>
      <div className="pp"></div>
      <div className="py-5"></div>
      <div className="container pt-0 py-5">
        <div className="work-content py-5 row justify-content-between align-items-center">
          <div className="work-left col-5">
            <h1 className='bold-font worktitle'>Work Process</h1>
            <p>Currently, many technologies are produced in the world. But I chose ReactJS out of these. I used to create websites in HTML, CSS, and JS. Later I learned the VueJS framework and developed many personal portfolios in it.</p>
            <p>Then I had to learn ReactJS for some reason. After learning ReactJS I fell in love with it. I slowly learned frontend technologies. I am currently learning Nextjs.</p>
          </div>
          <div className="work-right col-6">
            <div className="work-card">

              {
                arr.map((item) => (
                  <div className="work-card-content p-4">
                    <div className="work-card-icon">
                      {item.icon}
                    </div>
                    <h4 className="work-card-title bold-font">{item.id}. {item.title}</h4>
                    <p className="work-card-sub">
                      {item.sub}
                    </p>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
