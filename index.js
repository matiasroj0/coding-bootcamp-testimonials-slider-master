const prevBtn = document.querySelectorAll(".prev-btn");
const nextBtn = document.querySelectorAll(".next-btn");

const testimonials = document.querySelectorAll(".testimonial");

let index = 0;

prevBtn.forEach(btn => {
    btn.addEventListener("click",()=>{
        testimonials[index].classList.remove('hidden');
        index = (index - 1 + testimonials.length) % testimonials.length;
        testimonials[index].classList.add('hidden');
    })    
});

nextBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        testimonials[index].classList.remove('hidden');
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add('hidden');
    })
})



