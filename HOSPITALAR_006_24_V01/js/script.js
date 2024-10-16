$('document').ready(function(){

	var l_fundo = document.getElementById('l_fundo');
	var l_popup_refs = document.getElementById('l_popup_refs');
	var l_popup = document.getElementById('l_popup');
	
	var btn_popup_refs = document.getElementById('btn_popup_refs');
	var btn_popup_refs_voltar = document.getElementById('btn_popup_refs_voltar');
	var btn_popup = document.getElementById('btn_popup');
	var btn_popup_voltar = document.getElementById('btn_popup_voltar');
	
	btn_popup_refs.addEventListener('click', function() {
		l_popup_refs.style.display = 'block';
		l_fundo.style.display = 'none';
	});
	
	btn_popup_refs_voltar.addEventListener('click',function() {
		l_popup_refs.style.display = 'none';
		l_fundo.style.display = 'block';
	});
	
	btn_popup.addEventListener('click',function() {
		l_popup.style.display = 'block';
		l_fundo.style.display = 'none';
	});
	
	btn_popup_voltar.addEventListener('click',function() {
		l_popup.style.display = 'none';
		l_fundo.style.display = 'block';
	});
	
});



//popups

		function switchPopUp() {
		var switchPopUp = document.getElementById('popUp');
		if (switchPopUp.style.opacity == 1) {
			switchPopUp.style.opacity = 0;
			setTimeout(function(){switchPopUp.style.display = 'none'},500);
			
		}
		else {
			switchPopUp.style.opacity = 1;
			switchPopUp.style.display = 'block';
			}
		}

		function switchPopUp1() {
		var switchPopUp1 = document.getElementById('popUp1');
		if (switchPopUp1.style.opacity == 1) {
			switchPopUp1.style.opacity = 0;
			setTimeout(function(){switchPopUp1.style.display = 'none'},500);
		}
		else {
			switchPopUp1.style.opacity = 1;
			switchPopUp1.style.display = 'block';
			}
		}

	
		function switchPopUp2() {
		var switchPopUp2 = document.getElementById('popUp2');
		var switchPopUp11 = document.getElementById('popUp11');
		var switchPopUp21 = document.getElementById('popUp21');			
			
		if (switchPopUp2.style.opacity == 1) {
			switchPopUp2.style.opacity = 0;
			setTimeout(function(){switchPopUp2.style.display = 'none'},500);
		}
		else {
			switchPopUp2.style.opacity = 1;
			switchPopUp2.style.display = 'block';
			switchPopUp11.style.opacity = 0;
			setTimeout(function(){switchPopUp11.style.display = 'none'},500);
			switchPopUp21.style.opacity = 0;
			setTimeout(function(){switchPopUp21.style.display = 'none'},500);			
			}
		}
		
		function switchPopUp3() {
		var switchPopUp3 = document.getElementById('popUp3');
		if (switchPopUp3.style.opacity == 1) {
			switchPopUp3.style.opacity = 0;
			setTimeout(function(){switchPopUp3.style.display = 'none'},500);
		}
		else {
			switchPopUp3.style.opacity = 1;
			switchPopUp3.style.display = 'block';
		
			}
		}

		function switchPopUp4() {
			var switchPopUp4 = document.getElementById('popUp4');
		if (switchPopUp4.style.opacity == 1) {
			switchPopUp4.style.opacity = 0;
			setTimeout(function(){switchPopUp4.style.display = 'none'},500);

		}
		else {
			switchPopUp4.style.opacity = 1;
			switchPopUp4.style.display = 'block';
		
			}
		}
		
		function switchPopUp5() {
		var switchPopUp5 = document.getElementById('popUp5');
		if (switchPopUp5.style.opacity == 1) {
			switchPopUp5.style.opacity = 0;
			setTimeout(function(){switchPopUp5.style.display = 'none'},500);
		
		}
		else {
			switchPopUp5.style.opacity = 1;
			switchPopUp5.style.display = 'block';
				
			}
		}

		function switchPopUp6() {
		var switchPopUp6 = document.getElementById('popUp6');
		if (switchPopUp6.style.opacity == 1) {
			switchPopUp6.style.opacity = 0;
			setTimeout(function(){switchPopUp6.style.display = 'none'},500);
		}
		else {
			switchPopUp6.style.opacity = 1;
			switchPopUp6.style.display = 'block';
			}
		}

		function switchPopUp7() {
		var switchPopUp7 = document.getElementById('popUp7');
		if (switchPopUp7.style.opacity == 1) {
			switchPopUp7.style.opacity = 0;
			setTimeout(function(){switchPopUp7.style.display = 'none'},500);
		}
		else {
			switchPopUp7.style.opacity = 1;
			switchPopUp7.style.display = 'block';
			}
		}

		function switchPopUp8() {
		var switchPopUp8 = document.getElementById('popUp8');
		if (switchPopUp8.style.opacity == 1) {
			switchPopUp8.style.opacity = 0;
			setTimeout(function(){switchPopUp8.style.display = 'none'},500);
		}
		else {
			switchPopUp8.style.opacity = 1;
			switchPopUp8.style.display = 'block';
			}
		}

		function switchPopUp9() {
		var switchPopUp9 = document.getElementById('popUp9');
		if (switchPopUp9.style.opacity == 1) {
			switchPopUp9.style.opacity = 0;
			setTimeout(function(){switchPopUp9.style.display = 'none'},500);
		}
		else {
			switchPopUp9.style.opacity = 1;
			switchPopUp9.style.display = 'block';
			}
		}

		function switchPopUp10() {
		var switchPopUp10 = document.getElementById('popUp10');
		if (switchPopUp10.style.opacity == 1) {
			switchPopUp10.style.opacity = 0;
			setTimeout(function(){switchPopUp10.style.display = 'none'},500);
		}
		else {
			switchPopUp10.style.opacity = 1;
			switchPopUp10.style.display = 'block';
			}
		}

		function switchPopUp11() {
		var switchPopUp12 = document.getElementById('popUp12');
		var switchPopUp11 = document.getElementById('popUp11');
		var switchPopUp2 = document.getElementById('popUp2');
			
		if (switchPopUp11.style.opacity == 1) {
			switchPopUp11.style.opacity = 0;
			setTimeout(function(){switchPopUp11.style.display = 'none'},500);
		}
		else {
			switchPopUp11.style.opacity = 1;
			switchPopUp11.style.display = 'block';
			switchPopUp2.style.opacity = 0;
			setTimeout(function(){switchPopUp2.style.display = 'none'},500);	
			switchPopUp12.style.opacity = 0;
			setTimeout(function(){switchPopUp12.style.display = 'none'},500);			
			
			
			}
		}

		function switchPopUp12() {
		var switchPopUp11 = document.getElementById('popUp11');
		var switchPopUp12 = document.getElementById('popUp12');
		var switchPopUp13 = document.getElementById('popUp13');			
		if (switchPopUp12.style.opacity == 1) {
			switchPopUp12.style.opacity = 0;
			setTimeout(function(){switchPopUp12.style.display = 'none'},500);
		}
		else {
			switchPopUp12.style.opacity = 1;
			switchPopUp12.style.display = 'block';
			switchPopUp13.style.opacity = 0;
			setTimeout(function(){switchPopUp13.style.display = 'none'},500);
			switchPopUp11.style.opacity = 0;
			setTimeout(function(){switchPopUp11.style.display = 'none'},500);			
			}
		}

		function switchPopUp13() {
		var switchPopUp13 = document.getElementById('popUp13');
		var switchPopUp14 = document.getElementById('popUp14');
		var switchPopUp12 = document.getElementById('popUp12');
			
			
		if (switchPopUp13.style.opacity == 1) {
			switchPopUp13.style.opacity = 0;
			setTimeout(function(){switchPopUp13.style.display = 'none'},500);
		}
		else {
			switchPopUp13.style.opacity = 1;
			switchPopUp13.style.display = 'block';
			switchPopUp12.style.opacity = 0;
			setTimeout(function(){switchPopUp12.style.display = 'none'},500);
			switchPopUp14.style.opacity = 0;
			setTimeout(function(){switchPopUp14.style.display = 'none'},500);				
			}
		}

		function switchPopUp14() {
		var switchPopUp14 = document.getElementById('popUp14');
		var switchPopUp15 = document.getElementById('popUp15');
		var switchPopUp13 = document.getElementById('popUp13');
			
			
		if (switchPopUp14.style.opacity == 1) {
			switchPopUp14.style.opacity = 0;
			setTimeout(function(){switchPopUp14.style.display = 'none'},500);
		}
		else {
			switchPopUp14.style.opacity = 1;
			switchPopUp14.style.display = 'block';
			switchPopUp15.style.opacity = 0;
			setTimeout(function(){switchPopUp15.style.display = 'none'},500);
			switchPopUp13.style.opacity = 0;
			setTimeout(function(){switchPopUp13.style.display = 'none'},500);				
			}
		}


		function switchPopUp15() {
		var switchPopUp15 = document.getElementById('popUp15');
		var switchPopUp14 = document.getElementById('popUp14');
		var switchPopUp16 = document.getElementById('popUp16');
			
			
		if (switchPopUp15.style.opacity == 1) {
			switchPopUp15.style.opacity = 0;
			setTimeout(function(){switchPopUp15.style.display = 'none'},500);
		}
		else {
			switchPopUp15.style.opacity = 1;
			switchPopUp15.style.display = 'block';
			switchPopUp14.style.opacity = 0;
			setTimeout(function(){switchPopUp14.style.display = 'none'},500);
			switchPopUp16.style.opacity = 0;
			setTimeout(function(){switchPopUp16.style.display = 'none'},500);				
			}
		}

		function switchPopUp16() {
		var switchPopUp16 = document.getElementById('popUp16');
		var switchPopUp17 = document.getElementById('popUp17');
		var switchPopUp15 = document.getElementById('popUp15');
			
		if (switchPopUp16.style.opacity == 1) {
			switchPopUp16.style.opacity = 0;
			setTimeout(function(){switchPopUp16.style.display = 'none'},500);
		}
		else {
			switchPopUp16.style.opacity = 1;
			switchPopUp16.style.display = 'block';
			switchPopUp15.style.opacity = 0;
			setTimeout(function(){switchPopUp15.style.display = 'none'},500);
			switchPopUp17.style.opacity = 0;
			setTimeout(function(){switchPopUp17.style.display = 'none'},500);			
			}
		}

		function switchPopUp17() {
		var switchPopUp17 = document.getElementById('popUp17');
		var switchPopUp16 = document.getElementById('popUp16');
		var switchPopUp18 = document.getElementById('popUp18');			
		if (switchPopUp17.style.opacity == 1) {
			switchPopUp17.style.opacity = 0;
			setTimeout(function(){switchPopUp17.style.display = 'none'},500);
		}
		else {
			switchPopUp17.style.opacity = 1;
			switchPopUp17.style.display = 'block';
			switchPopUp16.style.opacity = 0;
			setTimeout(function(){switchPopUp16.style.display = 'none'},500);
			switchPopUp18.style.opacity = 0;
			setTimeout(function(){switchPopUp18.style.display = 'none'},500);				
			}
		}

		function switchPopUp18() {
		var switchPopUp18 = document.getElementById('popUp18');
		var switchPopUp19 = document.getElementById('popUp19');
		var switchPopUp17 = document.getElementById('popUp17');
			
		if (switchPopUp18.style.opacity == 1) {
			switchPopUp18.style.opacity = 0;
			setTimeout(function(){switchPopUp18.style.display = 'none'},500);
		}
		else {
			switchPopUp18.style.opacity = 1;
			switchPopUp18.style.display = 'block';
			switchPopUp19.style.opacity = 0;
			setTimeout(function(){switchPopUp19.style.display = 'none'},500);
			switchPopUp17.style.opacity = 0;
			setTimeout(function(){switchPopUp17.style.display = 'none'},500);				
			}
		}

		function switchPopUp19() {
		var switchPopUp19 = document.getElementById('popUp19');
		var switchPopUp18 = document.getElementById('popUp18');
		var switchPopUp20 = document.getElementById('popUp20');			
		if (switchPopUp19.style.opacity == 1) {
			switchPopUp19.style.opacity = 0;
			setTimeout(function(){switchPopUp19.style.display = 'none'},500);
		}
		else {
			switchPopUp19.style.opacity = 1;
			switchPopUp19.style.display = 'block';
			switchPopUp18.style.opacity = 0;
			setTimeout(function(){switchPopUp18.style.display = 'none'},500);
			switchPopUp20.style.opacity = 0;
			setTimeout(function(){switchPopUp20.style.display = 'none'},500);				
			}
		}

		function switchPopUp20() {
		var switchPopUp20 = document.getElementById('popUp20');
		if (switchPopUp20.style.opacity == 1) {
			switchPopUp20.style.opacity = 0;
			setTimeout(function(){switchPopUp20.style.display = 'none'},500);
		}
		else {
			switchPopUp20.style.opacity = 1;
			switchPopUp20.style.display = 'block';
			}
		}


		function switchPopUp21() {
		var switchPopUp21 = document.getElementById('popUp21');
		var switchPopUp2 = document.getElementById('popUp2');			
		if (switchPopUp21.style.opacity == 1) {
			switchPopUp21.style.opacity = 0;
			setTimeout(function(){switchPopUp21.style.display = 'none'},500);
		}
		else {
			switchPopUp21.style.opacity = 1;
			switchPopUp21.style.display = 'block';
			switchPopUp2.style.opacity = 0;
			setTimeout(function(){switchPopUp2.style.display = 'none'},500);				
			}
		}
// End of code