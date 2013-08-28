var asteroidFilho : GameObject;
var explosao : GameObject;
var tamanhoDaExplosao : float;
var velocidadeMaxima : float;
var ponto_por_asteroide : int;

function Update () {
		//Verifica se a velocidade do asteroide está acima da velocidade máxima
		if (this.rigidbody.velocity.magnitude > velocidadeMaxima)
		{
			//Diminui a velocidade do asteroide
			this.rigidbody.velocity = 0.95f*(this.rigidbody.velocity);
		}
	}
//Função que é executada quando algo colide no GameObject em questão
function OnCollisionEnter(collision : Collision)
	{
		//Verifica se o GameObject que colidiu é um tiro ou a nave
		if(collision.gameObject.CompareTag("Tiro") || collision.gameObject.CompareTag("Nave"))
		// tambem pode ser collision.gameObject.tag (ou .name)
		{
				
				if (collision.gameObject.CompareTag("Tiro")) {
					placar.pontuacao += ponto_por_asteroide;
				}

				//Destroi o objeto que colidiu nele
				DestroyObject(collision.gameObject);
				//Destroi o asteroid
				DestroyObject(gameObject);
				//Define a posicao da explosão acima da posicao do asteroid destruido
				var posicaoDaExplosao : Vector3;
				posicaoDaExplosao = transform.position - (Vector3(0,0,0.5));
				//Cria a explosão
				var instancia : GameObject;
				instancia = Instantiate(explosao, posicaoDaExplosao ,Quaternion.identity);
				//Define o tamanho da explosão
				instancia.GetComponent("Detonator").size = tamanhoDaExplosao;
				//Define a direção em que os asteroids filhos irão caminhar
				var direcaoDoFilho : Vector3;
				direcaoDoFilho = collision.transform.right;
			if(asteroidFilho)
			{	
				//Cria o primeiro asteroid filho com a direção positiva (-0.5f*direcaoDoFilho)
				var filho : GameObject;
				filho = Instantiate(asteroidFilho,this.transform.position + 0.5f*direcaoDoFilho ,Quaternion.identity);
				//Define que o filho ira caminhar na direção positiva
				filho.rigidbody.velocity = direcaoDoFilho;
				//Cria o primeiro asteroid filho com a direção negativa (-0.5f*direcaoDoFilho)
				filho =  Instantiate(asteroidFilho,this.transform.position - 0.5f*direcaoDoFilho ,Quaternion.identity);
				//Define que o filho ira caminhar na direção negativa
				filho.rigidbody.velocity = -direcaoDoFilho;
			}
		}
	}