import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-teal-300 via-green-200 to-lime-300 rounded-lg text-white'>Khan's</span>
                        Blog
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://estate-0er4.onrender.com/' target='_blank' rel='noopener noreferrer'>
                                Khani's Estate
                            </Footer.Link>
                            <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                                Khan's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://github.com/khanef' target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </Footer.Link>
                            <Footer.Link href='#'>Discord</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>Privacy Policy</Footer.Link>
                            <Footer.Link href='#'>Term &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Khan's Blog" year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='https://www.facebook.com/vlp.khan19' icon={BsFacebook}/>
                    <Footer.Icon href='https://www.instagram.com/_khan.2801/' icon={BsInstagram}/>
                    <Footer.Icon href='https://www.facebook.com/vlp.khan19' icon={BsTwitter}/>
                    <Footer.Icon href='https://github.com/khanef' icon={BsGithub}/>
                    <Footer.Icon href='https://www.facebook.com/vlp.khan19' icon={BsDribbble}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
