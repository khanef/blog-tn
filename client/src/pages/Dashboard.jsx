
import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import DashSidebar from '../components/DashSidebar'
import DashProfile from '../components/DashProfile'
import DashPost from '../components/DashPost'
import DashUser from '../components/DashUser'
import DashComments from '../components/DashComments'
import DashboardComp from '../components/DashboardComp'

export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* sidebar */}
      <div className='md:w-56'>
        <DashSidebar/>
      </div>
      {/* sidebar */}        
      {tab === 'profile' && <DashProfile />}
      {/* posts... */}        
      {tab === 'posts' && <DashPost/>}
      {/* users... */}        
      {tab === 'users' && <DashUser/>}
      {/* comments... */}        
      {tab === 'comments' && <DashComments/>}
      {/* dashboard comp... */}        
      {tab === 'dash' && <DashboardComp/>}
    </div>
  )
}
