import { defineStore } from "pinia";

export default defineStore("profile", {
  state: () => ({
    id: 1,
    username: "Daniel Navas",
    avatar: "/avatars/avatar.jpg",
    status: "active",
  }),
});
// TODO: ya no es necesario las mutations

// import { defineStore } from 'pinia'

// export default defineStore('profile', {
//   state: () => ({
//     id: 1,
//     username: '',
//     avatar: '/avatars/avatar.jpg',
//     status: null
//   })
// })
