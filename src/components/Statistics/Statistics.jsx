import PropTypes from "prop-types";
import { StatsWrapper, Title, StatList, Item, Label, Percent } from './Statistics.styled';


const getRandomColor = () => {
  let color = Math.floor(Math.random()*16777215).toString(16);

  if (color.length < 6) {
    color = getRandomColor();
  }

  return color;
}

export default function Statistics({ title, stats }) {
  return (
    <StatsWrapper>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: `#${getRandomColor()}`}}>
              <Label>{label}</Label>
              <Percent>{percentage}%</Percent>
            </Item>
          );
        })}
      </StatList>
    </StatsWrapper>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number
    }
  )),
};
