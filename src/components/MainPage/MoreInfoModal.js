import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const MoreInfoModal = ({open, handleMoreInfoClose, equitySymbol}) => {
  return (
    <Modal open={open}>
      <Modal.Header> Finacial Information for: {equitySymbol}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
        <Modal.Description>
          <table>
            <tr>
              <th>Finacials</th>
              <th>Chart</th>
            </tr>
            <tr>
              <td>Finacial info here</td>
              <td>Chart here</td>
            </tr>
          </table>
        </Modal.Description>
      </Modal.Content>
      <Button onClick={handleMoreInfoClose}>Close</Button>
    </Modal>
  )
}

export default MoreInfoModal
