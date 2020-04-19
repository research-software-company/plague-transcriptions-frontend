import { observable } from 'mobx'

class Store {
    state = observable({
        manuscripts:[],
        selected_item: null
    })
}

const store = new Store()

export default store