import React from 'react'

import Page from 'components/templates/page'
import Metadata from 'components/atoms/metadata'
import Button from 'components/atoms/button'
import HotspotList from 'components/molecules/hotspot-list'
import HotspotItem from 'components/atoms/hotspot-item'
import Container from 'components/atoms/container'

import styles from './styles.module.css'

const Index = () => (
  <Page>
    <Metadata
      title="Conpass Hotspots"
      description="Create hotspots to teach your users about the app"
    />
    <Container>
      <div className={styles.hotspots}>
        <div className={styles.hotspotsHeader}>
          <Button>Create Hotspot</Button>
        </div>
        <HotspotList title="List of hotspots">
          <HotspotItem>Hotspot #1</HotspotItem>
          <HotspotItem>Hotspot #2</HotspotItem>
          <HotspotItem>Hotspot #3</HotspotItem>
        </HotspotList>
      </div>
    </Container>
  </Page>
)

export default Index
