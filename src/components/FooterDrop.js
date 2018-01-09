
import React from 'react'
import FilterDrop from '../containers/FilterDrop'


const FooterDrop = () => (
    <p>
        Show:
        {' '}
        <FilterDrop filter='SHOW_ALL'>
            All
        </FilterDrop>
        {', '}
        <FilterDrop filter='SHOW_ACTIVE'>
            Active
        </FilterDrop>
        {', '}
        <FilterDrop filter='SHOW_COMPLETED'>
            Completed
        </FilterDrop>
    </p>
)


export default FooterDrop
