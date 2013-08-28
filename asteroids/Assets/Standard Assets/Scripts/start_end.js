#pragma strict

var color1 : Color = Color(0.2, 0.3, 0.4, 0.5);
var color2 : Color = Color(0.3, 0.4, 0.5, 0.6);

var texto : GameObject;

function Start () {
	renderer.material.color = color1;
}

function Update () {

}

function OnMouseEnter(){
		renderer.material.color = color2;
}

function OnMouseExit(){
		renderer.material.color = color1;
}

function OnMouseDown()
{
	if (texto.name == "start") {
		Application.LoadLevel("level1");
	} else if (texto.name == "end") {
		Application.Quit();
	}
}