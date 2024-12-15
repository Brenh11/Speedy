// fantasia, aventura, drama, terror

// scooby doo, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// a viagem de chihiro, LIVRE, fantasia, aventura


// O Espetacular Homem-Aranha, 10, aventura, ação
// titanic, 12, romance, aventura
// Annabelle, 16, terror

let campoIdade;
let campoAventura;
let campoAção;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoAção = createCheckbox("Gosta de ação?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeAção = campoAção.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAventura, gostaDeAção);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAventura, gostaDeAção) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Annabelle";
    } else {
      if (idade >= 12) {
        if(gostaDeAventura || gostaDeAção) {
          return "Maze runner";          
        } else{
         return "Paddington";
        }
      } else {
        if (gostaDeAventura) {
          return "O espetacular Homem-aranha";
        } else {
          return "Titanic";
        }
      }
    }
  } else {
    if (gostaDeAventura) {
      return "A viagem de chihiro";
    } else {
      return "Scooby-doo";
    }
  }
}
