var asteroide : GameObject;
var larguraDaTela : float;
var alturaDaTela : float;
var numeroDeAsteroids : int;
var velocidadeDoAsteroide : float;
function Start () {
		var i : int;
		//Inicialização dos asteroids
		for ( i=1;i<=numeroDeAsteroids;i++)
		{	
			this.inicializaAsteroids();
		}
}
//Função que inicializa um asteroid na tela
function inicializaAsteroids () {
		var instance : GameObject;
		var posicaoInicial : Vector3;
		var aleatorioX : float;
		var aleatorioY : float;
		//Definição da posicação aleatória do asteroid
		aleatorioX = larguraDaTela*(Random.value-0.5f);
		aleatorioY = alturaDaTela*(Random.value-0.5f);
		aleatorioX= aleatorioX + Mathf.Sign(aleatorioX)*larguraDaTela/3;
		aleatorioY= aleatorioY + Mathf.Sign(aleatorioY)*alturaDaTela/3;
		posicaoInicial = Vector3(aleatorioX ,aleatorioY, 0);
		//Criação do asteroid
		instance = Instantiate(asteroide,posicaoInicial,Quaternion.identity);
		//Adição de velocidade ao asteroid
		instance.rigidbody.velocity = velocidadeDoAsteroide*Vector3.Normalize(Vector3((Random.value-0.5f),(Random.value-0.5f),0));
		//Restrição em relação à posição do asteroids
		instance.rigidbody.constraints = RigidbodyConstraints.FreezePositionZ;
}