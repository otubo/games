var nave : GameObject;
var proximoLevel : int;
function Update () {
	//Verificação da presença da nave no jogo
	if(!findNave())
	{
		Invoke("exitLevel",1);
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
		Application.LoadLevel("Entrance");
	}
}
