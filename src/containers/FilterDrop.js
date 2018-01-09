
import { connect } from 'react-redux'
import { setVisibilityFilter} from '../actions' 
import SelectDrop from '../components/SelectDrop'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.setVisibilityFilter
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectDrop)


export default FilterLink