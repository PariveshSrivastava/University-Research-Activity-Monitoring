// Express server

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


app.use(cors())
app.use(express.json())

const port = 2000;
const secretKey = 'someCode123';

mongoose.connect('mongodb+srv://parivesh0:DGvLGqkxvpDzhVGn@cluster0.4gnsyxb.mongodb.net/?retryWrites=true&w=majority')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {

        // const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })

        res.json({
            status: 'user created'
        })

    } catch (err) {
        // console.log(err)
        res.json({
            status: 'Error', error: 'duplicate-email'
        })
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })

    if (!user) {
        return { status: 'error', error: 'Invalid login' }
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                status: true,
                name: user.name,
                email: user.email,
                userType: user.userRole,
            },
            secretKey
        )
        // let type;
        // if(userType === 'Admin')
        return res.json({ status: true, userType: user.userRole, user: token })
    } else {
        return res.json({ status: false, user: 'error' })
    }

})

// app.get('/auth', async (req, res) => {
// 	const token = req.headers['x-access-token']

// 	try {
// 		const decoded = jwt.verify(token, secretKey)
// 		const email = decoded.email
// 		const user = await User.findOne({ email: email })

// 		return res.json({ status: 'ok', userType:user.userRole })
// 	} catch (error) {
// 		res.json({ status: 'error', userType:null })
// 	}
// })

// const validateToken = (req, res, next) => {
//     const token = req.headers['x-access-token'];

//     jwt.verify(token, secretKey, (error, decoded) => {
//         if (error) {
//             return res.status(401).json({ error: 'Invalid token' });
//         }

//         req.user = decoded;
//         next();
//     });
// };

app.get('/research/table' ,(req, res) =>{
    res.send({page:'research table'})
})

app.post('/research/Info', (req, res) => {

//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, secretKey, (err, user) => {
//         if (err) return res.json({ status: 'error', error: 'Token Invalid' });

//         // get requested data
//         // ...

//         // send data back to client
//         res.json({ data });
//     });

//     res.json({ message: 'Access granted', user: req.user });
})

function authUser(req, res, next){
    if(req.user === null){
        res.json({ status: 'error', error: 'Login required'})
    }

    next()
}

app.post('/admin',authUser,(req,res) => {
    
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})