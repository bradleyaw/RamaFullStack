import { db } from 'src/lib/db'

export const players = () => {
  return db.player.findMany()
}

export const player = ({ id }) => {
  return db.player.findUnique({
    where: { id },
  })
}

export const createPlayer = ({ input }) => {
  return db.player.create({
    data: input,
  })
}

export const updatePlayer = ({ id, input }) => {
  return db.player.update({
    data: input,
    where: { id },
  })
}

export const deletePlayer = ({ id }) => {
  return db.player.delete({
    where: { id },
  })
}
