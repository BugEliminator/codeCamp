function 이메일출력() {
  const 이메일값 = document.getElementById("email").value
  console.log(이메일값)

  const 분리한이메일 = (이메일값.split("@"));
  const 이메일앞부분 = 분리한이메일[0]
  const 이메일뒷부분 = 분리한이메일[1]

  console.log(이메일앞부분)
  console.log(이메일뒷부분)
  
  const 뒤4개를자른이메일 = 이메일앞부분.slice(0,4)
  console.log(뒤4개를자른이메일)

  const 다시만든이메일앞부분 = 뒤4개를자른이메일 + "****"
  console.log(다시만든이메일앞부분)

  const 재생성한이메일 = `${다시만든이메일앞부분}@${이메일뒷부분}`
  console.log(재생성한이메일)
  alert(`회원가입을 축하합니다. 가입하신 이메일은 ${재생성한이메일}입니다.`)
}
