import * as React from 'react';
// css framework
import { Typography } from '@material-ui/core';
// type of datas
import { PlayersType } from '../../utils/players';
// component
import PlayerStats from '../PlayerStats';

import { useStyles } from './styles';

// type props
type PlayerItemProps = {
  item: PlayersType;
};

const PlayerItem: React.FC<PlayerItemProps> = React.memo(({ item }) => {
  const classes = useStyles('');
  return (
    <>
      <div className={classes.root}>
        <div className={classes.flex}>
          <img src={item.picture} alt={item.shortname} width="150" />
          <div className={classes.content}>
            <div>
              <Typography color="primary" variant="h5">
                {item.firstname} {item.lastname}
              </Typography>
              <Typography color="initial" variant="body2">
                <span className={classes.color}>Sex : </span>
                {item.sex}
              </Typography>
              <Typography color="initial" variant="body2">
                <span className={classes.color}>Country : </span>
                <img src={item.country.picture} alt={item.country.code} width="20" />
                &nbsp; {item.country.code}
              </Typography>
              <PlayerStats data={item.data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default PlayerItem;
