//Testimonial Data
const testimonials = [
  {
    name: "Kim Jennie",
    job: "CEO Pink.me",
    image: "jn.jpeg",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
  },
  {
    name: "Kim Jisoo",
    job: "Developer Pink.me",
    image: "js.jpg",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    name: "Lalisa Manoban",
    job: "UI/UX Designer Pink.me",
    image: "ls.jpg",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    name: "Park Chaeyong",
    job: "CTO Pink.me",
    image: "rs.jpg",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    name: "Shin Ryujin",
    job: "Illustrator Ityzie.co",
    image: "ru.jpg",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    name: "Suzy Zuzanty",
    job: "Content Creator",
    image: "sz.jpeg",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];

//Current Slide
let currentSlide = 0;
//Total Slides
let totalSlide = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  currentSlide = (totalSlide + currentSlide + 1) % totalSlide;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  currentSlide = (totalSlide + currentSlide - 1) % totalSlide;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[currentSlide].testimonial}</p>
    <img src=${testimonials[currentSlide].image}>
    <h3>${testimonials[currentSlide].name}</h3>
    <h6>${testimonials[currentSlide].job}</h6>
  `;
};
window.onload = displayTestimonial;
