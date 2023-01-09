import {
  players,
  player,
  createPlayer,
  updatePlayer,
  deletePlayer,
} from './players'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('players', () => {
  scenario('returns all players', async (scenario) => {
    const result = await players()

    expect(result.length).toEqual(Object.keys(scenario.player).length)
  })

  scenario('returns a single player', async (scenario) => {
    const result = await player({ id: scenario.player.one.id })

    expect(result).toEqual(scenario.player.one)
  })

  scenario('creates a player', async () => {
    const result = await createPlayer({
      input: { first_name: 'String', last_name: 'String', deleted: 3610414 },
    })

    expect(result.first_name).toEqual('String')
    expect(result.last_name).toEqual('String')
    expect(result.deleted).toEqual(3610414)
  })

  scenario('updates a player', async (scenario) => {
    const original = await player({ id: scenario.player.one.id })
    const result = await updatePlayer({
      id: original.id,
      input: { first_name: 'String2' },
    })

    expect(result.first_name).toEqual('String2')
  })

  scenario('deletes a player', async (scenario) => {
    const original = await deletePlayer({
      id: scenario.player.one.id,
    })
    const result = await player({ id: original.id })

    expect(result).toEqual(null)
  })
})
