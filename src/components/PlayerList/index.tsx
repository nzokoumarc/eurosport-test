import * as React from 'react';
import axios from 'axios';

// css framework
import { Typography } from '@material-ui/core';
// type
import { PlayersType } from '../../utils/players';

// component
import PlayerItem from '../PlayerItem';

// styles
import { useStyles } from './styles';

export const endpoint: string =
  'https://eurosportdigital.github.io/eurosport-react-native-developer-recruitment/docs/headtohead.json';

const PlayerList: React.FC<{}> = () => {
  const classes = useStyles('');

  const [players, setPlayers] = React.useState([]); // initialise state of players
  const [loading, setLoading] = React.useState(false); // initialise state of loading

  // hooks
  React.useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        // setstate
        setPlayers(response.data.players);
        setLoading(true);
      })
      .catch((e) => {
        throw e;
      });
  }, []);

  return (
    <div className={classes.root}>
      {!loading && (
        <Typography variant="body1" color="primary" align="center">
          ...loading
        </Typography>
      )}
      {loading && (
        <>
          <Typography variant="h2" color="primary">
            JOUEURS
          </Typography>
          {players.map((item: PlayersType, index: number) => (
            <PlayerItem item={item} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default PlayerList;
