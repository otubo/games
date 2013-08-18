var speed : float = 6.0;
var jumpSpeed : float = 1.0;
var gravity : float = 1.1;

function Update () {
	if (Input.GetAxis("Horizontal")){
		transform.Translate(Vector3(-Input.GetAxis("Horizontal") * speed * Time.deltaTime, 0, 0));
	}
	
	if (Input.GetKey(KeyCode.Space)){
		transform.Translate(0, 0.1, 0);
		//transform.Translate(0, -gravity, 0);		
	}
	
	
	//if (Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow)){
		//renderer.material.mainTexture = Resources.Load("My Assets/Textures/hero_moving1.png", Texture2D);
		
	//}
}