import axios from 'axios'

export default function ActionsFactory (config) {
  const client = axios.create({
    baseURL: config.BaseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'json'
  })

  return {
    fetchKVs (userId) {
      return client.get('/a9b').then(function (res) {
        return res.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
