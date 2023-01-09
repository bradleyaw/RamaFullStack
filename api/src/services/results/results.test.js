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

  scenario('creates a result', async () => {
    const result = await createResult({
      input: {
        week_number: 2850433,
        playerid: 3239160,
        game_one: 4935815,
        game_two: 3348891,
        game_three: 9496005,
        bye: 5677849,
        deleted: 8250639,
      },
    })

    expect(result.week_number).toEqual(2850433)
    expect(result.playerid).toEqual(3239160)
    expect(result.game_one).toEqual(4935815)
    expect(result.game_two).toEqual(3348891)
    expect(result.game_three).toEqual(9496005)
    expect(result.bye).toEqual(5677849)
    expect(result.deleted).toEqual(8250639)
  })

  scenario('updates a result', async (scenario) => {
    const original = await result({ id: scenario.result.one.id })
    const result = await updateResult({
      id: original.id,
      input: { week_number: 9684301 },
    })

    expect(result.week_number).toEqual(9684301)
  })

  scenario('deletes a result', async (scenario) => {
    const original = await deleteResult({
      id: scenario.result.one.id,
    })
    const result = await result({ id: original.id })

    expect(result).toEqual(null)
  })
})
