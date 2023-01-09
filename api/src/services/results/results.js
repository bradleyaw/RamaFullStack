import { db } from 'src/lib/db'

export const results = () => {
  return db.result.findMany()
}

export const result = ({ id }) => {
  return db.result.findUnique({
    where: { id },
  })
}

export const createResult = ({ input }) => {
  return db.result.create({
    data: input,
  })
}

export const updateResult = ({ id, input }) => {
  return db.result.update({
    data: input,
    where: { id },
  })
}

export const deleteResult = ({ id }) => {
  return db.result.delete({
    where: { id },
  })
}
