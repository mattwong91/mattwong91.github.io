import { AppState } from "../AppState.js";
import { projectsService } from "../services/ProjectsService.js";
import { setHTML } from "../utils/Writer.js";

export class ProjectsController{
  constructor(){
    this.createProjects()
    _drawProjects()
  }

  createProjects(){
    const projects = [{
      name: 'Nut Cracking',
      projectType:'Games',
      coverImg:'https://images.unsplash.com/photo-1706378398232-834ca3201ef2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slideImages:['https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1587301669187-732ea66e7617?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      description:`Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
      Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.`,
      client: 'Ruby Clinton',
      technologies: 'HTML5, CSS3, Javascript, Bootstrap',
      projectDate: 'February 9, 2024',
      projectUrl : 'www.example.com'
    },
    {
      name: 'Molecules',
      projectType:'3D',
      coverImg:'https://images.unsplash.com/photo-1703880258785-45bc4492a912?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slideImages:['https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1587301669187-732ea66e7617?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      description:`This is a weird little 3D render. It has some purple and black pillar type structures`,
      client: 'Ruby Clinton',
      technologies: 'HTML5, CSS3, Javascript, Bootstrap',
      projectDate: 'February 10, 2024',
      projectUrl : 'www.example.com'
    },
    {
      name: 'Fish & Chips',
      projectType:'Apps',
      coverImg:'https://images.unsplash.com/photo-1706711053549-f52f73a8960c?q=80&w=3575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slideImages:['https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1587301669187-732ea66e7617?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      description:`Fish and Chips are delicious. I am really craving some crispy fish with those beautiful salty fries.`,
      client: 'Matt Wong',
      technologies: 'HTML5, CSS3, Javascript, Bootstrap',
      projectDate: 'February 24, 2024',
      projectUrl : 'www.example.com'
    },
    {
      name: 'Alpine Home',
      projectType:'Art',
      coverImg:'https://images.unsplash.com/photo-1546593064-053d21199be1?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slideImages:['https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1587301669187-732ea66e7617?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      description:`A nice house covered in snow. The mountainscape is pretty.`,
      client: 'Matt Wong',
      technologies: 'HTML5, CSS3, Javascript, Bootstrap',
      projectDate: 'February 20, 2024',
      projectUrl : 'www.example.com'
    }]
    projectsService.init(projects)
  }

  openProjectDetails(projectName){
    projectsService.setActiveProject(projectName)
    _drawProjectModal()
  }
}

function _drawProjects(){
  const projects = AppState.projects
  let content = ''
  projects.forEach(project => content += project.ProjectCard)

  setHTML('projects', content)
}

function _drawProjectModal(){
  const activeProject = AppState.activeProject
  let content = activeProject.ProjectDetails
  
  setHTML('projectModalDetails', content)
}