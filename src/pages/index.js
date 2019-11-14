import React, { Component, useState } from 'react'

import Page from 'components/templates/page'
import Metadata from 'components/atoms/metadata'
import Button from 'components/atoms/button'
import HotspotList from 'components/molecules/hotspot-list'
import HotspotItem from 'components/atoms/hotspot-item'
import Container from 'components/atoms/container'
import Hotspot from 'components/molecules/hotspot'
import SelectBox from 'components/atoms/select-box'

import styles from './styles.module.css'

class Index extends Component {
  state = {
    isOpen: false,
    isCreatingHotspot: false,
    hotspots: [],
    currentElementWidth: 0,
    currentElementHeight: 0,
    currentElementX: 0,
    currentElementY: 0,
  }

  createHotspot = (x, y) => {
    this.setState(prevState => ({
      hotspots: [
        ...prevState.hotspots,
        { isOpen: false, isEditable: true, title: '', content: '', posX: x - 15, posY: y - 15 },
      ],
    }))
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  handleClose = () => {
    this.setState({
      isOpen: false,
    })
  }

  handleDocumentClick = event => {
    this.createHotspot(event.x, event.y)
    this.setState({
      isCreatingHotspot: false,
    })
    document.removeEventListener('click', this.handleDocumentClick)
    document.removeEventListener('mouseover', this.handleMouseHover)
  }

  handleMouseHover = event => {
    clearTimeout(this.selectBoxTimeout)
    this.selectBoxTimeout = setTimeout(() => {
      this.setState({
        showSelectBox: true,
        currentElementHeight: event.toElement.offsetHeight,
        currentElementWidth: event.toElement.offsetWidth,
        currentElementX: event.toElement.offsetLeft,
        currentElementY: event.toElement.offsetTop,
      })
    }, 500)
  }

  handleCreateHotspot = () => {
    this.setState({
      isCreatingHotspot: true,
    })
    document.addEventListener('click', this.handleDocumentClick)
    document.addEventListener('mouseover', this.handleMouseHover)
  }

  render() {
    const {
      isOpen,
      isCreatingHotspot,
      hotspots,
      currentElementHeight,
      currentElementWidth,
      currentElementX,
      currentElementY,
    } = this.state

    return (
      <Page>
        <Metadata
          title="Conpass Hotspots"
          description="Create hotspots to teach your users about the app"
        />
        <Container>
          <div className={styles.hotspots}>
            <div className={styles.hotspotsHeader}>
              <Button onClick={this.handleCreateHotspot}>Create Hotspot</Button>
              {isCreatingHotspot && (
                <div className={styles.creatingMessage}>Selecione um elemento</div>
              )}
            </div>
            <HotspotList title="List of hotspots">
              <HotspotItem onDelete={() => {}}>Hotspot #1</HotspotItem>
              <HotspotItem onDelete={() => {}}>Hotspot #2</HotspotItem>
              <HotspotItem onDelete={() => {}}>Hotspot #3</HotspotItem>
            </HotspotList>
            {hotspots.map((hotspot, index) => (
              <Hotspot
                key={index}
                isOpen={hotspot.isOpen}
                isEditable={hotspot.isEditable}
                onEdit={() => {}}
                title="How to install"
                content="It takes only 5 minutes to install this script into your website"
                onToggle={this.handleToggle}
                onClose={this.handleClose}
                posX={hotspot.posX}
                posY={hotspot.posY}
              />
            ))}
            {isCreatingHotspot && (
              <SelectBox
                width={currentElementWidth}
                height={currentElementHeight}
                posX={currentElementX}
                posY={currentElementY}
              />
            )}
          </div>
        </Container>
      </Page>
    )
  }
}

export default Index
