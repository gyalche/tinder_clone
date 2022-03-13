import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
export default function Headers() {
  return (
    <div className='header'>
       
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>
        
        <img
        className='header__logo'
         src='https://www.emrearal.com/wp-content/uploads/2017/08/tinder-icon-new.png' alt='logo'>
        </img>
        <IconButton>
          <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>
    </div>
  )
}
