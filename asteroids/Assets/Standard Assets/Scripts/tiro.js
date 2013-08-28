var velocidade : int;
var MAXX : float;
var MAXY : float;

function Start () {
	rigidbody.AddForce(velocidade * transform.forward);
}

function Update () {
	var posicaoX : float;
	var posicaoY : float;
	posicaoX = transform.position.x;
	posicaoY = transform.position.y;
	
	if (posicaoX > MAXX){
		Destroy(this.gameObject);
		Debug.Log("saiu X max");
	}

	if (posicaoX < -MAXX){
		Destroy(this.gameObject);
		Debug.Log("saiu X min");
	}

	if (posicaoY > MAXY){
		Destroy(this.gameObject);
		Debug.Log("saiu Y max");
	}
		
	if (posicaoY < -MAXY){
		Destroy(this.gameObject);
		Debug.Log("saiu Y min");
	}
}