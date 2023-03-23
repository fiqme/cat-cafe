// stores/counter.js
import { defineStore } from 'pinia'

export const useFavStore = defineStore('counter', {
  state: () => ({
    favLists: [],
    loading: false,
  }),
  getters: {
    favs() {
      return this.favLists;
    },
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async getLists(){
      this.loading = true
      const res = await fetch('http://localhost:3000/data')
      const data = await res.json()

      //initialize tasks with the data from db json
      this.favLists = data
      this.loading = false
  },

  async addFav(breed){
      this.favLists.push(breed);

      const res = await fetch('http://localhost:3000/data',{
      method: 'POST',
      body: JSON.stringify(breed),
      headers: {'Content-Type' : 'application/json'}
      });

      if (res.error){
          console.log(res.error)
      }
  },

  async deleteTask(breed) {
    this.favLists = this.favLists.filter(t => {
      return t.breed !== breed
    })

    const res = await fetch('http://localhost:3000/data' + breed, {
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
