const books = require('./data/books.json');  //data de los books
const express = require('express');   // data de librería express con la que crear un servidor web.
var app = express();
app.use(express.json());   // 
const port = 3000;  // declramos un puerto para el local


//* crear request de todos los datos de json
app.get('/allbooks', (req, res) => {
        res.status(200).json(books)
})

app.get ('/allbooks/001', (req, res) =>{
        res.status(200).json(books[0])
})

app.get('/allbooks/last', (req, res) =>{
        res.status(200).json(books[books.length-1])
})

app.get ('/allbooks/middle', (req, res)=> {
        res.status(200).json(books[(books.length)/2])
})

app.get(`/author/dante-alighieri`, (req, res)=>{
        // res.status(200).json(books[2].title);
        
        for (let i = 0; i < books.length; i++){
                if(books[i].author === 'Dante Alighieri'){
                        res.status(200).json(books[i].title);
                }
        }

//         let authorUrl = [];
//     for (let i = 0; i < books.length; i++) {
//         authorUrl.push(books[i].author.toLowerCase);
      
//         authorUrl[i].replaceAll(' ', '-');
//         if(authorUrl[i] === 'dante-alighieri'){
//                 res.status(200).json(books[i].title);
//         }
//     }
    
}) 

app.get(`/country/charles-dickens`, (req, res)=> {
        for (let i = 0; i < books.length; i++){
                if(books[i].author === 'Charles Dickens'){
                        res.status(200).json(books[i].country);
                }
        }
})


app.get(`/year&pages/cervantes`, (req, res)=> {
        for (let i = 0; i < books.length; i++){
                if(books[i].author === 'Miguel de Cervantes'){
                        res.status(200).json({"pages": books[i].pages,
                        "year": books[i].year});
                }
        }
})



app.get(`/country/count/spain`, (req, res)=> {
        let booksSpain = [];
        for (let i = 0; i < books.length; i++){
                if(books[i].country === 'Spain'){
                        booksSpain.push(books[i].title)
                }
        }
        res.status(200).json(booksSpain);
})

app.get(`/country/at-least/germany`, (req, res)=> {
        let booksGermany = 0;
        for (let i = 0; i < books.length; i++){
                if(books[i].country === 'Germany'){
                        booksGermany++
                }
        }
        if (booksGermany== 0){
                res.status(404).send('Not found any German book')
        }
})


app.get(`/pages/all-greater/200`, (req, res)=> {
        let two_hundreds = [];
        for (let i = 0; i < books.length; i++){
                if(books[i].pages >= 200){
                        two_hundreds.push(books[i].title)
                }
        }
        res.status(200).json(two_hundreds)
})


/**
 Con esta función ponemos al servidor a escuchar todas las peticiones entrantes, siempre que sean por el puerto especificado en la línea 8
 */
app.listen(port, () => console.info(`> listening at ${port}`))