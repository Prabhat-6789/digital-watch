function digitalClock()
{
    var d=new Date();
    var x=document.getElementById("time");
    var h=addZero(d.getHours());
    var m=addZero(d.getMinutes());
    var s=addZero(d.getSeconds());
   // if(h>=0&&h<12)
    if(h>=12)
    {
        if(h>12)
        h=h-12;
        else if(h==0)
        h=12;
        x.innerHTML= h+":"+m+":"+s+"PM";
    }

    else
    {
        if(h==0)
        {
            h=12;
        }
        x.innerHTML= h+":"+m+":"+s+"AM";
    }


    var t=setTimeout(digitalClock,1000);

}
function addZero(i)
{
    if(i<10)
    i="0"+i;
    return i;
}

//function p(h,m,s)
//{
 //   x.innerHtml=h+":"+m+":"+s;
//}