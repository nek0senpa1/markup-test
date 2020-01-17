import React from 'react'
import { Tabs, useTabState, Panel } from '@bumaga/tabs'
import Description from './Description'
import Details from './Details'
import Location from './Location'

const cn = (...args) => args.filter(Boolean).join(' ')

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  )
}


function PageAndNav(props) {

    // console.log('PageAndNav', props.hotelinfo)

    return(
        <Tabs>
            <div className='tabs'>
                <div className="tabholder">
                    <div className='tab-list'>
                        <Tab>DESCRIPTION</Tab>
                    </div>
                    <div className='tab-list'>
                        <Tab>DETAILS</Tab>
                    </div>
                    <div className='tab-list'>
                        <Tab>LOCATION</Tab>
                    </div>
                </div>

            <div className='tab-progress' />

            <Panel>
                <Description descrip={props.hotelinfo.description} />
            </Panel>

            <Panel>
                <Details deets={props.hotelinfo.details} />
            </Panel>

            <Panel>
                <Location pics={props.hotelinfo.media} location={props.hotelinfo.location} />
            </Panel>
            </div>
        </Tabs>
    )
}

export default PageAndNav;
