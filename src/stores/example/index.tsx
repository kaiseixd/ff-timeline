import { storeHelper } from '@/common/helper'

type TFriend = {
  name: string
  isFavorite: boolean
  isSingle: boolean
}

const store = {
  friends: [] as TFriend[],
  makeFriend(name: string, isFavorite = false, isSingle = false) {
    const oldFriend = this.friends.find(friend => friend.name === name)
    if (oldFriend) {
      oldFriend.isFavorite = isFavorite
      oldFriend.isSingle = isSingle
    } else {
      this.friends.push({ name, isFavorite, isSingle })
    }
  },
  get singleFriends() {
    return this.friends.filter(friend => friend.isSingle)
  }
}

export const { storeContext, StoreProvider } = storeHelper(store)
