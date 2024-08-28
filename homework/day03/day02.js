let intervalId; // 전역 변수로 선언

function 랜덤숫자와시간생성기() {
  let 랜덤숫자 = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
  document.querySelector('.CSS_사이드바_회원가입_인증번호').innerText = 랜덤숫자;

  let 시간 = 3;
  intervalId = setInterval(function() { // intervalId를 전역 변수에 할당
    const 분 = String(Math.floor(시간 / 60)).padStart(2,"0");
    const 초 = String(시간 % 60).padStart(2,"0");
    시간 = 시간 - 1;
    
    document.getElementById("남은시간").innerText = `${분}:${초}`;
    
    if (시간 < 0) { // 시간이 0이 되면 타이머를 자동으로 정지
      clearInterval(intervalId);
      document.getElementById('남은시간').textContent = ''; // 시간이 표시된 요소를 비움
    }
  }, 1000);
}
// 버튼자체를 지워버렸는데 인증완료 이미지가 생기면 remove지우고 .img대체하기
function 인증하기버튼() {
  clearInterval(intervalId); // 타이머 정지
  document.getElementById('남은시간').textContent = ''; // 시간이 표시된 요소를 비움
  document.getElementById('버튼').remove();
  document.querySelector('.인증확인하는곳').innerText = '인증완료';
}


const 나의날짜 = new Date()
// console.log(나의날짜.getFullYear()) 년도
// console.log(나의날짜.getMonth() + 1) 월
// console.log(나의날짜.getDate())  일
let 오늘날짜 = 나의날짜.getFullYear() + "-" +(나의날짜.getMonth() + 1) + "-" + 나의날짜.getDate() 
console.log(오늘날짜)

function 가입알림() {
  alert(`
  회원가입을 축하합니다.
  (가입일시 : ${오늘날짜})
  `)
  document.querySelector(".CSS_사이드바_왼쪽부분_가입멤버안내").remove()
  document.querySelector(".CSS_사이드바_왼쪽부분_가입하기버튼").remove()

  // 이미지 요소 생성
  const img = document.createElement('img');
  img.src = './assets/프로필이미지.png'; // 이미지 경로를 여기에 입력하세요

  // 텍스트 노드 생성
  const text = document.createTextNode('수강생1');

  // '가입버튼누르면생기는기능' 클래스가 있는 div 선택
  const targetDiv = document.querySelector('.가입버튼누르면생기는기능');

  // 이미지와 텍스트를 div에 추가
  targetDiv.appendChild(img);
  targetDiv.appendChild(text);
}



function 수강생인적사항() {
  const 이름 = document.getElementById("이름").value
  let 이메일 = document.getElementById("이메일").value
  let 비밀번호 = document.getElementById("비밀번호").value
  let 전화번호 = document.getElementById("전화번호").value
  const 자기소개 = document.getElementById("자기소개").value


  let 전화번호보안 = 전화번호.split("-")
  let 번호앞자리 = 전화번호보안[0]
  let 번호중간자리 = 전화번호보안[1]
  let 번호뒷자리 = 전화번호보안[2]

  let 별처리된번호 = `${번호앞자리} - **** - ${번호뒷자리}`

  if(전화번호.length === 0) {
    전화번호 = ""
  } else {
    전화번호 = 별처리된번호
  }

  const 비밀번호보안 = "****"

  console.log(전화번호보안)
  
  if(비밀번호.length === 0) {
    비밀번호 = ""
  } else {
    비밀번호 = 비밀번호보안
  }


  alert(`
  이름: ${이름}
  이메일: ${이메일}
  비밀번호: ${비밀번호}
  성별: 남성
  전화번호: ${전화번호}
  동의여부: Y
  자기소개: ${자기소개}
  (가입일시: ${오늘날짜})
  `)
}