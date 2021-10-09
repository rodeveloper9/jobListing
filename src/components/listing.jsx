import React, { useEffect, useState, Fragment } from 'react';
import { getJobList } from '../services/list';
import ListTile from './ListTile';
import Filter from './Filter';

const Listing = () => {
    const [listData, setListData] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [loader, setLoader] = useState(true);
    const [filterObj, setFilterObj] = useState({});
    useEffect(() => {
        getJobList()
            .then(data => {
                setListData(data);
                setFilterList(data.data)
                setLoader(false)
            })
    }, [])

    const handleSelectChange = (selectedValue, type) => {
        setFilterObj({ ...filterObj, [type]: selectedValue });
    }
    useEffect(() => {
        const { data = [] } = listData;
        const filteredData = data.filter((_data) => {
            const { role = '', technology = [], experience = '' } = _data;
            if (filterObj?.role?.value && filterObj?.role?.value !== role) {
                return false;
            }
            if (filterObj?.experience?.value && filterObj?.experience?.value !== experience) {
                return false;
            }
            if (filterObj?.technology) {
                const filteredTech = filterObj?.technology.filter((techData) => {
                    return technology.includes(techData.value);
                })
                if (filteredTech.length === 0) return false
            }
            return true
        })
        setFilterList(filteredData);
    }, [filterObj]);

    return (
        <div className="mainWrap">
            {loader ? 'Loading.....'
                :
                <Fragment>
                    <Filter data={listData} handleChange={handleSelectChange} />
                    <div className="listWrap">
                        {filterList.length ?
                            filterList.map((item, index) => {
                                return <ListTile data={item} key={index} />
                            }) :
                            <h1>No Data Found </h1>
                        }
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default Listing
