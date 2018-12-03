window.isEmail = (emailToTest)=>{
  if(!(typeof emailToTest === 'string' || emailToTest instanceof String)){
    throw new Error("El correo a testear tiene que ser un string");
  }

  let arrobaCount = 0;
  let countBeforeArroba = 0;
  let pointCount = 0;
  for(let i = 0; i < emailToTest.length; i++){
    if(emailToTest.charAt(i) == '@'){
      arrobaCount++;
    }
    if(arrobaCount == 0){
      countBeforeArroba++;
    }

    if(arrobaCount == 1 && emailToTest.charAt(i) == '.'){
      pointCount++;
    }
  }
  if(arrobaCount != 1){
    return false;
  }

  if(countBeforeArroba < 1){
    return false;
  }

  if(pointCount < 1 || pointCount > 1){
    return false;
  }

  return true;
};

