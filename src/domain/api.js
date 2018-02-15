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
          'Authorization': user.token
        },
        responseType: 'json'
      })

      console.log(user.userId, user.token, item)
      return client.post('/' + user.userId + '/' + item.key, item).then(function (res) {
        return res.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
