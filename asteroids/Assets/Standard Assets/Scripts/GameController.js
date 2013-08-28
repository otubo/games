var nave : GameObject;
var proximoLevel : int;
var display : int;

function start()
{
	display = 0;
}

function Update ()
{
	//Verificação da presença da nave no jogo
	if(!findNave())
	{
		print(11);
		placar.pontuacao = 0;
		display = 1;
		//Invoke("exitLevel",1);
	}
	//Verificação da presença dos asteroids no jogo
	if (!findAsteroid())
	{
		Invoke("nextLevel",1);
	}
}
//Função que verifica a presença dos asteroids no jogo
function findAsteroid()
{
	return GameObject.FindGameObjectWithTag("Asteroid");
}
//Função que verifica a presença da nave no jogo
function findNave()
{
	return GameObject.FindGameObjectWithTag("Nave");
}
//Função que faz com que o jogo vá para o próximo level
function nextLevel()
{
	if (!GameObject.FindGameObjectWithTag("Asteroid"))
	{
		Application.LoadLevel(proximoLevel);	
	}
}
//Função que faz com que o jogo vá para a tela de entrada
function exitLevel()
{
	if (!GameObject.FindGameObjectWithTag("Nave"))
	{
		Application.LoadLevel("intro");
	}
}

function OnGUI()
{
	if(display){
		// Make a background box
		GUI.Box (Rect (10,10,100,90), "you died!");

		// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
		if (GUI.Button (Rect (20,40,80,20), "retry?")) {
			Application.LoadLevel (proximoLevel-1);
		}
	
		// Make the second button.
		if (GUI.Button (Rect (20,70,80,20), "exit")) {
			Application.Quit();
		}
	}
}