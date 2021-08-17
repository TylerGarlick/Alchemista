import * as yup from 'yup'
import { nanoid } from 'nanoid'

console.log(nanoid())
export const account = yup.object().shape({
  id: yup.string().default(() => nanoid()),
  username: yup.string().trim().required(),
  token: yup.string().uuid()
})

export const category = yup.object().shape({

})

export const uri = yup.object().shape({

})

export const feedback = yup.object().shape({

})


// let schema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required().positive().integer(),
//   email: yup.string().email(),
//   website: yup.string().url(),
//   createdOn: yup.date().default(function () {
//     return new Date();
//   }),
// });
