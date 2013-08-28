var velocidade : float;
var velocidade_angular : float; 

var ThrustMainBack : GameObject;
var ThrustBackLeft : GameObject;
var ThrustBackRight : GameObject;
var ThrustFrontLeft : GameObject;
var ThrustFrontRight : GameObject;

var ThrustBackLeftNitro : GameObject;
var ThrustBackRightNitro : GameObject;

var ThrustFrontLeftFreio : GameObject;
var ThrustFrontRightFreio : GameObject;

var Tiro : GameObject;
var TiroPosicaoRotacao : GameObject;


function Update () {
	//NITRO
	if (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift)){
		if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.UpArrow)){
			Play(ThrustBackLeftNitro);
			Play(ThrustBackRightNitro);
			velocidade = 4;
		}
		
		if (Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.DownArrow)){
		}
		
	}else{
		if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.UpArrow)){
			Stop(ThrustBackLeftNitro);
			Stop(ThrustBackRightNitro);
			velocidade = 1;
		}
		
		if (Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.DownArrow)){
		}
	}

	if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.UpArrow)){
		Play(ThrustMainBack);
		rigidbody.AddForce(velocidade * transform.forward);
	}else{
		Stop(ThrustMainBack);
		Stop(ThrustBackLeftNitro);
		Stop(ThrustBackRightNitro);

	}

	if (Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.DownArrow)){
		Play(ThrustFrontRightFreio);
		Play(ThrustFrontLeftFreio);
		rigidbody.AddForce(-velocidade * transform.forward);
	}else{
		Stop(ThrustFrontRightFreio);
		Stop(ThrustFrontLeftFreio);
	}

	if (Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow)){
		Play(ThrustFrontRight);
		Play(ThrustBackLeft);
		transform.Rotate(0, velocidade_angular, 0);
	}else{
		Stop(ThrustFrontRight);
		Stop(ThrustBackLeft);	
	}

	if (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow)){
		Play(ThrustFrontLeft);
		Play(ThrustBackRight);
		transform.Rotate(0, -velocidade_angular, 0);
	}else{
		Stop(ThrustFrontLeft);
		Stop(ThrustBackRight);
	}

	if (Input.GetKey(KeyCode.Space)){
		Instantiate(Tiro, TiroPosicaoRotacao.transform.position, TiroPosicaoRotacao.transform.rotation);
	}

}

function Play(sistema : GameObject){
	var componente : ParticleSystem;
	componente = sistema.particleSystem;
	
	if (componente.isPlaying == false){
		componente.Play();
	}
}

function Stop(sistema : GameObject){
	var componente : ParticleSystem;
	componente = sistema.particleSystem;
	
	componente.Stop();
}