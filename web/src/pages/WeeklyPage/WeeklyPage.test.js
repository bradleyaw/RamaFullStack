import { render } from '@redwoodjs/testing/web'

import WeeklyPage from './WeeklyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WeeklyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeeklyPage />)
    }).not.toThrow()
  })
})
