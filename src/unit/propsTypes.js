import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    children: PropTypes.node,
    groupDates: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.number,
    })),
    rundeDate:PropTypes.arrayOf(PropTypes.shape({
      vlue:PropTypes.string,
      text:PropTypes.string
    })),
    DateNumber:PropTypes.number,
    BinString:PropTypes.string,
    ArrPropTypes:PropTypes.array,
    dateTypes:PropTypes.shape({
      vlue:PropTypes.string,
      textL:PropTypes.string
    })

}