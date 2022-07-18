class SlideStories {
    constructor(id){
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();
    }

    activeSlide(index){
        this.active = index;
        this.items.forEach(item => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.thumbItems.forEach(item => item.classList.remove('active'));
        this.thumbItems[index].classList.add('active');
        this.autoSlide();
    }

    prevSlide(){
        if (this.active > 0) {
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
        
    }
    nextSlide(){
        if (this.active < (this.items.length - 1)) {
            this.activeSlide(this.active + 1);
        } else {
            this.activeSlide(0);
        }
   
    }

    addNavigation(){
        const prevbtn = this.slide.querySelector('.slide-prev');
        const nextBtn = this.slide.querySelector('.slide-next');
        prevbtn.addEventListener('click', this.prevSlide);
        nextBtn.addEventListener('click', this.nextSlide);
    }

    addThumbItems(){
        this.items.forEach(()=> this.thumb.innerHTML += `<span></span>`);
        this.thumbItems = Array.from(this.thumb.children);

    }
    
    autoSlide(){
        clearTimeout(this.autoTimeout)
        this.autoTimeout = setTimeout(this.nextSlide, 5000);
    }

    init(){
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItems();
        this.activeSlide(0);
        this.addNavigation();
    }

}

new SlideStories("slide");