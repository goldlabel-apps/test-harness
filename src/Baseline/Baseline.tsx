import React from "react"
import "./gold.css"
import { Weather } from "@listingslab/weather"

function Baseline() {
  return (
    <div>
      <div>
        <h2 style={{background:"white"}}>
          Test Harness
          <a href="https://github.com/listingslab-goldlabel/test-harness"
            target="_blank"
            rel="noopener noreferrer">
            Git Repo
          </a>
        </h2>
      </div>
      <Weather />
    </div>
  )
}

export default Baseline
