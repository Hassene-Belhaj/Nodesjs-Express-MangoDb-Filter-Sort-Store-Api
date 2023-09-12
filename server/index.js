const express = require('express');
const cors = require('cors');
const router = require('./Routes/route');
const connectDB = require('./config/Db');

require('dotenv').config();

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


const Start = async () => {
    try {
        await connectDB(process.env.DATABASE , console.log('connected to database')
            )
        app.listen(process.env.PORT || 3000 , ()=> {
            console.log('server is running');
        })
    } catch (error) {
        console.log(error);
    }
}

Start()



app.get('/' , (req ,res) => {
res.send("<h1>Store Api!</h1><a href='api/store/products'>products route</a>")
})

app.use('/api/store/products' , router)