import React from 'react'

import Map from '../Map'

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  export default function testPage() {
    return (
    <div classname="testPage">
      <h1>hello world</h1>
<Map location={location}  />
    </div>
    )
  }


