import { firebase, googleAuthProvider, database } from "../.models/firebase";

const ToDoContainer = {
  // getAllLinks: async (uid: string) => {
  //   let links = database
  //     .ref(`users/${uid}/links`)
  //     .once("value")
  //     .then((snapshot) => {
  //       const links: any = [];
  //       snapshot.forEach((link) => {
  //         links.push({
  //           id: link.key,
  //           link: link.val().link,
  //           position: link.val().position,
  //         });
  //       });
  //       return links;
  //     });
  //   return await links;
  // },

  addTask: async (task: any, uid: string) => {
    let res = database
      .ref(`users/${uid}/todos`)
      .push(task)
      .then((e) => {
        console.log("Task added: ", task);
        return e;
      })
      .catch((error) => {
        console.log("Some error: ", error);
        res = error;
      });
    return await res;
  },

  // removeLink: async (id: string, uid: string) => {
  //   let res = database
  //     .ref(`users/${uid}/links/${id}`)
  //     .set(null)
  //     .then(() => {
  //       return "Link removido!";
  //     })
  //     .catch((error) => {
  //       console.log("Houve algum erro na remoção!");
  //       res = error;
  //     });
  //   return await res;
  // },

  // updateDnd: async (uid: string, first: any, end: any) => {
  //   database
  //     .ref(`users/${uid}/links/${first.id}`)
  //     .update({ link: first.link })
  //     .catch((error) => {
  //       console.log("Houve algum erro na atualização!");
  //     });

  //   database
  //     .ref(`users/${uid}/links/${end.id}`)
  //     .update({ link: end.link })
  //     .catch((error) => {
  //       console.log("Houve algum erro na atualização!");
  //     });
  // },
};

export default ToDoContainer;
