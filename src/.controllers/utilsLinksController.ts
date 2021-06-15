import { firebase, googleAuthProvider, database } from "../.models/firebase";

const utilsLinksController = {
  getAllLinks: async (uid: string) => {
    let links = database
      .ref(`users/${uid}/links`)
      .once("value")
      .then((snapshot) => {
        const links: any = [];
        snapshot.forEach((link) => {
          links.push({
            id: link.key,
            link: link.val().link,
            position: link.val().position,
          });
        });
        return links;
      });
    return await links;
  },

  addLink: async (link: string, uid: string, links: any[]) => {
    let res = database
      .ref(`users/${uid}/links`)
      .push({
        link: link,
        position: links.length > 0 ? links[links.length - 1].position + 1 : 0,
      })
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

  updateDnd: async (uid: string, first: any, end: any) => {
    database
      .ref(`users/${uid}/links/${first.id}`)
      .update({ link: first.link })
      .catch((error) => {
        console.log("Houve algum erro na atualização!");
      });

    database
      .ref(`users/${uid}/links/${end.id}`)
      .update({ link: end.link })
      .catch((error) => {
        console.log("Houve algum erro na atualização!");
      });
  },
};

export default utilsLinksController;
