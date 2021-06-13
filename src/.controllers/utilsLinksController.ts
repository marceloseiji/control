import { firebase, googleAuthProvider, database } from "../.models/firebase";

const utilsLinksController = {
  getAllLinks: async (uid: string) => {
    let links = database
      .ref(`users/${uid}/links`)
      .once("value")
      .then((snapshot) => {
        const links: any = [];
        snapshot.forEach((link: any) => {
          links.push({
            id: link.key,
            text: link.val(),
          });
        });
        return links;
      });
    return await links;
  },

  addLink: async (link: string, uid: string) => {
    let res = database
      .ref(`users/${uid}/links`)
      .push(link)
      .then((e) => {
        console.log("Link adicionado: ", link);
        return e;
      })
      .catch((error) => {
        console.log("link não adicionado: ", error);
        res = error;
      });
    return await res;
  },

  removeLink: async (id: string, uid: string) => {
    console.log(id, uid)
    let res = database
      .ref(`users/${uid}/links/${id}`)
      .set(null)
      .then(() => {
        return "Link removido!";
      })
      .catch((error) => {
        console.log("Houve algum erro na remoção!");
        res = error;
      });
    return await res;
  },
};

export default utilsLinksController;
