#pragma strict

function Start () {

}

function Update () {
    if (Input.GetKey(KeyCode.LeftArrow))
        transform.position.x -= 0.5;
    
    if (Input.GetKey(KeyCode.RightArrow))
    	transform.position.x += 0.5;
}