export const QUERY = gql`
  query resultsQuery {
    results {
      id
      season
      week_number
      player {
        id
        first_name
        last_name
      }
      game_one
      game_two
      game_three
      bye
      deleted
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

const createPlayerArrayFromResults = (results, week = 0) => {
  const playerArray = []
  results.map(
    ({
      season,
      week_number,
      game_one,
      game_two,
      game_three,
      bye,
      deleted,
      createdAt,
      player: { first_name, last_name, id },
    }) => {
      let playerid = id
      let name = `${first_name} ${last_name}`
      let wins = (game_one > 0) | (0 + game_two > 0) | (0 + game_three > 0) | 0
      let losses =
        (game_one < 0) | (0 + game_two < 0) | (0 + game_three < 0) | 0
      let points = game_one + game_two + game_three
      let playerIndex = playerArray.findIndex((p) => p.playerid === playerid)
      // if player does not exist in array, add them and their totals
      if (playerIndex < 0) {
        playerArray.push({
          playerid,
          name,
          wins,
          losses,
          points,
        })
        // if they do exist, update totals
      } else {
        playerArray[playerIndex].wins = playerArray[playerIndex].wins + wins
        playerArray[playerIndex].losses =
          playerArray[playerIndex].losses + losses
        playerArray[playerIndex].points =
          playerArray[playerIndex].points + points
      }
    }
  )
  return playerArray
}

export const Success = ({ results }) => {
  const players = createPlayerArrayFromResults(results, 0)

  return (
    <>
      <ul>
        {players.map((p) => {
          console.log(p)
          return (
            <li>
              {p.name} - wins: {p.wins} - losses: {p.losses} - points:{' '}
              {p.points}
            </li>
          )
        })}
      </ul>
    </>
  )
}
