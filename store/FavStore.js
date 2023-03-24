// stores/counter.js
import { defineStore } from 'pinia'

export const useFavStore = defineStore('counter', {
  state: () => ({
    favLists: [],
    loading: false,
    list:[]
  }),
  getters: {
    favs() {
      return this.favLists;
    },

    rawWithFavList() {
      let newData = []
      for (const l of this.list) {
        let hasBreed = this.favLists.find((e) => e.breed == l.breed)
        l.is_fav =  (hasBreed) ? true : false
        newData.push(l)
      }

      return newData;
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
  //   async getLists(){
  //     this.loading = true
  //     const res = await fetch('http://localhost:3000/favLists')
  //     const data = await res.json()

  //     //initialize tasks with the data from db json
  //     console.log(data)
  //     this.favLists = data
  //     this.loading = false
  // },

  async getList(){
    const res = await fetch('https://catfact.ninja/breeds')
    let data = await res.json()
    this.list = data.data
    console.log(data)
  },

  async addFav(breed){
    console.log(breed)
      this.favLists.push(breed);

      // const res = await fetch('http://localhost:3000/favLists',{
      // method: 'POST',
      // body: JSON.stringify(breed),
      // headers: {'Content-Type' : 'application/json'}
      // });

      // if (res.error){
      //     console.log(res.error)
      // }
  },

  async deleteTask(breed) {
    this.favLists = this.favLists.filter(t => {
      return t.breed !== breed
    })

    const res = await fetch('http://localhost:3000/favLists' + breed, {
      method: 'DELETE',
    })

    if (res.error) {
      console.log(res.error)
    }
  },
  // async addFav(breed){
  //     const task = this.tasks.find(t => t.breed === breed)
  //     task.isFav = !task.isFav

  //     const res = await fetch('https://catfact.ninja/breeds'+breed,{
  //     // patch request utk modify data
  //     method: 'PATCH',
  //     // argument masukkan apa yang kita nak update
  //     body: JSON.stringify({isFav: task.isFav}),
  //     headers: {'Content-Type' : 'application/json'}
  //     })

  //     if (res.error){
  //         console.log(res.error)
  //     }
  // }
  },
})
