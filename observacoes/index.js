const express = require ('express')
const app = express ()

//esquecer de chamar a função  Json
app.use(express.json())

//localhost:5000/lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {

})

//localhost:5000/lembretes/abcd/observacoes
app.get('/lembretes/:id/observacoes', (req, res) =>{

})

app.listen(5000, () => console.log('observações.porta 5000.'))