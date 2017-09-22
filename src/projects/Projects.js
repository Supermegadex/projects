import './Projects.css';
import Project from './Project';
import React, { Component } from 'react';
import ella from '../img/ellaminnow.ga.png';
import roanoke from '../img/roanoke-info.cf.png';
import reactor from '../img/wfreactor.tk.png';
import bluejay from '../img/bluejay.danielsprojects.ml.png';
import nnpresentation from '../img/nnpresentation.danielsprojects.ml.png';

class Projects extends Component {
  projects = [
    {
      title: "Net Neutrality",
      img: nnpresentation,
      url: "https://nnpresentation.danielsprojects.ml",
      course: "AP Comp Sci Principles"
    },
    {
      title: "Roanoke Infographic",
      img: roanoke,
      url: "https://roanoke-info.cf",
      course: "US History"
    },
    {
      title: "EllaMinnowDict",
      img: ella,
      url: "https://ellaminnow.ga",
      course: "AP English Lang & Comp"
    },
    {
      title: "Reactor",
      img: reactor,
      url: "https://wfreactor.tk",
      course: "AP English Lang & Comp"
    },
    {
      title: "Bluejay",
      img: bluejay,
      url: "https://bluejay.danielsprojects.ml",
      course: "Honors English II"
    }
  ]

  render() {
    return (
      <div className="projects">
        {this.projects.map((project, i) => {
          return <Project title={project.title} img={project.img} url={project.url} course={project.course} key={i}/>
        })}
      </div>
    )
  }
}

export default Projects;
