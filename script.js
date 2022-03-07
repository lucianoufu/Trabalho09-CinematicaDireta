function coordenadasEorientacaoDOF(){
	const comprimentoEixo1 = document.getElementById('comprimento1').value;
	const comprimentoEixo2 = document.getElementById('comprimento2').value;
	const angulo1Grau = document.getElementById('angulo1').value;
	const angulo2Grau = document.getElementById('angulo2').value;

	const angulo1Rad = (angulo1Grau * Math.PI)/180;
	const angulo2Rad = (angulo2Grau * Math.PI)/180;

	const fi = angulo1Rad;
	const teta = angulo2Rad * (-1);
	let psi;
	if(Math.abs(teta) > Math.PI/2){
		psi = (Math.PI / 2) * (-1);
	}
	else{
		psi = Math.PI / 2;
	}

	x = parseFloat(comprimentoEixo2) * (Math.cos(angulo1Rad)) * (Math.cos(angulo2Rad));
	if(x < 0.00001){
		x = 0;
	}
	
	y = parseFloat(comprimentoEixo2) * (Math.sin(angulo1Rad)) * (Math.cos(angulo2Rad));
	if(y < 0.0001){
		y = 0;
	}

	z = (parseFloat(comprimentoEixo2) * (Math.sin(angulo2Rad))) + parseFloat(comprimentoEixo1);
	console.log('Comprimento 2: ' + parseFloat(comprimentoEixo2) + ', Seno: ' + Math.sin(angulo2Rad) + 'Angulo Rad: ' + angulo1Rad + ', Comprimento 1: ' +  parseFloat(comprimentoEixo1));
	if(z < 0.0001){
		z = 0;
	}

	//Mostra os resultados das coordenadas e dos ângulos
	console.log('x = ' + x.toString() + '\ny = ' + y.toString() + '\nz = ' + z.toString());
	console.log('FI = ' + fi.toString() + '\nTETA = ' + teta.toString() + '\nPSI = ' + psi.toString());
	console.log('FI = ' + radParaGrau(fi).toString() + 'º \nTETA = ' + radParaGrau(teta).toString() + 'º \nPSI = ' + radParaGrau(psi).toString() + 'º.');
	gerarGrafico(x, y, z);
}

function radParaGrau(rad){
	return (180 * rad) / Math.PI
}

function gerarGrafico(coordenadaX, coordenadaY, coordenadaZ){
	var data = [trace2];
	var layout = {margin: {
		l: 0,
		r: 0,
		b: 0,
		t: 0
	}};
	
    var trace2 = {
    	//x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
        x: [coordenadaX], y: [coordenadaY], z: [coordenadaZ],
    	mode: 'markers',
    	marker: {
    		color: 'rgb(0, 46, 41)',
    		size: 12,
    		symbol: 'circle',
    		line: {
    		color: 'rgb(0, 46, 41)',
    		width: 1},
    		opacity: 0.8},
    	type: 'scatter3d'};

    var data = [trace2];
    var layout = {margin: {
    	l: 0,
    	r: 0,
    	b: 0,
    	t: 0
    }};
    Plotly.newPlot('myChart', data, layout);
}