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
  const { activityCount, questionCount, commentCount, answerCount } = totalData;
  return (
    <div className="contents">
      <div className="first-column">
        <MyPageBlock number={activityCount} text="activityCount" />
        <MyPageBlock number={answerCount} text="answerCount" />
      </div>
      <div className="second-column">
        <MyPageBlock number={questionCount} text="questionCount" />
        <MyPageBlock number={commentCount} text="commentCount" />
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
