import React, { useEffect, useState } from 'react';
import { getJobList } from '../services/list';
import ListTile from './ListTile';

const Listing = () => {
    const [listData, setListData] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        getJobList()
            .then(data => {
                setListData(data);
                setFilterList(data.data)
                setLoader(false)
            })
    }, [])
    console.log('all data ===>', listData)
    console.log('filterList ===>', filterList)
    console.log('loader ===>', loader)
    return (
        <div className="mainWrap">
            {loader ? 'Loading.....'
                :
                <div className="listWrap">
                    {filterList.map((item, index) => {
                        return <ListTile data={item} key={index} />
                    })
                    }
                </div>
            }
        </div>
    )
}

export default Listing
