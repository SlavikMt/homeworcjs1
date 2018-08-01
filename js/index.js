const a = prompt('enter a');
const b = prompt('enter b');
const c = prompt('enter c');
const d = discriminator();

function discriminator() {
	var d=b*b-4*a*c;
	return d;
}
function quadrEqu() {
	if (d > 0) {
		var x1=(-b+Math.sqrt(d))/2*a;
        var x2 = (-b-Math.sqrt(d))/2*a;
        return ("x1="+x1+ " x2="+x2 );
	}
if(d==0){
	var x=-b/2*a;
	return('x='+x);
  }
}
var result = quadrEqu();
alert(result);



// if (a==0){

// 	alert('its not quadratic equation');
	
// }
//  else
// {
//    var d=b*b-4*a*c;
//    alert(d)};
//     if(d > 0 ) {
// var x1=(-b+Math.sqrt(d))/2*a;
// var x2 = (-b-Math.sqrt(d))/2*a;
//   alert(x1, x2);
//    }

//    else if (d==0){
//    	x=-b/2*a;
//      }
          	
  




// var discr = b*b-4*a*c;

// if (a==0){

// 	alert('its not quadratic equation');
	
// }
// else if (discr < 0 ) {
// 	"this equation has no ansver"
// }
// else if (discr == 0){
// 	x=-b/2*a;
// }
// else if (discr >0){
// 	var x1=(-b+Math.sqrt(discr))/2*a;
//  var x2 = (-b-Math.sqrt(discr))/2*a;
// alert(x1,x2);
// }
