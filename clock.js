const clockContainer = document.querySelector(".js-clock"), //querySelector는 DOM의 첫번째를 가져온다.
 clockTitle = clockContainer.querySelector("h1"); //js-clock div 내부의 h1태그인 .js-title을 추출


 function getTime(){//시간을 가져오는 함수
     const date = new Date(); //현재 날짜 시간 정보를 생성한다.
     const minutes = date.getMinutes(); //분
     const hours = date.getHours(); //시
     const seconds = date.getSeconds(); //초
     clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
 }


function init(){
   getTime(); 
}

init(); 
