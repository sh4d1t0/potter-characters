import React from 'react'
import FormComponent from '../Form/Form'
import { Box, Modal } from '@mui/material'

const ModalComponent = props => {
  const { open, handleClose } = props

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormComponent />
        </Box>
      </Modal>
    </>
  )
}

export default ModalComponent
