import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/ArtistApi';
import styles from './Lyrics.css';

export default class Lyrics extends PureComponent {

  static propTypes = {
    match: PropTypes.shape ({
      params: PropTypes.shape({
        artistName: PropTypes.string,
        songName: PropTypes.string
      })
    })
  }
  state = {
    lyrics: ''
  }

  componentDidMount() {
    const { match } = this.props;
    getLyrics(match.params.artistName, match.params.songName)
      .then(l => {
        this.setState({ lyrics: l.lyrics });
      });
  }

  render() {
    const { lyrics } = this.state;
    return (
      <>
       <p className={styles.Lyrics}>{lyrics}</p>
      </>
    ); 
  }
  
}
