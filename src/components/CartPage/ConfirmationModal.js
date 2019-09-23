import React from "react"
import { Modal, Button } from "react-bootstrap"

const ConfirmationModal = ({ show, onClose, onConfirm }) => {
  return(
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation required</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure?</Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onClose}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Remove</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmationModal
