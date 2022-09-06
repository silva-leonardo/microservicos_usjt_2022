const express = require ('express')
const app = express ()
//estamos aplicando middleware
app.use(express.json())

const lembretes = {}
let contador = 0

//post cadastrar um lembrete novo
//localhost: 4000/lembretes
// {texto: 'Fazer Café'}
app.get('/lembretes', (req, res) => {
    res.send(lembretes)

})


//get obter a lista de lembretes
//localhost: 4000/lembretes

app.post('/lembretes', (req, res) => {
    contador++
    const { texto } = req.body
    lembretes[contador] = {contador, texto}
    res.status(201).end()

})


app.listen(4000, () => console.log ('lembretes. Porta 4000'))