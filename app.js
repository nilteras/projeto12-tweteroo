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
    const dataUser = (req.body)
    user.push(dataUser)
    res.send("OK")
})

app.post('/tweets', (req,res) => {
    const newTweet = (req.body)

    if(user.find((u) => u.username === newTweet.username)){
        tweets.push(newTweet)
        res.send("OK")
    } else {
        res.send("UNAUTHORIZED")
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
