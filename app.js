import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const user = [
    {
        username: 'bobesponja',
        avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
    }
];

const tweets = [
    {
        username: "bobesponja",
        tweet: "Eu amo hambúrguer de siri!"
    }


];

app.post('/sign-up', (req,res) => {
    const { username, avatar } = req.body
    const dataUser = (username,avatar)
    user.push(dataUser)
    res.send("OK")
})

app.post('/tweets', (req,res) => {
    const { username, tweet } = req.body
    const newTweet = (username,tweet)

    if(user.find((u) => u.username === username)){
        tweets.push(newTweet)
        res.send("OK")
    } else {
        res.send("UNAUTHORIZED")
    }
    
})

app.get('/tweets', (req,res) => {
    
})


const PORT = 5000
app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`))
