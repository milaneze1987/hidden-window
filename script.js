var aboutMe = '';

$(document).ready(function(){
		$(document).on('keydown', startCollect);
});

  //коли натиснутий ключовий символ 'z' запускається процес
function startCollect(e){
	if (e.key == 'z'){
		console.log('start collect');
		$(document).off('keydown', startCollect);
		$(document).on('keydown', collectSymbol);
	}
}
	// при введені пробілу чи 'esc' вихід з функції
function collectSymbol(e) {
	if (e.key == ' ' || e.key == 'Escape'){
		stopCollect();
	}
	else{
		//запуск модального вікна після вірно введеного кодового слова
		aboutMe += e.key;
		console.log(aboutMe);
		if (aboutMe == 'about'){
			$('#exampleModal').modal({
				show : true
			});
		}
	}
}
 //зупинка при введeні пробілу чи esc
function stopCollect() {
	console.log('stop');
	aboutMe = '';
	$(document).off('keydown', startCollect);
	$(document).on('keydown', collectSymbol);
}