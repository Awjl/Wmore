import storage from 'good-storage'

const userID_KEY = '__userID__'
const userID_MAX_LEN = 15

export function saveSearch(id) {
  // 设置USERid
  let searches = storage.get(userID_KEY,query)

  storage.set(userID_KEY, userID_KEY)
  return searches
}

