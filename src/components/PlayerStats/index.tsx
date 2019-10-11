import * as React from 'react';
import { Typography } from '@material-ui/core';
import { DataType, getHeight, getWeight, getScore } from '../../utils/players';

import { useStyles } from './styles';

type PlayerStatsProps = {
  data: DataType;
};

const PlayerStats: React.FC<PlayerStatsProps> = React.memo(({ data }) => {
  const classes = useStyles('');
  return (
    <>
      <div className={classes.flex}>
        <div>
          <Typography color="initial" variant="body2">
            Height (M)
          </Typography>
          <Typography color="primary" variant="h6">
            {getHeight(data.height)}
          </Typography>
        </div>
        <div>
          <Typography color="initial" variant="body2">
            Weight (kg)
          </Typography>
          <Typography color="primary" variant="h6">
            {getWeight(data.weight)}
          </Typography>
        </div>
        <div>
          <Typography color="initial" variant="body2">
            Age
          </Typography>
          <Typography color="primary" variant="h6">
            {data.age}
          </Typography>
        </div>
        <div>
          <Typography color="initial" variant="body2">
            Rank
          </Typography>
          <Typography color="primary" variant="h6">
            {data.rank}
          </Typography>
        </div>
        <div>
          <Typography color="initial" variant="body2">
            Win
          </Typography>
          <Typography color="primary" variant="h6">
            {getScore(1, data.last)}
          </Typography>
        </div>
        <div>
          <Typography color="initial" variant="body2">
            Lost
          </Typography>
          <Typography color="primary" variant="h6">
            {getScore(0, data.last)}
          </Typography>
        </div>
      </div>
    </>
  );
});

export default PlayerStats;
