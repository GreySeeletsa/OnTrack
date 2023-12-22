const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

// Get the URL and token from environment variables
const url = process.env.URL
const token = process.env.ASTRA_TOKEN

const app = express()
app.use(cors())
app.use(express.json())

// Define a GET route for '/tickets'
app.get('/tickets', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-Cassandra-Token': token,
    },
  }
  try {
    // Make the axios request and send the response data
    const response = await axios(`${url}?page-size=20`, options)
    res.status(200).json(response.data)
  } catch (err) {
    // Log any errors and send a 500 response
    console.log(err)
    res.status(500).json({ message: err })
  }
})

// Define a POST route for '/tickets'
app.post('/tickets', async (req, res) => {
  const formData = req.body.formData

  const options = {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
      'Content-Type': 'application/json',
    },
    data: formData,
  }

  try {
    const response = await axios(url, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
})

// Define a GET route for '/tickets/:documentId'
app.get('/tickets/:documentId', async (req, res) => {
  const id = req.params.documentId

  const options = {
    method: 'GET',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await axios(`${url}/${id}`, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
})

// Define a PUT route for '/tickets/:documentId'
app.put('/tickets/:documentId', async (req, res) => {
  const id = req.params.documentId
  const data = req.body.data

  const options = {
    method: 'PUT',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
    },
    data,
  }

  try {
    const response = await axios(`${url}/${id}`, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
})

// Define a DELETE route for '/tickets/:documentId'
app.delete('/tickets/:documentId', async (req, res) => {
  const id = req.params.documentId

  const options = {
    method: 'DELETE',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
    },
  }

  try {
    // Make the axios request and send the response data
    const response = await axios(`${url}/${id}`, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
})

app.listen(PORT, () => console.log('server running on PORT ' + PORT))
