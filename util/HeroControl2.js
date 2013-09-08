@script RequireComponent(AudioSource)

var speed : float = 0.1;
var jumpSpeed : float = 0.4;
var my_gravity : int = 20;
var air_drag : float = 0.6;
var jump_limit : float = 0.5;
var y0 : float;
var y1 : float;
private var jumping : boolean = false;

var scene_number : int;

var MAXX : float;
var MAXY : float;

var speed3 : Vector3;

var moveDirection = Vector3.zero;
var characterController = CharacterController;

function Start ()
{
	//characterController = GetComponent(CharacterController);
	//rigidbody.drag = 0;
	//if (Physics.gravity != Vector3(0,my_gravity,0))
	//	Physics.gravity = Vector3(0,my_gravity,0);


	//rigidbody.useGravity = true;
}

function OnCollisionEnter(collision : Collision){
	//if (collision.gameObject.name == "floor"){
	//	jumping = false;
    //speed3.y = 0.0;
		//rigidbody.constraints = RigidbodyConstraints.FreezePositionY.
		//rigidbody.useGravity = false;
	//}
	
	//if (collision.gameObject.name == "wall"){
	//	rigidbody.velocity = Vector3(0,0,0);
	//}
}

function Update () {
    rigidbody.velocity = speed3;
    rigidbody.AddForce(0,my_gravity,0);

    var posicaoX : float;
    posicaoX = transform.position.x;

    //	if (posicaoX > MAXX){
    //		Application.LoadLevel(scene_number);
    //	}

    if (Input.GetKey(KeyCode.RightArrow)){
    	transform.position.x += 1;
        //constantForce.force.x = 15.0;
        //rigidbody.velocity = speed*transform.right;
    } else if (Input.GetKeyUp(KeyCode.RightArrow)) {
        //constantForce.force.x = 0;
        speed3.x = 0.0;
    }

    if (Input.GetKey(KeyCode.LeftArrow)){
        //constantForce.force.x = -15.0;
        //rigidbody.velocity = -speed*transform.right;
        transform.position.x -= 1;
        if (jumping){
            speed3.x = -speed;
        } else {
            speed3.x = -speed;
        }
        //rigidbody.AddForce(-speed,0,0);
    } else if (Input.GetKeyUp(KeyCode.LeftArrow)) {
        //constantForce.force.x = 0;
        speed3.x = 0.0;
    }

    //if (Input.GetAxis("Horizontal")){
    //	transform.Translate(Vector3(Input.GetAxis("Horizontal") * speed * Time.deltaTime, 0, 0));
    //}

    if (jumping == false){
        y0 = transform.position.y;
    } else {
        rigidbody.AddForce(my_gravity*transform.up);
        y1 = transform.position.y;
    }


    if (Input.GetKeyDown(KeyCode.Space) && jumping == false){
        audio.Play();
        jumping = true;
        speed3.y = -jumpSpeed * my_gravity;
        //Physics.gravity *= -1;
        //rigidbody.useGravity = true;
        //rigidbody.velocity.y = -jumpSpeed * my_gravity;
        //rigidbody.velocity.y = -jumpSpeed * Physics.gravity.y;
    } else {
        speed3.y = 0;
    }
    //if (y1 == (y0+jump_limit)) {
    //	print("AQUI	w " + y0+jump_limit);
    //	rigidbody.velocity.y = jumpSpeed * Physics.gravity.y;
    //}
    //print("y0+jumplimit: " + (y0 + jump_limit) + ", y0: " + y0 + ", y1: " + y1);

}