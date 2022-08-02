const estudante = {
    nome: 'Pedro', 
    sobrenome: 'Henrique', 
    numeroDaMatricula: 4520322, 
    notasDoSemestre:[8,9.5,10]
}

console.log('Objeto Estudante', estudante);


//adicionando uma nova propriedade ao objeto estudante

estudante.modulo = 'HTML Semântico'

console.log('Objeto Estudante com módulo', estudante);

//imprimindo informações do objeto estudante

console.log('Nome do Estudante:', estudante.nome);

console.log('Segunda Nota do semestre:', estudante.notasDoSemestre[1]);

console.log('Módulo Atual:', estudante.modulo)

//Fazendo Cópia do Objeto estudante

const copiaEstudante = {...estudante}

console.log('Cópia do Objeto Estudante:', copiaEstudante);

//Alterando o valor da propriedade Nome

copiaEstudante.nome = 'Astrodev'
console.log('Cópia com nome alterado', copiaEstudante);

//adicionando a nota 9 as notas do Semestre

// copiaEstudante.notasDoSemestre.push(9)
copiaEstudante.notasDoSemestre = [...copiaEstudante.notasDoSemestre,9]
console.log('Cópia com nova nota adicionada', copiaEstudante);

//alterando o valor da propriedade módulo

copiaEstudante.modulo = 'Flexbox e Grid'

console.log('Cópia com módulo alterado', copiaEstudante);


//criação do array estudantes Labenu

const estudantesLabenu = []
estudantesLabenu.push(estudante)
estudantesLabenu.push(copiaEstudante)

console.log('Array de Estudantes da Labenu', estudantesLabenu);

// EXERCÍCIO

//Parte 1

const carrinho = 
{nome: 'Pedro', 
formaDePagamento: 'PIX', 
endereco: 'Felixlândia-MG'
}

console.log('Carrinho de Compras', carrinho);

//Parte 2

carrinho.compras = [

{produto1: 'TV', 
valor: 2000, 
quantidade:2 },

{produto2:'PC',
valor: 4000,
quantidade: 1},

{produto3:'lampada inteligente',
valor: 70,
quantidade: 10},

]

//Parte 3

console.log('Quantidade de compras: ',carrinho.compras.length);

const carrinhoPresente = {...carrinho}
carrinhoPresente.nome = 'Nathalia'
carrinhoPresente.formaDePagamento = 'Cartão Presente'

console.log(carrinhoPresente);