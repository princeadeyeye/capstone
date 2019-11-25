const create = (credentials, post ) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: post
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const update = (params, credentials) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/'+ params.userId, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const read = (params, credentials) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/'+ params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const remove = (params, credentials) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/' + params.postId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const search = (params, credentials, postId) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/?' + query.postId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId:params.userId, postId: postId})
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}


const comment = (params, credentials, postId, comment) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/'+ params.userId +'/comment', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId:params.userId, postId: postId, comment: comment})
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const feeds = (params, credentials, postId, comment) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/feed/', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId:params.userId, postId: postId, comment: comment})
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}
const list = () => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/sample/gifs', {
    method: 'GET',
    })
    .then(response => {
      return response.json()
  })
  .catch((err) => console.log(err))
}

export {
  create,
  remove,
  read,
  comment,
  list,
}