import { MetaTags } from '@redwoodjs/web'

import ResultCell from 'src/components/ResultCell'

const WeeklyPage = () => {
  return (
    <>
      <MetaTags title="Weekly" description="Weekly Results page" />

      <h1>Weekly Results Page</h1>
      <ResultCell />
    </>
  )
}

export default WeeklyPage
