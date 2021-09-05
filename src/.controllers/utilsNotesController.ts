import { firebase, googleAuthProvider, database } from "../.models/firebase"
import { INote } from "../.views/components/utils/UtilsNotes/index"

const utilsNotesController = {
  getAllNotes: async (uid: string) => {
    let notes: any = database
      .ref(`users/${uid}/notes`)
      .orderByChild("position")
      .once("value")
      .then((snapshot) => {
        const notes: any = []
        snapshot.forEach((note) => {
          notes.push({
            id: note.key,
            title: note.val().title,
            text: note.val().text,
            position: note.val().position,
          })
        })
        return notes
      })
    return await notes
  },

  addNote: async (note: INote, uid: string, notes: any[]) => {
    let res = database
      .ref(`users/${uid}/notes`)
      .push({
        ...note,
        position: notes.length > 0 ? notes[notes.length - 1].position + 1 : 0,
      })
      .then((e) => {
        return e
      })
      .catch((error) => {
        console.log("link não adicionado: ", error)
        res = error
      })
    return await res
  },

  removeNote: async (id: string, uid: string) => {
    let res = database
      .ref(`users/${uid}/notes/${id}`)
      .set(null)
      .then(() => {
        return "Nota removida!"
      })
      .catch((error) => {
        console.log("Houve algum erro na remoção!")
        res = error
      })
    return await res
  },

  editNote: async (note: INote, id: string, uid: string) => {
    let res = database
      .ref(`users/${uid}/notes/${id}`)
      .update(note)
      .then(() => {
        return "Nota atualizada!"
      })
      .catch((error) => {
        console.log("Houve algum erro na atualização!")
        res = error
      })
    return await res
  },

  updateDnd: async (uid: string, first: any, end: any) => {
    database
      .ref(`users/${uid}/notes/${first.id}`)
      .update({ position: first.position })
      .catch((error) => {
        console.log("Houve algum erro na atualização!")
      })

    database
      .ref(`users/${uid}/notes/${end.id}`)
      .update({ position: end.position })
      .catch((error) => {
        console.log("Houve algum erro na atualização!")
      })
  },
}

export default utilsNotesController
