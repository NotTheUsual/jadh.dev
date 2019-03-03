import React from 'react'
import ExperimentLayout from '../../components/experimentLayout'
import { Link } from 'gatsby'
import './experiments.css'

const Experiments = () => (
  <ExperimentLayout title="Experiments">
    <div className="experiment-grid">
      <Link
        to="/experiments/01-grid-hover"
        className="experiment-grid__item experiment-grid__item--twitter"
      >
        <h4 className="experiment-grid__item-number">01</h4>
        <p className="experiment-grid__item-text">Grid Hover</p>
      </Link>
    </div>
  </ExperimentLayout>
)

export default Experiments
