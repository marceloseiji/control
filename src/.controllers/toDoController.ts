import { firebase, googleAuthProvider, database } from "../.models/firebase";

const ToDoContainer = {
  getAllTasks: async (uid: string) => {
    let tasks = database
      .ref(`users/${uid}/todos`)
      .once("value")
      .then((snapshot) => {
        const tasks: any = [];
        snapshot.forEach((task) => {
          tasks.push({
            id: task.key,
            text: task.val().text,
            title: task.val().title,
            createdDate: task.val().createdDate,
            endDate: task.val().endDate,
            completed: task.val().completed,
          });
        });
        return tasks;
      })
      .catch((error) => {
        console.log("Some error: ", error);
      });
    return await tasks;
  },

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

  removeTask: async (uid: string, id: string | undefined) => {
    let res = database
      .ref(`users/${uid}/todos/${id}`)
      .set(null)
      .then((e) => {
        return "removed";
      })
      .catch((error) => {
        console.log("Some error: ", error);
        res = error;
      });
    return await res;
  },

  check: async (id: string | undefined, uid: string, completed: boolean | undefined) => {
    let res = database
      .ref(`users/${uid}/todos/${id}/`)
      .update({ completed: !completed })
      .then(() => {
        console.log("Task set as completed: ");
        return "Task Updated";
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
