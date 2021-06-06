import { firebase, googleAuthProvider, database } from "../.models/firebase";

const utilsLinksController = {
  addLink: async (link: string) => {
    database
      .ref("utilLink")
      .set(link)
      .then(() => {
        console.log("Link adicionado", link)
      })
      .catch((error) => {
        console.log("link não adicionado", error)
      });
  },
};

export default utilsLinksController;
