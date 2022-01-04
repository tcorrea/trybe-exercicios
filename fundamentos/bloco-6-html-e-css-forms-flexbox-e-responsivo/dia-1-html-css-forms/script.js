/*
Criando um formulário de currículo.
Crie um arquivo HTML chamado form.html para o formulário.
Caso julgue necessário, crie estilos CSS para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo styles.css .
Crie também um arquivo script.js para seu código JavaScript .
Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:
Faça as validações inicialmente pelo HTML
Crie um <fieldset> para os seguintes dados pessoais:
Nome - Texto
Limite de 40 caracteres
Campo obrigatório
Email - Texto
Limite de 50 caracteres
Campo obrigatório
CPF - Texto
Limite de 11 caracteres
Campo obrigatório
Endereço - Texto
Limite de 200 caracteres
Campo obrigatório
Cidade - Texto
Limite de 28 caracteres
Campo obrigatório
Estado - Select
Todos os estados do Brasil
Utilize estruturas de repetição via JavaScript para gerar os <option>
Campo obrigatório
Tipo - Radio Button
Casa, Apartamento
Campo obrigatório
Crie outro <fieldset> para dados do seu último emprego
Resumo do currículo - TextArea
Limite de 1000 caracteres
Campo obrigatório
Cargo - Texto
Limite de 40 caracteres
Campo obrigatório
Descrição do cargo - Texto
Limite de 500 caracteres
Campo obrigatório
Data de início - Texto
Verificar o formato da data dd/mm/aaaa .
O dia deve ser > 0 e <= 31.
O mês deve ser > 0 e <= 12.
O ano não pode ser negativo.
Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
Campo obrigatório
Logo abaixo do formulário, crie um botão que:
Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

https://app.betrybe.com/course/fundamentals/html-e-css-forms-flexbox-e-responsivo/html-css-forms/156eddd8-90cb-48c5-a01d-d2cd3c7b39cc/exercicios/60bf47c5-e0b5-4d21-aa20-6f287784d6d7/criando-um-formulario-de-curriculo/3e1f7936-404f-4a96-be85-ac206eddb2e8?use_case=next_button
*/

// Data
const date = "10/01/1122";
const splitedDate = date.split("/");
if (date.length === 10 && splitedDate.length === 3) {
  if (
    parseInt(splitedDate[0]) > 0 &&
    parseInt(splitedDate[0]) <= 31 &&
    parseInt(splitedDate[1]) > 0 &&
    parseInt(splitedDate[1]) <= 12 &&
    parseInt(splitedDate[2]) > 0
  ) {
    console.log("Data ok: \n");
    console.log(date);
  } else {
    console.log("Erro: Data invalida 1");
  }
} else {
  console.log("Erro: Data invalida 2");
}
