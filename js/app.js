const mediumBp = matchMedia('(min-width: 768px)'); 

const changeSize = mql => {
	if (mql.matches) {
		document.body.style.background = 'red'
	}else{
		document.body.style.background = 'yellow'
	}
}

mediumBp.addListener(changeSize);
changeSize(mediumBp);

//CSSOM
//DOM
