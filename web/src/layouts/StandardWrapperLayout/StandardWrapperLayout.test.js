import { render } from '@redwoodjs/testing/web'

import StandardWrapperLayout from './StandardWrapperLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StandardWrapperLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StandardWrapperLayout />)
    }).not.toThrow()
  })
})
