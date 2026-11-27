$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Software Engineer",
      "Full-Stack Developer",
      "Backend Developer",
      "Python & Flask Developer",
      "Java Developer",
      "C++ Programmer",
      "API Architect",
      "Clean Code Enthusiast",
      "Tech Problem Solver"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Backend Development",
      "Software Engineering",
      "Python & Flask Development",
      "Java Programming",
      "C++ Development",
      "Building Scalable REST APIs",
      "Docker & CI/CD Automation",
      "Database Design (MySQL & PostgreSQL)",
      "Solving Real-World Problems",
      "Writing Clean, Maintainable Code"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  var typed = new Typed(".typing-3", {
    strings: [
      "Opponent is Smart",
      "Opponent is Evil",
      "You are competing with an AI!",
      "Win it if you can!",
      "One Mistake and you loose!",
      "Built in Java language"

    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  var typed = new Typed(".typing-4", {
    strings: [
      "Keep a track of your Daily Expenditures",
      "Full Stack Web Application",
      "Tech Stack: Angular, Node.js, Express.js",
      "Graphical Database: Neo 4j is used"

    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-5", {
    strings: [
      "Let's Calculate with the wonder of voice ",
      "Hey! I'm your Calci-Alexa",
      "I can do all the simple calculations",
      "By the help of your Voice!",
      "Tech Stack :Python"

    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  var typed = new Typed(".typing-6", {
    strings: [
      "An Online Test Conducting Web App",
      "With Dynamic nature of MCQ Questions",
      "Along with keeping a track of History",
      "Proper Login Authentication is there",
      "Teck stack: Django"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  var typed = new Typed(".typing-7", {
    strings: [
      "I am a Syntax Analyzer of",
      "Java Exception Handling code",
      "I followed all standard rules of Java",
      "Tech stack:Lex,Yacc"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  var typed = new Typed(".certificate", {
    strings: [
      "Certified",
      "ClickMe!",

    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
