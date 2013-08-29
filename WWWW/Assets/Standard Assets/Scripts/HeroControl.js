@script RequireComponent(AudioSource)

var speed : float = 0.1;
var jumpSpeed : float = 0.4;
var gravity : float = 2.0;
private var jumping : boolean = false;

var scene_number : int;

var MAXX : float;
var MAXY : float;

function Start ()
{
	rigidbody.drag = 0;
	if (Physics.gravity != Vector3(0,-20,0))
		Physics.gravity = Vector3(0,-20,0);

	rigidbody.useGravity = true;
}

function OnCollisionEnter(collision : Collision){
	if (collision.gameObject.name == "floor"){
		jumping = false;
		//rigidbody.constraints = RigidbodyConstraints.FreezePositionY.
		//rigidbody.useGravity = false;
	}
	if (collision.gameObject.name == "wall"){
		rigidbody.velocity = Vector3(0,0,0);
	}
}

function Update () {

	var posicaoX : float;
	posicaoX = transform.position.x;
	
//	if (posicaoX > MAXX){
//		Application.LoadLevel(scene_number);
//	}

	if (Input.GetKey(KeyCode.RightArrow)){
		transform.position.x += speed;
		//rigidbody.AddForce(speed,0,0);
	}
	
	if (Input.GetKey(KeyCode.LeftArrow)){
		transform.position.x -= speed;
		//rigidbody.AddForce(-speed,0,0);
	}

	//if (Input.GetAxis("Horizontal")){
	//	transform.Translate(Vector3(Input.GetAxis("Horizontal") * speed * Time.deltaTime, 0, 0));
	//}
	
	if (Input.GetKeyDown(KeyCode.Space) && jumping == false){
		audio.Play();
		jumping = true;
    	//Physics.gravity *= -1;
    	//rigidbody.useGravity = true;
		rigidbody.velocity.y = -jumpSpeed * Physics.gravity.y;	
	}
}