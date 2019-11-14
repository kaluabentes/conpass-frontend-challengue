import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Page from 'components/templates/page'
import Metadata from 'components/atoms/metadata'
import Button from 'components/atoms/button'
import HotspotList from 'components/molecules/hotspot-list'
import HotspotItem from 'components/atoms/hotspot-item'
import Container from 'components/atoms/container'
import Hotspot from 'components/molecules/hotspot'
import SelectBox from 'components/atoms/select-box'
import {
  createHotspot,
  editHotspot,
  deleteHotspot,
  toggleHotspot,
  closeHotspot,
} from 'store/modules/hotspots/actions'

import styles from './styles.module.css'

let selectBoxTimeout

const Index = () => {
  const [currentElement, setCurrentElement] = useState({ width: 0, height: 0, x: 0, y: 0 })
  const [isCreatingHotspot, setCreatingHotspot] = useState(false)
  const hotspots = useSelector(state => state.hotspots)
  const dispatch = useDispatch()

  const handleDocumentClick = event => {
    dispatch(
      createHotspot({
        isOpen: true,
        isEditable: true,
        title: `Hotspot #${hotspots.length + 1}`,
        content: '<content>',
        posX: event.x - 15,
        posY: event.y - 15,
      })
    )
    setCreatingHotspot(false)
    setCurrentElement({
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    })
    document.removeEventListener('click', handleDocumentClick)
    document.removeEventListener('mouseover', handleMouseHover)
  }

  const handleMouseHover = event => {
    clearTimeout(selectBoxTimeout)
    selectBoxTimeout = setTimeout(() => {
      setCurrentElement({
        height: event.toElement.offsetHeight,
        width: event.toElement.offsetWidth,
        x: event.toElement.offsetLeft,
        y: event.toElement.offsetTop,
      })
    }, 500)
  }

  const handleHotspotCreate = () => {
    setCreatingHotspot(true)
    document.addEventListener('click', handleDocumentClick)
    document.addEventListener('mouseover', handleMouseHover)
  }

  const handleHotspotEdit = (id, event) => {
    dispatch(editHotspot(id, event.target.name, event.target.value))
  }

  const handleHotspotToggle = id => {
    dispatch(toggleHotspot(id))
  }

  const handleHotspotClose = id => {
    dispatch(closeHotspot(id))
  }

  const handleHotspotDelete = id => {
    dispatch(deleteHotspot(id))
  }

  return (
    <Page>
      <Metadata
        title="Conpass Hotspots"
        description="Create hotspots to teach your users about the app"
      />
      <Container>
        <div className={styles.hotspots}>
          <div className={styles.hotspotsHeader}>
            <Button onClick={handleHotspotCreate}>Create Hotspot</Button>
            {isCreatingHotspot && (
              <div className={styles.creatingMessage}>Selecione um elemento</div>
            )}
          </div>
          <HotspotList title="List of hotspots">
            {hotspots.map(hotspot => (
              <HotspotItem key={hotspot.id} onDelete={() => handleHotspotDelete(hotspot.id)}>
                {hotspot.title}
              </HotspotItem>
            ))}
          </HotspotList>
          {hotspots.map(hotspot => (
            <Hotspot
              key={hotspot.id}
              isOpen={hotspot.isOpen}
              isEditable={hotspot.isEditable}
              onEdit={event => handleHotspotEdit(hotspot.id, event)}
              title={hotspot.title}
              content={hotspot.content}
              onToggle={() => handleHotspotToggle(hotspot.id)}
              onClose={() => handleHotspotClose(hotspot.id)}
              posX={hotspot.posX}
              posY={hotspot.posY}
            />
          ))}
          {isCreatingHotspot && (
            <SelectBox
              width={currentElement.width}
              height={currentElement.height}
              posX={currentElement.x}
              posY={currentElement.y}
            />
          )}
        </div>
      </Container>
    </Page>
  )
}

export default Index
