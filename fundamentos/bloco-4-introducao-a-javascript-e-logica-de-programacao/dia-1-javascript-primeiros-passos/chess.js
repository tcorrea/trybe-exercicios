const pieces = ["Pawn", "Bishop", "Knight", "Rook", "Queen", "King"];

//FIXME: Programa errado
// https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-primeiros-passos/33d74e1e-05b9-4ce8-86e3-623c96afe64d/exercicios/0759ae5d-6ad0-4d3c-81ea-2b56de69fb07/agora-a-pratica/118ae9a9-c1f9-4f61-a5cd-03338a960904?use_case=next_button
// Exercicio numero 6
function movement(piece) {
  switch (piece.toLowerCase()) {
    case "Pawn":
      return "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.";
      break;
    case "bishop":
      return "O bispo move-se ao longo da diagonal. Não pode pular outras peças.";
      break;
    case "knight":
      return "O movimento do cavalo é em forma de L";
      break;
    case "rook":
      return "A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.";
      break;
    case "queen":
      return "A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.";
      break;
    case "king":
      return "O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.";
      break;

    default:
      return "Erro. Peça invalida";
      break;
  }
}

console.log(movement(pieces[2]));
console.log(movement("KNIGHT"));
console.log(movement("Cavalo"));
