// (function () {
	// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	// today = new Date(),
	// msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();
	// alert(msg);
// }());
// 
// (function (who, when){
	// console.log("I met"+who+" on "+when);
// }("Joe Black", new Date()));


// var o = {
	// message : ( function() {
		// var who = "me", what = "call";
		// return what + " " + who;
	// }()),
	// getMsg : function() {
		// return this.message;
	// }
// };
// // usage
// o.getMsg();
// o.message;




var obj = {
	value : 1,
	increment : function() {
		this.value += 1;
		return this;
	},
	add : function(v) {
		this.value += v;
		return this;
	},
	shout : function() {
		alert(this.value);
	}
};
// chain method calls
obj.increment().add(3).shout();
// 5
// as opposed to calling them one by one
obj.increment();
obj.add(3);
obj.shout();
// 5

