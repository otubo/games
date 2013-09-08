#pragma strict


function Start () {

}

function Update () {
    if (Input.GetKey(KeyCode.RightArrow)){
    	animation.Play("hero_rotation_front");
    }
    
    if (Input.GetKey(KeyCode.LeftArrow)){
    	animation.Play("hero_rotation_back");
    }
}