import React, { Component } from 'react'

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
        {
          id: prevState.hotspots.length + 1,
          isOpen: true,
          isEditable: true,
          title: `Hotspot #${prevState.hotspots.length + 1}`,
          content: '<content>',
          posX: x - 15,
          posY: y - 15,
        },
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
      currentElementWidth: 0,
      currentElementHeight: 0,
      currentElementX: 0,
      currentElementY: 0,
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

  handleHotspotCreate = () => {
    this.setState({
      isCreatingHotspot: true,
    })
    document.addEventListener('click', this.handleDocumentClick)
    document.addEventListener('mouseover', this.handleMouseHover)
  }

  handleHotspotEdit = (id, event) => {
    const input = event.target
    this.setState(prevState => ({
      hotspots: prevState.hotspots.map(hotspot => {
        if (id === hotspot.id) {
          return {
            ...hotspot,
            [input.name]: input.value,
          }
        }

        return hotspot
      }),
    }))
  }

  handleHotspotToggle = id => {
    this.setState(prevState => ({
      hotspots: prevState.hotspots.map(hotspot => {
        if (id === hotspot.id) {
          return {
            ...hotspot,
            isOpen: !hotspot.isOpen,
          }
        }

        return hotspot
      }),
    }))
  }

  handleHotspotClose = id => {
    this.setState(prevState => ({
      hotspots: prevState.hotspots.map(hotspot => {
        if (id === hotspot.id) {
          return {
            ...hotspot,
            isOpen: false,
          }
        }

        return hotspot
      }),
    }))
  }

  handleHotspotDelete = id => {
    this.setState(prevState => ({
      hotspots: prevState.hotspots.filter(hotspot => hotspot.id !== id),
    }))
  }

  render() {
    const {
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
              <Button onClick={this.handleHotspotCreate}>Create Hotspot</Button>
              {isCreatingHotspot && (
                <div className={styles.creatingMessage}>Selecione um elemento</div>
              )}
            </div>
            <HotspotList title="List of hotspots">
              {hotspots.map(hotspot => (
                <HotspotItem key={hotspot.id} onDelete={() => this.handleHotspotDelete(hotspot.id)}>
                  {hotspot.title}
                </HotspotItem>
              ))}
            </HotspotList>
            {hotspots.map(hotspot => (
              <Hotspot
                key={hotspot.id}
                isOpen={hotspot.isOpen}
                isEditable={hotspot.isEditable}
                onEdit={event => this.handleHotspotEdit(hotspot.id, event)}
                title={hotspot.title}
                content={hotspot.content}
                onToggle={() => this.handleHotspotToggle(hotspot.id)}
                onClose={() => this.handleHotspotClose(hotspot.id)}
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
