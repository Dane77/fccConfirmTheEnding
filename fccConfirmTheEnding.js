function confirmEnding(str, target){
  var trgtlngth = target.length;
 
  var ans = str.substr(str.length - trgtlngth, trgtlngth);
  if (ans == target){
    return true;
    
  }
  return false;
}
