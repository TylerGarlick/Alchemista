import { ArangoDBConfiguration } from './types'

const {
  ARANGODB_DATABASE_NAME: databaseName = ``,
  ARANGODB_USERNAME: userName = ``,
  ARANGODB_PASSWORD: password = ``
} = process.env


export const bootstrap = async (configuration: ArangoDBConfiguration = { databaseName, userName, password }) => {
  console.log(configuration)
}

export const teardown = async () => {
  console.log(`teardown`)
}
