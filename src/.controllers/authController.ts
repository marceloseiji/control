import { firebase, googleAuthProvider, database } from "../.models/firebase";

const authController = {
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

  addLink: async (link: string) => {
    database
      .ref("utilLink")
      .set(link)
      .then(() => {
        console.log("link adicionado")
      })
      .catch((error) => {
        console.log("link não adicionado", error)
      });
  },
};

export default authController;
