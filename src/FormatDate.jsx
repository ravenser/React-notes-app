import PropTypes from 'prop-types';
function FormatDate({date}){
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return <p>Invalid date</p>;
      }
    return(<p>{date.toLocaleString('en', {month: 'long'})} {date.getDate()}, {date.getFullYear()}</p>)
}
FormatDate.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  };
export default FormatDate