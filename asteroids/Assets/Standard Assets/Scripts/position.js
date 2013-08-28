var MAXX : float;
var MAXY : float;

function Update () {
	var posicaoX : float;
	var posicaoY : float;
	posicaoX = transform.position.x;
	posicaoY = transform.position.y;
	
	if (posicaoX > MAXX)
		transform.position.x = -MAXX;

	if (posicaoX < -MAXX)
		transform.position.x = MAXX;

	if (posicaoY > MAXY)
		transform.position.y = -MAXY;
		
	if (posicaoY < -MAXY)
		transform.position.y = MAXX;
}