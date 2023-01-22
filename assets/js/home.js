const div_category = document.getElementById('div-category');
const category_List = document.getElementById('category-list');
const arrow = document.querySelector('#div-category i');
var category_text = document.getElementById('category-text');
var options = document.getElementsByClassName('options')

div_category.addEventListener('click', () => {
    category_List.classList.toggle('hide');
    arrow.classList.toggle('rotate');
})

for(option of options){
    option.onclick = function(){
        category_text.value = this.textContent;
        category_List.classList.toggle('hide');
        arrow.classList.toggle('rotate');
    }
}

