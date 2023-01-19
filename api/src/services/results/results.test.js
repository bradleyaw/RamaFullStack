import { results, createResult, updateResult, deleteResult } from './results'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('results', () => {
  scenario('returns all results', async (scenario) => {
    const result = await results()

    expect(result.length).toEqual(Object.keys(scenario.result).length)
  })

  scenario('returns a single result', async (scenario) => {
    const result = await result({ id: scenario.result.one.id })

    expect(result).toEqual(scenario.result.one)
  })

  scenario('creates a result', async (scenario) => {
    const result = await createResult({
      input: {
        week_number: 1171789,
        game_one: 5202707,
        game_two: 9166407,
        game_three: 6422677,
        bye: 434782,
        deleted: 3857379,
        playerId: scenario.result.two.playerId,
      },
    })

    expect(result.week_number).toEqual(1171789)
    expect(result.game_one).toEqual(5202707)
    expect(result.game_two).toEqual(9166407)
    expect(result.game_three).toEqual(6422677)
    expect(result.bye).toEqual(434782)
    expect(result.deleted).toEqual(3857379)
    expect(result.playerId).toEqual(scenario.result.two.playerId)
  })

  scenario('updates a result', async (scenario) => {
    const original = await result({ id: scenario.result.one.id })
    const result = await updateResult({
      id: original.id,
      input: { week_number: 374953 },
    })

    expect(result.week_number).toEqual(374953)
  })

  scenario('deletes a result', async (scenario) => {
    const original = await deleteResult({
      id: scenario.result.one.id,
    })
    const result = await result({ id: original.id })

    expect(result).toEqual(null)
  })
})
