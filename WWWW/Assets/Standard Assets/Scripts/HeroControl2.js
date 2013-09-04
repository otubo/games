@script RequireComponent(AudioSource)
#pragma strict

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;

private var vertSpeed : float = 0;
private var moveDirection : Vector3 = Vector3.zero;

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
    // calculate the horizontal direction to move
    moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, 0);
    // rotate it to the player orientation
    moveDirection = transform.TransformDirection(moveDirection);
    moveDirection *= speed; // apply the horizontal speed
    if (controller.isGrounded){
        vertSpeed = 0; // if grounded the vertical speed is 0...
        if (Input.GetButton ("Jump")){ // unless it jumps
            audio.Play();
            vertSpeed = jumpSpeed;
        }
    }

    // gravity increases the down speed as a function of time
    vertSpeed -= gravity * Time.deltaTime;
    // add vertical speed to the moveDirection
    moveDirection.y = vertSpeed;
    // and move the controller in the direction defined
    controller.Move(moveDirection * Time.deltaTime);
}
