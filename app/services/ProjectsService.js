import { AppState } from "../AppState.js"
import { Project } from "../models/Project.js"

class ProjectsService{
  constructor(){
  }
  init(projects){
    projects.forEach(project => this.addProject(project))
  }
  addProject(projectData){
    const newProject = new Project(projectData)
    AppState.projects.push(newProject)
  }

  setActiveProject(projectName){
    const projects = AppState.projects
    const foundProject = projects.find(project => project.name == projectName)
    AppState.activeProject = foundProject
  }
}

export const projectsService = new ProjectsService