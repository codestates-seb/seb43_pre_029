import { StatsStyle } from '../style/MyPageStyle';

const MyPageBlock = ({ number, text }) => {
  return (
    <div className="Block">
      <h3>{number}</h3>
      <p>{text}</p>
    </div>
  );
};

const StateBlock = ({ totalData }) => {
  const { activity_count, question_count, comment_count, answer_count } = totalData;

  return (
    <div className="contents">
      <div className="first-column">
        <MyPageBlock number={activity_count} text="activity_count" />
        <MyPageBlock number={answer_count} text="answered" />
      </div>
      <div className="second-column">
        <MyPageBlock number={question_count} text="questions" />
        <MyPageBlock number={comment_count} text="comment" />
      </div>
    </div>
  );
};

const StateContainer = ({ totalData }) => {
  return (
    <StatsStyle>
      <h4>Stats</h4>
      <StateBlock totalData={totalData} />
    </StatsStyle>
  );
};

export default StateContainer;
