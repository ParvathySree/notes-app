import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton } from '@mui/material';
import './SideBar.css'

const SideBar = () => {
  return (
    <div>
      <div></div>
      <div className='add-btn'>
        <IconButton className='icon-btn'>
          <AddBoxIcon className='icon add'/>
        </IconButton>
      </div>
    </div>
  )
}

export default SideBar;