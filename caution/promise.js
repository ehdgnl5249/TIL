async function caution() {
  return false;
};
  
if (caution()) {
  console.log("출력되면 안됨");
}

console.log(caution() === true);