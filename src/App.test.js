import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './app'

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    id : 1,
    rocket_name : "Falcon 1"
  })
}))

describe("App", () => {
  it("loads the rocket on mount", async () => {
   await act(async () => render(<App/>));
   expect(screen.getByText("rocket_name")).toBeInTheDocument();
  })

})


  
  