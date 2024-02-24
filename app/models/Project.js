export class Project{
  constructor(data){
    this.name = data.name
    this.projectType = data.projectType
    this.coverImg = data.coverImg
    this.slideImages = data.slideImages
    this.description = data.description
    this.client = data.client
    this.technologies = data.technologies
    this.projectDate = data.projectDate || new Date
    this.projectUrl = data.projectUrl
  }

  get typeIcon(){
    switch(this.projectType){
      case 'Games': return 'mdi-controller'
      case 'Apps': return 'mdi-xml'
      case 'Art': return 'mdi-palette'
      case '3D': return 'mdi-cube'
    }
  }
  get ProjectCard(){
    return `
    <div class="col-6 col-md-4 col-lg-3 p-1 p-md-2">
      <div onclick="app.ProjectsController.openProjectDetails('${this.name}')" class="portfolio-img" data-bs-toggle="modal" data-bs-target="#projectModal"
        style="background-image: url('${this.coverImg}');">
        <div class="portfolio-img-overlay">
          <i class="mdi icons text-main-color ${this.typeIcon}"></i>
          <p class="fs-5 fw-semibold">${this.name}</p>
          <p>${this.projectType}</p>
        </div>
      </div>
    </div>
    `
  }

  get ProjectDetails(){
    return `
    <div class="col-12 col-md-6">
      <div id="carouselIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <div class="px-1">
            <button class="active carousel-indicator" type="button" data-bs-target="#carouselIndicators"
              data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
          </div>
          <div class="px-1">
            <button class="carousel-indicator" type="button" data-bs-target="#carouselIndicators"
              data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div class="px-1">
            <button class="carousel-indicator" type="button" data-bs-target="#carouselIndicators"
              data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="${this.slideImages[0]}"
              class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img
              src="${this.slideImages[1]}"
              class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img
              src="${this.slideImages[2]}"
              class="d-block w-100">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- !SECTION CAROUSEL -->
    <div class="col-12 col-md-6 px-md-4">
      <div class="pt-4 pt-md-0">
        <p class="fs-5 fw-semibold">Project Info:</p>
        <p>${this.description}</p>
      </div>
      <div class="pt-4">
        <p class="fs-5 fw-semibold">Project Details:</p>
        <p class="separation-line py-2">
          <span class="fw-semibold">Client:</span> ${this.client}
        </p>
        <p class="separation-line py-2">
          <span class="fw-semibold">Technologies:</span> ${this.technologies}
        </p>
        <p class="separation-line py-2">
          <span class="fw-semibold">Industry:</span> ${this.projectType}
        </p>
        <p class="separation-line py-2">
          <span class="fw-semibold">Date:</span> ${this.projectDate}
        </p>
        <p class="separation-line py-2">
          <span class="fw-semibold pe-2">URL:</span>
          <a class="btn btn-dark text-lowercase">${this.projectUrl}</a>
        </p>
      </div>
    </div>
    `
  }

}