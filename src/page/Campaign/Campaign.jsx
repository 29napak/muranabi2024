import React from 'react'
import { useLocation } from 'react-router-dom';
import { useCP } from './useCampaign';
import HomeLink from '../Home/HomeLink/HomeLink';

export default function Campaign() {

  const location =useLocation();
  const {id} =location.state;
 
  const {data,loading,error} =useCP(id)
  if(loading)return null;
  if(error)return null;

  return (
 
    <>


    <div className='teaser event'>
        <div className='MiryokuHead'>
            <div className="RaceList__header">
            <p>CAMPAIGN</p>
            <h3>キャンペーン</h3>
            </div>
        </div>

        <div className="bt_sp">
            <img src="https://media.graphassets.com/bTJDFW63Q2qXhcSuQ4xP" alt="" />
        </div>
        <div className="bt_pc bt_pc1">
            <img src="https://media.graphassets.com/AnDsSN5zTXiFEx312p5F" alt="" />
        </div>
        <div className="teaser__warp2" >
            <div className="teaser__warp2__content">
                <div className='event-data'>
                    <div className="campaign__warp">
                        <h4>{data.campaign.title}</h4>
                        <div className="">
                            <img src={data.campaign.cpimg.url} alt="" />
                        </div>
                        <p>{data.campaign.date}</p>
                        <div className='content' dangerouslySetInnerHTML={{ __html: data.campaign.content.text }} />
                    </div>
                </div>


            </div>
        </div>
        <br />
        <br />


    </div>
    <HomeLink/>
</>
  )
}
