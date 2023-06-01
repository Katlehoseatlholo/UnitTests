
function isWeekday(name)
{
  if(name==myArray[0])
  {
    return true;
  }else if(name=="Monday")
  {
    return true;
  }else if(name=="Tuesday")
  {
    return true;
  }else if(name==  "Wednesday")
  {
    return true;
  }else if(name=="Thursday")
  {
    return true;
  }else if(name=="Friday")
  {
    return false;
  }else if(name=="Saturday")
  {
    return false;
  }else
  {
    return false
}
}
//console.log(isWeekday("Monday"))