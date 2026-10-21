var i = 0;
var count = 0;
for (i = 0; i<= 50000; i++){
    if (i % 7 == 5 && i % 13 ==7 && i % 17 == 13){
       document.write("value = " + i + "<br>");
       count++;
       if (count == 5){
        document.write("count = " + count + "<br>");
            break;
        }
    }
}