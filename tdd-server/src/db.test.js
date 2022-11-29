import { MongoClient, mongoClient } from 'mongodb'
import { expect } from 'chai'
import { getUserByUsername } from './db'

describe('getUserByUsername', () => {
  it('get hte correct user from the database give a username', async () => {
    const client = await MongoClient.connect(
      `mongodb://localhost:27017/TEST_DB`, 
      {
        userNewUrlParser: true,
        useUnifiedTopology: true,
      })
    const db = client.db('TEST_DB')

    // tests 
    const fakeData = 
    
    client.close()
  })
})