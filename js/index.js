const a = parseInt(prompt('write a'));
const b = parseInt(prompt('write b'));
const c = parseInt(prompt('write c'));

function D(){
   return (b*b)-(4*a*c);
   
};
alert(D())
function result() {

   if (D() > 0) {
       const x1 = (-b + Math.sqrt(D())) / (2 * a);
       const x2 = (-b - Math.sqrt(D())) / (2 * a);
       return("x2 = " + x2 + ", x1 = " + x1);
   } else if (D() === 0) {
       const x1 = (-b) / (2 * a);
       return("x = " + x1);
   } else {
       return("Нет действительных корней");
   }

}
alert(result());
             