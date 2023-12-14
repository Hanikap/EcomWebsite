import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomModal = ({ open, onClose, data }) => {
  const [isHovered, setIsHovered] = useState(false);

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

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {data && (
          <>
            {data.title}
            <Box>
              <Typography variant="body1">{data.description}</Typography>
              <Typography variant="body1">Price: ₹{data.price}</Typography>
              <Typography variant="body1">Stock: {data.stock}</Typography>
              <div
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  height: '200px', // Adjust the height as needed
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${data.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </div>
            </Box>
            <button onClick={onClose}>Close</button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default CustomModal;
