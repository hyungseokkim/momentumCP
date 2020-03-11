const clockContainer = document.querySelector(".js-clock"), //querySelector는 DOM의 첫번째를 가져온다.
 clockTitle = clockContainer.querySelector("h1"); //js-clock div 내부의 h1태그인 .js-title을 추출


 function getTime(){//시간을 가져오는 함수
     const date = new Date(); //현재 날짜 시간 정보를 생성한다.
     const minutes = date.getMinutes(); //분
     const hours = date.getHours(); //시
     const seconds = date.getSeconds(); //초
     //clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
     clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds
        }`;
        //? 는 if와 비슷함. : 기준으로 앞에는 true일 때, 뒤에는 false 일때 출력
 }


function init(){
   getTime();
   setInterval(getTime, 1000); //1초마다 새로고침
}

init(); 

