import './App.scss'
import { BrowserRouter, NavLink, Routes, Route, useLocation } from "react-router-dom"


import CampaignList from './page/Campaign/CampaignList'
import Campaign from './page/Campaign/Campaign'
import CouponList from './page/CouponPage/CouponList'
import InfoList from './page/InfoPage/InfoList'
import Info from './page/InfoPage/Info'
import RaceList from './page/RacePage/RaceList'
import Race from './page/RacePage/Race'
import ActivityList from './page/SpotPage/ActivityPage/ActivityList'
import Activity from './page/SpotPage/ActivityPage/Activity'
import EatsList from './page/SpotPage/EatsPage/EatsList'
import Eat from './page/SpotPage/MirokuNav'
import LearnList from './page/SpotPage/LearnPage/LearnList'
import Learn from './page/SpotPage/LearnPage/Learn'
import SeeList from './page/SpotPage/SeePage/SeeList'
import See from './page/SpotPage/SeePage/See'
import StayList from './page/SpotPage/StayPage/StayList'
import Stay from './page/SpotPage/StayPage/Stay'
import TopicsList from './page/TopicsPage/TopicsList'
import Header from './part/Header/Header'
import Home from './page/Home/Home';
import Layout from './part/Layout'




import Teaser from './page/Teaser/Teaser'
import Annai from './page/Annai/Annai'
import Event from './page/event/Event'
import Broadcast from './page/Broadcast/Broadcast'

import EventList from './page/event/EventList'
import Annai2 from './page/Annai/Annai2'
import TopPage from './page/top/TopPage'






function App() {


  return (
    <>

      <Layout>
        <Routes>
          <Route path='/' element={<TopPage />}></Route>
          <Route path='/muranavi' element={<Home/>}> </Route>
          <Route path='/campaign' element={<CampaignList />}> </Route>
          <Route path='/campaign/*' element={<Campaign />}></Route>
          <Route path='/couponList' element={<CouponList />}></Route>
          <Route path='/info' element={<InfoList />}></Route>
          <Route path='/info/*' element={<Info />}></Route>
          <Route path='/race' element={<RaceList />}></Route>
          <Route path='/race/*' element={<Race />}></Route>
          <Route path='/miryoku/playing/*' element={<ActivityList />}></Route>
          <Route path='/miryoku/eat/*' element={<EatsList />}></Route>
          <Route path='/miryoku/learn/*' element={<LearnList />}></Route>
          <Route path='/miryoku/spot/*' element={<SeeList />}></Route>
          <Route path='/miryoku/stay/*' element={<StayList />}></Route>
          <Route path='/topics' element={<TopicsList />}></Route>
          <Route path='/about' element={<Teaser />}></Route>
          <Route path='/display' element={<Annai />}></Route>
          <Route path='/infomation' element={<Annai2 />}></Route>
          <Route path='/event/event-1' element={<Event />}></Route>
          <Route path='/event' element={<EventList />}></Route>
          <Route path='/broadcast' element={<Broadcast />}></Route>


        </Routes>
      </Layout>





    </>
  )
}


export default App
