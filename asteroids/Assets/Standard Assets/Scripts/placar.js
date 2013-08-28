#pragma strict

static var pontuacao : int;
var current_level : int;

function Start () {

}

function Update () {

}

function OnGUI()
{
	if (GameObject.FindGameObjectWithTag("Nave"))
		GUI.Box (Rect (10,10,150,20), "Level: " + current_level + " | score: " + pontuacao);
}