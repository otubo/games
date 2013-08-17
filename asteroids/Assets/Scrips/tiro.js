var velocidade : int;

function Start () {
	rigidbody.AddForce(velocidade * transform.forward);
}