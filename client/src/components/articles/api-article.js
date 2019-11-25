const create = ( credentials, post ) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/articles/', {
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
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/articles/'+ params.userId, {
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
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/articles/'+ params.userId, {
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
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/articles/' + params.postId, {
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

const search = (query, credentials, postId) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/articles/?' + query.postId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify()
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}


const comment = (params, credentials, postId, comment) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/articles/'+ params.userId +'/comment', {
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
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/sample/articles', {
    method: 'GET',
    })
    .then(response => {
      return response.json()
  })
  .catch((err) => console.log(err))
}

export {
  feeds,
  search,
  create,
  remove,
  read,
  update,
  comment,
  list,
}