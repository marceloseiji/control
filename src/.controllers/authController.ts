import { firebase, googleAuthProvider } from "../.models/firebase";

const authProvider = {
  startLogin: async () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        console.log("Logado!: ", result);
      })
      .catch((error) => {
        console.log("Erro!: ", error);
      });
  },

  logOut: async () => {
    return firebase.auth().signOut();
  },
};

export default authProvider;
