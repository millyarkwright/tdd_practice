import { MongoClient } from 'mongodb'

// 1. This is going to be for setting up our database with the correct data beforehand. And it's going to be async and it's going to take two arguments, one argument for the collection name we want our data to be in, and another argument for the actual data we want that collection to contain, we'll call that data. 

export const setDatabaseData = async (collectionName, data) => {
  const client = await MongoClient.connect(
    'mongodb://localhost:27017/TEST_DB', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  const db = client.db('TEST_DB')

  await db.collection(collectionName).insertMany(data)

  client.close()
}

// 2. This is going to take a single argument specifying the collection name that we want to get the data from.
export const getDatabaseData = async collectionName => {
  const client = await MongoClient.connect(
    'mongodb://localhost:27017/TEST_DB', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  const db = client.db('TEST_DB')

  const result = await db.collection(collectionName).find().toArray()

  client.close()

  return result
}

// 3. Function called reset database which we can use to drop our database after our tests
export const resetDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb://localhost:27017/TEST_DB', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  const db = client.db('TEST_DB')

  await db.dropDatabase()

  client.close()

}