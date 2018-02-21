import axios from 'axios'

export default function ActionsFactory (config) {
  return {
    fetchKVs (targetId) {
      const client = axios.create({
        baseURL: config.BaseURL,
        headers: {
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      })

      return client.get('/' + targetId).then(function (res) {
        return res.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    insertKV (user, item) {
      const client = axios.create({
        baseURL: config.BaseURL,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': user['custom:token']
        },
        responseType: 'json'
      })

      return client.post('/' + user['cognito:username'] + '/' + item.key, item).then(function (res) {
        return res.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    deleteKV (user, item) {
      const client = axios.create({
        baseURL: config.BaseURL,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': user['custom:token']
        },
        responseType: 'json'
      })

      return client.delete('/' + user['cognito:username'] + '/' + item.key).then(function (res) {
        return res.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
