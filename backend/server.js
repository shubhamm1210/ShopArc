import express from 'express'
import 'dotenv/config'
import connectDB from './database/db.js'
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import cors from 'cors'
import cartRoute from './routes/cartRoute.js'
import orderRoute from './routes/orderRoute.js'
import morgan from 'morgan'




const app=express()


//middleware
app.use(express.json())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(morgan('dev'))

app.use('/api/v1/user',userRoute)
app.use('/api/v1/product',productRoute)
app.use('/api/v1/cart', cartRoute)

app.use('/api/v1/orders',orderRoute )



const port =process.env.PORT || 3000
app.listen(port,()=>{
    connectDB()
    console.log(`app is running at port:${port}`);
})