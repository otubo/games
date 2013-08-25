@script RequireComponent(AudioSource)

var speed : float = 6.0;
var jumpSpeed : float = 1.0;
var gravity : float = 1.1;
private var jumping : boolean = false;

var scene_number : int;

var MAXX : float;
var MAXY : float;

function Start ()
{
}

function OnCollisionEnter(collision : Collision){
	if(collision.gameObject.name == "floor"){
		jumping = false;
	}
}

function Update () {

	var posicaoX : float;
	posicaoX = transform.position.x;
	
	if (posicaoX > MAXX){
		Application.LoadLevel(scene_number);
	}

	if (Input.GetAxis("Horizontal")){
		transform.Translate(Vector3(Input.GetAxis("Horizontal") * speed * Time.deltaTime, 0, 0));
	}
	
	if (Input.GetKeyDown(KeyCode.Space) && jumping == false){
		audio.Play();
		jumping = true;
		rigidbody.velocity.y = -jumpSpeed * Physics.gravity.y;	
	}
}