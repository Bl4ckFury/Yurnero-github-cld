document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function
    () {
        document.querySelector("header").classList.toggle("open")
    })
})

const swiper = new Swiper('.swiper-container', {
    // Цикличность
    loop: true,

    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    a11y: {
        paginationBulletMessage: "Тут название слайда {{index}}",
    }
  });

  document.addEventListener('DOMContentLoaded', (e) => {
      document.getElementById('open-search-form').addEventListener('click', (e) => {
        document.getElementById('block-search').classList.add('block-search-show')
    })

    document.getElementById('block-search-close').addEventListener('click', (e) => {
      document.getElementById('block-search').classList.remove('block-search-show')
    })

    document.getElementById('block-search').addEventListener('submit', (e) => {
      e.preventDefault()
  })
})

new Accordion('.accordion-container');

let workBtn = document.querySelectorAll('.main__btn-work');
let workItem = document.querySelectorAll('.main__work-step');

workBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    workBtn.forEach(function(btn){ btn.classList.remove('main__btn-work--active')});
    e.currentTarget.classList.add('main__btn-work--active');

    workItem.forEach(function(element){ element.classList.remove('work-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work-active');
  })
})