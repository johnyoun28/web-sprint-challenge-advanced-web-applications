import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import axiosGet from '../utils/axiosGet'
jest.mock('../utils/axiosGet.js')

const mockData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
]

axiosGet.mockResolvedValue(mockData)
test("Fetches data and renders the bubbles", () => {
  // Finish this test
  render(<BubblePage/>)

});
