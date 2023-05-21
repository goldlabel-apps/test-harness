import React from "react"
import "./gold.css"
import { Weather } from "../weather";
// import {Counter} from "@listingslab/icon"

function Baseline() {
  return (
    <div>
      <header style={{background:"white"}}>
        <h2>Test Harness</h2>
        <a
          href="https://github.com/listingslab-goldlabel/test-harness"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Repo
        </a>

        <Weather />
      </header>
    </div>
  )
}

export default Baseline
