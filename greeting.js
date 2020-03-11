const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
/* localStorage를 이용할 것이다. */
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItemm(USER_LS, text);

}

function handleSubmit(event){
    event.preventDefault(); //기본동작을 막음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    console.log(currentValue);

}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForName();
        //유저가 없는 경우
    }else{
        //유저가 있는 경우
        paintGreeting(currentUser);
    }

}

function init(){
    loadName();
}

init();