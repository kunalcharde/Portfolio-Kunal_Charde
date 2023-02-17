// Name Animation
var options = {
  strings: ["Kunal Charde", "Front-End Developer", "React Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
};
var typed = new Typed(".typing", options);

//---- Responsive Side Menu bar Handeling
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}



// Skills Array of Object
const  Skill_Array = [
    {
       skill : "JavaScript",
       percentage :80
    },
    {
       skill : "React",
       percentage :75,
    },
    {
       skill : "HTML",
       percentage :70,
    },
    {
       skill : "CSS",
       percentage :70,
    },
    {
       skill : "Java",
       percentage :60,
    },
    {
       skill : "MUI",
       percentage :50,
    },
    {
       skill : "FireBase",
       percentage :50,
    },
    {
       skill : "Redux",
       percentage :50,
    }
    ]
    
const myskills = document.querySelector(".skill-container")  
const ShowHtml = Skill_Array.map((item,index)=>{
    return `
    <div class="box">
        <h4>${item.skill}</h4>
        <span class="percentage">
            <div style= 'width: ${item.percentage}%'></div>
        </span>
    </div>
    `
})

myskills.innerHTML = ShowHtml.join("")

// Projects Array of object

const Projects =[
    {
       title: 'Workplace Webapp',
       desc : 'It is a Platform where user can post and search the job on the basies of candidate Login and Employer Login',
       deploy_url : 'https://github.com/kunalcharde/workplace',
       img_url : 'images/work-1.png'
    },
    {
      title: 'Todo Application',
      desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, magni eum commodi beatae,omnis laboriosam, recusandae nesciunt placeat debitis suscipit est vero sequi error iusto!',
      deploy_url : 'https://kunalcharde.github.io/TODO-APP/',
      img_url : 'images/work-3.png'
   },
    {
       title: 'Weather Application',
       desc : 'Token Based Login and Rendering Entered locations Weather Details',
       deploy_url : 'https://kunalcharde.github.io/Weather-APP/',
       img_url : 'images/work-2.png'
    },
    
    {
       title: 'Post Office Locator',
       desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, magni eum commodi beatae,omnis laboriosam, recusandae nesciunt placeat debitis suscipit est vero sequi error iusto!',
       deploy_url : 'https://kunalcharde.github.io/Post-office-Locator/',
       img_url : 'images/work-4.png'
    },
    {
       title: 'Todo Application',
       desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, magni eum commodi beatae,omnis laboriosam, recusandae nesciunt placeat debitis suscipit est vero sequi error iusto!',
       deploy_url : '#',
       img_url : 'images/work-6.png'
    },
    {
       title: 'Social Media App',
       desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, magni eum commodi beatae,omnis laboriosam, recusandae nesciunt placeat debitis suscipit est vero sequi error iusto!',
       deploy_url : '#',
       img_url : 'images/work-7.png'
    },
    {
       title: 'Social Media App',
       desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, magni eum commodi beatae,omnis laboriosam, recusandae nesciunt placeat debitis suscipit est vero sequi error iusto!',
       deploy_url : '#',
       img_url : 'images/work-7.png'
    },
    {
       title: 'Social Media App',
       desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, magni eum commodi beatae,omnis laboriosam, recusandae nesciunt placeat debitis suscipit est vero sequi error iusto!',
       deploy_url : '#',
       img_url : 'images/work-7.png'
    }
]

// Mapping projects in html
const  Project_container= document.querySelector(".work-list")
const project_Html = Projects.map((project) => {
    return `
     <div class="work">
            <img src="${project.img_url}">
        <div class="layer">
            <h3>${project.title}</h3>
            <p> ${project.desc}</p>
            <a href="${project.deploy_url}" target = "_blank"><i class="fa-regular fa-up-right-from-square"></i></a>
         </div>
    </div>
    `
})
Project_container.innerHTML = project_Html.join("")