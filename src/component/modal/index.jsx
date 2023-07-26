import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Discalimer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this brochure you acknowledge and confirm that you are seeking information relating to Legal Minds International of your own accord and that there has been no form of solicitation, advertisement or inducement by Legal Minds International or its members.The content of this brochure is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided in this brochure should be construed as legal advice. Legal Minds International shall not be liable for consequences of any action taken by relying on the material/information provided in this brochure.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}