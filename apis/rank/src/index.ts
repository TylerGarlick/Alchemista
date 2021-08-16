import { server } from './server'

const run = async () => server.listen(5000)

run()
  .then(({ url }) => console.log(`Server started: ${url}`))
  .catch(console.error)

