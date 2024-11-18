var app = require('./app/config/server'); 
//COMENTAR 
/*var rotaHome = require('./app/routes/home'); 
//rotaHome(app); 
var rotaAdicionarUsuario = require('./app/routes/adicionar_usuario'); 
rotaAdicionarUsuario(app); 
var rotaHistoria = require('./app/routes/historia'); // só esta definindo 
rotaHistoria(app); // está executando 
‘Fatec Sorocaba – Análise e Desenvolvimento de Sistemas - Disciplina: PWEB 
71 
var rotaCursos = require('./app/routes/cursos'); // só esta definindo 
rotaCursos(app); // está executando 
var rotaProfessores = require('./app/routes/professores'); // só esta definindo 
rotaProfessores(app); // está executando 
*/ 
app.listen(3000, function(){ 
 console.log("servidor iniciado"); 
}); 