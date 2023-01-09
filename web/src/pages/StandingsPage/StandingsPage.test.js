import { render } from '@redwoodjs/testing/web'

import StandingsPage from './StandingsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StandingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StandingsPage />)
    }).not.toThrow()
  })
})
