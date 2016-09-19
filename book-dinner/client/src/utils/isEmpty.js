export  function isEmpty(value){
  if (value === undefined) {
    return true;
  }
  var t;
  for (t in value)
      return false;
  return true;

}
