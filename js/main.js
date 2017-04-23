;(function () {

	function MibileValues () {
		var open = false;
		
		this.changeValues = function (event) {
			if (!open) {
				$("#nav").addClass("navMobile");
				$(".mainMenu__ul-menu__btn").each(function () {
					$(this).addClass("nav__itemMobile");	
				});
				
			}
			else{
				$("#nav").removeClass("navMobile");
				$(".mainMenu__ul-menu__btn").each(function () {
					$(this).removeClass("nav__itemMobile");
				});
				
			}


			open = !open;

		}
		
	}
	var v = new MibileValues();

	$('#mob__btn').click(v.changeValues);

























































})()