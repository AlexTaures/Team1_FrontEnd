import '../styles/customization.css';

export default function Menu(){

    return( 
      <><div class="card">
        <div class="card-header">
          <h2>Amazon´t</h2>
        </div>
        <div class="card-body">
          <h6 class="card-title">Program based on what has been learned from React, Laravel, MySQL, Boostrap, CSS, HTML.</h6>
          <p class="card-text">The Functionality is to Manage, Add, Delete and Edit databases about
          an inventory of cleaning products.</p>
        </div>
      </div>
      <div class="card">
          <div class="card-body">
            <h2 class="Title">LINKS</h2>
            <a href="https://github.com/AlexTaures/Team1_FrontEnd" target={'_blank'} class="btn btn-primary mx-2">FrontEnd</a>
            <a href="https://github.com/AlexTaures/team1-finalProject" target={'_blank'} class="btn btn-primary mx-2">BackEnd</a>
      </div>
      <div>
            <h2 class="INT">Integrant´s</h2>
            <a href="https://github.com/WamBear" target={'_blank'} class="btn btn-primary my-2">github</a>
        <br></br>
            <a href="https://github.com/JonathanMena" target={'_blank'} class="btn btn-primary my-2">github</a>
        <br></br>
            <a href="https://github.com/AlexTaures" target={'_blank'} class="btn btn-primary my-2">github</a>
        <br></br>
            <a href="https://github.com/Brayan01LR" target={'_blank'} class="btn btn-primary my-2">github</a>
          </div>
        </div>
        <p class='wi'>William Mendrano</p>
        <br></br>
        <p class='ca'>Calvin Mena</p>
        <br></br>
        <p class='ale'>Alex Dias</p>
        <br></br>
        <p class='br'>Brayan Lopez</p>
        </>

    )
  }