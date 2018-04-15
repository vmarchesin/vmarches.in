import React from 'react'
import { Col, Row } from 'reactstrap'
import ChartistGraph from 'react-chartist'

import { languages } from './charts'
import { wrapMain } from 'utils'

import 'scss/charts'

const SkillsRoute = () => wrapMain(
  <div>
    <center className='container'>
      <Row>
        <Col className='skill-programming' xs='12' md='12'>
          <Col xs='12'>
            <h3>Programming</h3>
          </Col>
          <ChartistGraph data={languages.data} options={languages.options} type='Bar'/>
          <hr />
        </Col>
        <Col className='mt10' xs='12' md='12'>
          <Col xs='12'>
            <h3>Languages</h3>
          </Col>
          <table>
            <thead>
              <tr>
                <th></th>
                <th style={{ textAlign: 'center' }}>Language</th>
                <th style={{ padding: '0 20px', textAlign: 'center' }}>Proficiency</th>
              </tr>
            </thead>
            <tbody>
              {[
                { flag: '🇧🇷', language: 'Portuguese', proficiency: 'Native' },
                { flag: '🇺🇸', language: 'English', proficiency: 'Fluent' },
                { flag: '🇪🇸', language: 'Spanish', proficiency: 'Full Proficiency' },
              ].map((r, i) => (
                <tr key={i}>
                  <td style={{ padding: '0 10px' }}>{r.flag}</td>
                  <td style={{ textAlign: 'center' }}>{r.language}</td>
                  <td style={{ padding: '0 20px', textAlign: 'center' }}>{r.proficiency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </center>
  </div>
)

export default SkillsRoute