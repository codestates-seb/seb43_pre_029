import { StatsStyle } from '../style/MyPageStyle';

const MyPageBlock = ({ number, text }) => {
  return (
    <div className="Block">
      <h3>{number}</h3>
      <p>{text}</p>
    </div>
  );
};

const StateBlock = () => {
  return (
    <div className="contents">
      <div className="first-column">
        <MyPageBlock number={6} text="activity_count" />
        <MyPageBlock number={2} text="answered" />
      </div>
      <div className="second-column">
        <MyPageBlock number={1} text="questions" />
        <MyPageBlock number={3} text="comment" />
      </div>
    </div>
  );
};

const StateContainer = () => {
  return (
    <StatsStyle>
      <h4>Stats</h4>
      <StateBlock />
    </StatsStyle>
  );
};

export default StateContainer;
