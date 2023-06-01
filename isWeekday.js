const myArray=["Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday","Sunday"]
function isWeekday(name)
{
  if(name==myArray[0])
  {
    return true;
  }else if(name==myArray[1])
  {
    return true;
  }else if(name==myArray[2])
  {
    return true;
  }else if(name==myArray[3])
  {
    return true;
  }else if(name==myArray[4])
  {
    return true;
  }else if(name==myArray[5])
  {
    return false;
  }else if(name==myArray[6])
  {
    return false;
  }else
  {
    return false
}
}
//console.log(isWeekday("Monday"))