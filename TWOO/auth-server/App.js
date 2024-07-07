var express = require('express')
var cors = require('cors')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')

var adapter = new FileSync('./db.json')
var db = low(adapter)

const app = express()

const jwtSecret = process.env.REACT_APP_CODE

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))