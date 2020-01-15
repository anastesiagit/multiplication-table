row1.focus();
// var e;
// var g;

function show(){
    row1.focus();
     var o = "";
     o += "<table border = '1'><tr>";
     if(isNaN(row1.value) && row1.value <= 0){
        alert("Please Input a number that ranges from '1 to Infinity'");
       }
     for(i = 1; i <= row1.value; i++){
         o += "<td>";
             o += "<table border = 1; ><tr><td>";
         o+= "Table "+i;

    
         for (var d = 1; d <= column2.value; d++){
 
        o +=  "<tr><td>"+i +operation.value+d +"=" + eval(i +operation.value+d)+"</td></tr>";
            }
         if(isNaN(column2.value) || column2.value <= 0){
        alert("Please Input a number that ranges from '1 to Infinity'");
       } 
         
            o += "</td></tr></table>"
          }
            o += "</td></tr></table>"
            me.innerHTML = o;
  }
 function ret(){
   location.reload();
 }
