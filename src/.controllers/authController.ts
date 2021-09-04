import { firebase, googleAuthProvider, database } from "../.models/firebase"

const authController = {
  startLogin: async () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        return result
      })
      .catch((error) => {
        console.log("Erro!: ", error)
      })
  },
  logOut: async () => {
    return firebase.auth().signOut()
  },
}

export default authController
