import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const user = [
 
];

const tweets = [
   


];

app.post('/sign-up', (req,res) => {

   // const { username, avatar } = req.body
    
    if(!req.body.username || !req.body.avatar){
        res.status(400).send("Todos os campos são obrigatórios!")
        return
    }

    if((typeof req.body.username) !== "string" || (typeof req.body.avatar) !== 'string'){
        res.status(400).send("Todos os campos são obrigatórios!")
        return
    }
   
    const dataUser = req.body
    user.push(dataUser)
    console.log(user)
    res.status(201).send("OK")
})

app.post('/tweets', (req,res) => {

  //  const { username, tweet } = req.body

    const newTweet = req.body

    if(!req.body.username || !req.body.tweet){
        res.status(400).send("Todos os campos são obrigatórios!")
        return
    }

    if((typeof req.body.username) !== "string" || (typeof req.body.tweet) !== 'string'){
        res.status(400).send("Todos os campos são obrigatórios!")
        return
    }

    if(user.find((u) => u.username === newTweet.username)){
        tweets.push(newTweet)
        console.log(newTweet)
        res.status(201).send("OK")
    } else {
        res.status(401).send("UNAUTHORIZED")
    }
    
})

app.get('/tweets', (req,res) => {

    let lastTweets = [...tweets].reverse().slice(0,10)
    let sendTweet = lastTweets.map( (t) => {
        const userAvatar = user.find((n) => n.username === t.username);
        return {
            username: t.username,
            tweet: t.tweet,
            avatar: userAvatar.avatar
        }
    })
    console.log(sendTweet)
    res.send(sendTweet)
})


const PORT = 5000
app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`))
