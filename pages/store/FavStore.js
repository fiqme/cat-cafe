// // stores/counter.js
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     favLists: [],

//   }),
//   getters: {
//     favs() {
//       return this.lists.filter(l => l.isFav)
//     },
//   },
//   // could also be defined as
//   // state: () => ({ count: 0 })
//   actions: {
//     async getLists(){
//       this.loading = true
//       const res = await fetch('http://localhost:3000/tasks')
//       const data = await res.json()

//       //initialize tasks with the data from db json
//       this.tasks = data
//       this.loading = false
//   },
//   async addTask(task){
//       this.tasks.push(task)

//       const res = await fetch('http://localhost:3000/tasks',{
//       method: 'POST',
//       body: JSON.stringify(task),
//       headers: {'Content-Type' : 'application/json'}
//       })

//       if (res.error){
//           console.log(res.error)
//       }
//   },
//   async deleteTask(id) {
//       this.tasks = this.tasks.filter(t => {
//           return t.id !== id
//       })

//       const res = await fetch('http://localhost:3000/tasks/' + id,{
//       method: 'DELETE',
//       })

//       if (res.error){
//           console.log(res.error)
//       }
//   },
//   async toggleFav(id){
//       const task = this.tasks.find(t => t.id === id)
//       task.isFav = !task.isFav

//       const res = await fetch('http://localhost:3000/tasks/'+id,{
//       // patch request utk modify data
//       method: 'PATCH',
//       // argument masukkan apa yang kita nak update
//       body: JSON.stringify({isFav: task.isFav}),
//       headers: {'Content-Type' : 'application/json'}
//       })

//       if (res.error){
//           console.log(res.error)
//       }
//   }
//   },
// })
