import { MetaTags } from '@redwoodjs/web'

import PlayersCell from 'src/components/PlayersCell'

const StandingsPage = () => {
  return (
    <>
      <MetaTags title="Standings" description="Standings page" />

      <h1>StandingsPage</h1>
      <PlayersCell />
    </>
  )
}

export default StandingsPage
