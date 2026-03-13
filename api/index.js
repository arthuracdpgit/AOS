const express = require('express');
const app = express();

app.use(express.json());

// Random (1 a 100)
app.get('/random', (req, res) => {
  const num = Math.floor(Math.random() * 100) + 1;
  res.json({ numero: num });
});

// Dado (1 a 6)
app.get('/dado', (req, res) => {
  const dado = Math.floor(Math.random() * 6) + 1;
  res.json({ resultado: dado });
});

// Citacoes
const citacoesFamosas = [
  { autor: "Albert Einstein", citacao: "A imaginação é mais importante que o conhecimento." },
  { autor: "Isaac Newton", citacao: "Se vi mais longe, foi por estar sobre ombros de gigantes." },
  { autor: "Marie Curie", citacao: "Nada na vida deve ser temido, apenas compreendido." },
  { autor: "Charles Darwin", citacao: "Não é o mais forte que sobrevive, mas o que melhor se adapta." },
  { autor: "Stephen Hawking", citacao: "A inteligência é a capacidade de se adaptar à mudança." },
  { autor: "Galileu Galilei", citacao: "A matemática é o alfabeto com que Deus escreveu o mundo." },
  { autor: "Richard Feynman", citacao: "O que não posso criar, não entendo." },
  { autor: "Nikola Tesla", citacao: "O presente é deles; o futuro, pelo qual eu trabalhei, é meu." },
  { autor: "Ada Lovelace", citacao: "A imaginação é a faculdade da descoberta." },
  { autor: "Carl Sagan", citacao: "Somos feitos de poeira de estrelas." },
  { autor: "Rosalind Franklin", citacao: "A ciência e a vida cotidiana não podem e não devem ser separadas." },
  { autor: "Louis Pasteur", citacao: "A sorte favorece a mente preparada." },
  { autor: "Thomas Edison", citacao: "Gênio é 1% inspiração e 99% transpiração." },
  { autor: "Jane Goodall", citacao: "O que você faz faz diferença, e você tem que decidir que tipo de diferença quer fazer." },
  { autor: "Max Planck", citacao: "A ciência não pode resolver o mistério final da natureza." },
  { autor: "Niels Bohr", citacao: "Um especialista é alguém que cometeu todos os erros possíveis em um campo restrito." },
  { autor: "Werner Heisenberg", citacao: "O que observamos não é a natureza em si, mas a natureza exposta ao nosso método de questionamento." },
  { autor: "Rachel Carson", citacao: "Quanto mais claramente pudermos focar nossa atenção nas maravilhas do universo, menos gosto teremos pela destruição." },
  { autor: "Johannes Kepler", citacao: "Onde há matéria, há geometria." },
  { autor: "Edwin Hubble", citacao: "O universo é imenso e nós mal começamos a explorá-lo." },
  { autor: "James Clerk Maxwell", citacao: "A teoria energética da luz é a base de toda a física moderna." },
  { autor: "Michael Faraday", citacao: "Nada é bom demais para ser verdade, se estiver de acordo com as leis da natureza." },
  { autor: "Erwin Schrödinger", citacao: "A vida parece ser o comportamento ordenado e lícito da matéria." },
  { autor: "Enrico Fermi", citacao: "Há dois resultados possíveis: se o resultado confirmar a hipótese, você fez uma medição. Se não, você fez uma descoberta." },
  { autor: "Linus Pauling", citacao: "A melhor maneira de ter uma boa ideia é ter muitas ideias." },
  { autor: "Dmitri Mendeleev", citacao: "Não há nada de novo para ser descoberto na física agora." },
  { autor: "Gregor Mendel", citacao: "Minha hora ainda vai chegar." },
  { autor: "Katherine Johnson", citacao: "Sempre haverá algo novo para aprender." },
  { autor: "Alan Turing", citacao: "Podemos ver apenas uma curta distância à frente, mas há muito que precisa ser feito." },
  { autor: "Barbara McClintock", citacao: "Se você sabe que está no caminho certo, não importa o que os outros dizem." }
];

app.get('/citacoes', (req, res) => {
  const indice = Math.floor(Math.random() * citacoesFamosas.length);
  res.json(citacoesFamosas[indice]);
});

// Rota inicial para o Vercel não dar erro de "Not Found"
app.get('/', (req, res) => {
  res.send('API de Atividade 1 rodando! Use /random, /dado ou /citacoes.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));

module.exports = app;
