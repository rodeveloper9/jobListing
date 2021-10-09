import React from 'react';

const ListTile = ({ data = {}, index }) => {
    const { id = '', company = '', position = '', experience = '', contract = '', location = '', logo, technology = [], ctc = '' } = data;
    return (
        <div className={`listWrap_item job-list${id}`} key={index}>
            <div className="listWrap_left">
                <img src={logo} className="listWrap_left_logo" alt="Company Logo" />
                <div className="listWrap_left_content">
                    <h1 className="listWrap_left_head">{company}</h1>
                    <h2 className="listWrap_left_desc">{position}</h2>
                    <p className="listWrap_left_exp"><span>{experience}</span> | <span>{contract}</span> | <span>{location}</span></p>
                </div>
            </div>
            <div className="listWrap_right">
                <div className="listWrap_right_content">
                    {technology.map((tech, index) => {
                        return (
                            <span className="listWrap_right_content_tech" key={index}>{tech}</span>
                        )
                    })
                    }
                    <span className="listWrap_right_content_ctc">{`${ctc}LPA`}</span>
                </div>
            </div>
        </div>
    )
}

export default ListTile
