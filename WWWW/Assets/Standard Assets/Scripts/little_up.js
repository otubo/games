#pragma strict

function Start () {

}

function Update () {
    if (Input.GetKey(KeyCode.RightArrow)){
    	animation.Play("little_up");
    }
    
    if (Input.GetKey(KeyCode.LeftArrow)){
    	animation.Play("little_up");
    }
}