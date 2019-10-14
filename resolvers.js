import Note from "./models/note"

export const resolvers = {
  Query: {
    async getNote(root, {_id}) {
      return await Note.findById(_id)
    },
    async allNotes() {
      return await Note.findAll()
    }
  },
  Mutation: {
      async createNote(root, {input}) {
          return await Note.create(input)
      },
      async updateNote(root, {_id, input}) {
          return await Note.findAndUpdate({_id}, input, {new: true})
      },
      async deleteNote(root, {_id }){
          return await Note.findAndDelete({_id})
      }
  }
}
