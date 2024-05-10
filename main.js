let btns = document.querySelectorAll(".btn");
let items = document.querySelectorAll('[data-category]');

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        let category = this.dataset.id;
        items.forEach(item => {
            let itemCategory = item.dataset.category;
            if (category === itemCategory) {
                console.log(itemCategory);
                item.classList.remove("hidden")
            }else{
                item.classList.add("hidden");
            }
        });
        btns.forEach(otherBtn => {
            if (otherBtn === btn) {
                otherBtn.classList.add("active");
            } else {
                otherBtn.classList.remove("active");
            }
        });
    })
});