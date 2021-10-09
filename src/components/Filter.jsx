import React from 'react';
import Select from 'react-select';

const Filter = ({ data = {}, handleChange }) => {
    const { role = [], technology = [], experience = [], filterBackgroundImage = '' } = data;

    const filterStyle = {
        backgroundImage: `url(${filterBackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    const selectOptions = (payload) => {
        return payload.map((item) => {
            return {
                value: item,
                label: item
            }
        })
    }

    return (
        <div className="filterWrap" style={filterStyle}>
            <div className="filterWrap_content">
                <div className="filterWrap_content_item">
                    <label className="filterWrap_content_item_label">Job Role</label>
                    <Select
                        options={selectOptions(role)}
                        onChange={(e) => handleChange(e, 'role')}
                    />
                </div>
                <div className="filterWrap_content_item">
                    <label className="filterWrap_content_item_label">Technology</label>
                    <Select
                        options={selectOptions(technology)}
                        isMulti={true}
                        onChange={(e) => handleChange(e, 'technology')}
                    />
                </div>
                <div className="filterWrap_content_item">
                    <label className="filterWrap_content_item_label">Experience</label>
                    <Select
                        options={selectOptions(experience)}
                        onChange={(e) => handleChange(e, 'experience')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter
