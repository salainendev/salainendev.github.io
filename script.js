const stable1=document.getElementById("table1")

const stable2=document.getElementById("table2")
const stable3=document.getElementById("table3")
const stable4=document.getElementById("table4")
const pageWidth = document.documentElement.scrollWidth
if (pageWidth < '770'){stable1.style.height="max-content"}
else{stable1.style.width='100%';
stable1.style.height='710px'
}
if (pageWidth <= '770'){stable2.style.height="max-content"}
else{stable2.style.width='100%';
stable2.style.height='710px'
}
if (pageWidth <= '770'){stable3.style.height="max-content"}
else{stable3.style.width='100%';
stable3.style.height='710px'
}
if (pageWidth <= '770'){stable4.style.height="max-content"}
else{stable4.style.width='100%';
stable4.style.height='710px'
}
console.log(pageWidth)
