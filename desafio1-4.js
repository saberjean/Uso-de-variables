let n1 = parseInt(prompt("ingrese cantidad de días"));
p1=0 
p2=0
p3=0


if(n1<7){p3=n1,p2=0,p1=0}
else if (n1<365){p2=Math.trunc(n1/7),p3=((n1%7))}
else if (n1>=365){p1=Math.trunc(n1/365),p2=Math.trunc((n1-(p1*365))/7),p3=(n1-(p1*365)-(p2*7))}
//else if (n1>=7){p2=(n1/7)}
//else if (n1>0){n1=p3}

document.write(Math.trunc(p1)," Año ", Math.trunc(p2)," semanas ",Math.trunc(p3)," Días")
