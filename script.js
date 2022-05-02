

function check(){
    this.classList.toggle("tasksChecked");
}

document.querySelectorAll(".divTasks").forEach(tasks => {
    tasks.addEventListener("click", check);
});

document.querySelectorAll(".divTasks>svg").forEach(cross => {
    cross.addEventListener("click", remove);
});

function remove() {
    this.parentElement.remove();
}


function preventSubmit(event){
    event.preventDefault();
    let demande = document.querySelector('.tasks>form>input').value; 
    document.querySelector('.tasks>div').innerHTML += `<div class="divTasks">${demande} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e21616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>`;
    document.querySelectorAll(".divTasks").forEach(tasks => {
        tasks.addEventListener("click", check);
    });

    document.querySelectorAll(".divTasks>svg").forEach(cross => {
        cross.addEventListener("click", remove);
    });

    document.querySelector('.tasks>form>input').value = '';
    
}





document.querySelector('.tasks>form').addEventListener("submit", preventSubmit);



