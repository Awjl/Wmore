import storage from 'good-storage'

const userID_KEY = '__userID__'

export function saveSearch(id) {
  // 设置USERid
  let searches = storage.get(userID_KEY,query)

  storage.set(userID_KEY, userID_KEY)
  return searches
}

