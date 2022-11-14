import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import metamaskIcon from '../assets/metamask-icon.svg'
import { CloseIcon, MoreIcon } from '../assets/icons/icons';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  background: '#FFFFFF',
  borderRadius: '16px',
  boxShadow: 4,
};

export default function MetaModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
      onClick={handleOpen}
                  type="button"
                  className=" md:block lg:block connect-button rounded-lg py-2 px-4 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
                >
                  <span className="">Connect Wallet</span>
                </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className='flex justify-between items-center p-[20px]'>
                <span>Connetc wallet</span>
                <button
                    className='hover:bg-slate-100 ease-in duration-200 p-2 '
                    onClick={handleClose}
                ><CloseIcon /></button>
                
            </div>
            <hr />
            <div className='p-[30px] '>
                <span className=''>Choose Your prefered wallet:</span>
                <div className='flex my-[16px] hover:bg-slate-100 justify-between ease-in duration-200 rounded-[12px] border-[1px] p-[12px] px-[17px]'>
                    <div className='flex items-center'>
                        <img src={metamaskIcon}/>
                        <span className='ml-[16px]'>Metamask</span></div>
                    <MoreIcon />
                </div>
                <div className='flex justify-between hover:bg-slate-100 ease-in duration-200 rounded-[12px] border-[1px] p-[12px] my-[16px] px-[17px]'>
                    <div className='flex items-center'>
                        <img src={metamaskIcon}/>
                        <span className='ml-[16px]'>Metamask</span></div>
                    <MoreIcon />
                </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
