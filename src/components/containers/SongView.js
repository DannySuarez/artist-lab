import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getSongs } from '../../services/ArtistApi';
import SongList from '../songView/SongList';

export default class SongView extends PureComponent {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        artistName: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }


  state = {
    songs: []
  }

  componentDidMount() {
    const { match } = this.props;
    getSongs(match.params.id)
      .then(s => {
        this.setState({ songs: s.recordings });
      });
  }

  render() {
    const { songs } = this.state;
    const { artistName } = this.props.match.params;
    return <SongList songs={songs} artistName={artistName} />;
  }

}
