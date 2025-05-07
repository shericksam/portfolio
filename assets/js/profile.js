$(document).ready(function () {
  // JSON embebido
  const data = {
    "about": {
      "title": "Who am I?",
      "location": "iOS Software Engineer Located In Mexico",
      "description": "I'm an iOS Developer with over 8 years of experience designing and building scalable, high-performance iPhone and iPad applications. Specialized in Swift, SwiftUI, and Combine, I thrive in modular architectures like MVVM and Clean Architecture. I have successfully led cross-functional initiatives such as migrating complex UI features from UIKit to SwiftUI. I'm passionate about clean code, continuous improvement, and delivering user-centric solutions while collaborating in agile and multicultural environments."
    },
    "personalInfo": {
      "email": "magnus_22_10@hotmail.com",
      "github": "https://github.com/shericksam",
      "linkedin": "https://www.linkedin.com/in/erick-guerrero-a38a3a129/"
    },
    "expertise": [
      {
        "icon": "ti-mobile",
        "title": "Mobile Development",
        "description": "Expert in building modern, scalable iOS apps using Swift, SwiftUI, and Combine."
      },
      {
        "icon": "ti-desktop",
        "title": "Web Development",
        "description": "Experience with Angular, Vue.js, and backend services using Node.js."
      },
      {
        "icon": "ti-settings",
        "title": "Back-end Development",
        "description": "Skilled in creating RESTful APIs and managing databases with MySQL and MongoDB."
      }
    ],
    "experience": [
      {
        "title": "iOS Developer at Globant",
        "date": "Aug 2022 – Present",
        "location": "Guadalajara, Jalisco, México",
        "description": "Led the migration of map-based features from UIKit to SwiftUI. Designed and implemented dynamic overlays including proximity zones and polygons. Worked across hotel, rental car, and vacation modules using Combine, async/await, and Apollo GraphQL. Promoted CI/CD practices with GitHub Actions and snapshot testing while collaborating closely with global cross-functional teams."
      },
      {
        "title": "iOS Developer at Walmart",
        "date": "Sep 2021 – Aug 2022",
        "location": "Guadalajara, Jalisco, México",
        "description": "Led mobile development efforts using UIKit, RxSwift, and Apollo GraphQL. Enhanced app performance and stability with unit testing, Firebase, and Google Analytics. Promoted clean architecture principles and team collaboration."
      },
      {
        "title": "iOS Developer at Anzen",
        "date": "Jun 2021 – Oct 2021",
        "location": "Guadalajara, Jalisco, México",
        "description": "Contributed to the development of a banking app using UIKit and Alamofire. Ensured secure communication through encryption, and conducted maintenance and bug fixing."
      },
      {
        "title": "iOS Developer at Lumston",
        "date": "Oct 2019 – Jun 2021",
        "location": "Guadalajara, Jalisco, México",
        "description": "Built iOS and Android apps using Swift, SwiftUI, and UIKit. Integrated Socket.io for real-time communication, Firebase for push notifications, and OpenPay/Conekta for payments. Managed backend systems with Node.js (AdonisJS), MySQL, and MongoDB, and contributed to web frontend using Angular and Vue.js."
      },
      {
        "title": "Mobile and Full Stack Developer at ICOMM",
        "date": "Jun 2017 – Oct 2019",
        "location": "Torreón, Coahuila, México",
        "description": "Developed iOS apps with UIKit, CoreData, and Maps integration. Managed social login via Facebook, Google, and Apple, and handled network layers using Alamofire."
      }
    ],
    "education": [
      {
        "date": "2017 - 2019",
        "degree": "B.S. in Systems Engineering",
        "school": "Universidad Tecnológica de Torreón"
      }
    ],
    "skills": [
      { "name": "Swift", "level": 97 },
      { "name": "SwiftUI", "level": 95 },
      { "name": "Combine", "level": 90 },
      { "name": "GraphQL (Apollo)", "level": 80 },
      { "name": "RxSwift", "level": 75 }
    ]
  };
  

  // Actualiza el contenido como antes
  $("#about h3 how").text(data.about.title);
  $("#about h5").text(data.about.location);
  $("#about p").text(data.about.description);

  const personalInfoList = $(".info.list-unstyled");
  personalInfoList.html(`
        <li><span>Email</span> : ${data.personalInfo.email}</li>
    `);

  const socialIcons = $(".social-icons.pt-3");
  socialIcons.html(`
        <li class="social-item"><a class="social-link" href="${data.personalInfo.github}"><i class="ti-github" aria-hidden="true"></i></a></li>
        <li class="social-item"><a class="social-link" href="${data.personalInfo.linkedin}"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
    `);

  const expertiseSection = $(".about-card .row");
  expertiseSection.each(function (index) {
    if (data.expertise[index]) {
      $(this).find("i").attr("class", `${data.expertise[index].icon} icon-lg`);
      $(this).find("h6").text(data.expertise[index].title);
      $(this).find("p").text(data.expertise[index].description);
    }
  });

  const experienceCard = $("#resume .card-body").first();
  experienceCard.html(
    data.experience
      .map(
        (exp) => `
        <h6 class="title text-danger">${exp.date}</h6>
        <p>${exp.title}</p>
        <p class="subtitle">${exp.location}</p>
        <p class="subtitle">${exp.description}</p>
        <hr>
    `
      )
      .join("")
  );

  const educationCard = $("#resume .col-md-6.col-lg-4:nth-child(2) .card-body");
  educationCard.html(
    data.education
      .map(
        (edu) => `
        <h6 class="title text-danger">${edu.date}</h6>
        <p>${edu.degree}</p>
        <p class="subtitle">${edu.school}</p>
    `
      )
      .join("")
  );

  const skillsCard = $(".card-body.pb-2.skills");
  skillsCard.html(
    data.skills
      .map(
        (skill) => `
        <h6>${skill.name}</h6>
        <div class="progress mb-3">
            <div class="progress-bar bg-danger" role="progressbar" style="width: ${skill.level}%" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    `
      )
      .join("")
  );
});
