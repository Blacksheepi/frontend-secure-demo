const express = require('express')
const router = express.Router()

const users = {
  a: {
    name: 'A',
    balance: 1000,
  },
  b: {
    name: 'B',
    balance: 1000,
  },
  other: {
    name: 'other',
    balance: 1000,
  },
}

/* GET home page. */
router.get('/', (req, res, next) => {
  const cookies = req.cookies
  const username = cookies.sessionId
  const params = username ? users[username] : { name: '', balance: '' }
  res.render('index', params)
})

router.get('/login', (req, res, next) => {
  const username = req.query.username
  const params = users[username]
  res.set('Set-Cookie', `sessionId=${username}`) // ;SameSite=None
  res.render('index', params)
})

router.post('/transfer', (req, res, next) => {
  const cookies = req.cookies
  const username = cookies.sessionId
  const toUserName = req.body.username
  const amount = Number(req.body.amount)
  const currentUser = users[username]
  const toUser = users[toUserName]
  currentUser.balance = currentUser.balance - amount
  toUser.balance = toUser.balance + amount

  res.json({ code: 0 })
})

router.get('/search', (req, res, next) => {
  const query = req.query
  res.render('search-result', { searchKey: query.q })
})
module.exports = router
