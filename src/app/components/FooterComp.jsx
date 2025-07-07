import React from 'react'
import { FacebookIcon, InstaIcon, LinkedInIcon, TwitterIcon } from './common/Icon'

const FooterComponents = () => {
  return (
    <footer className='w-full h-[182px] flex item-center justify-center'>
        <div className='flex flex-col w-[210px] ga-4 items-center'>
            <div className=' flex items-center justify-between w-full'>
                <FacebookIcon/>
                <InstaIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>

                </div>
            <small>Copyright ©2020 All rights reserved  </small>
        </div>
    </footer>
  )
}

export default FooterComponents