import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getReleases } from '../../services/ArtistApi';
import ReleaseItems from '../artistView/ReleaseItems';

export default class ArtistView extends PureComponent {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        artistName: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    releases: []
  }

  componentDidMount() {
    const { match } = this.props;
    getReleases(match.params.id)
      .then(r => {
        this.setState({ releases: r.releases });
      });
  }

  render() {
    const { releases } = this.state;
    const { artistName } = this.props.match.params;
    return <ReleaseItems releases={releases} artistName={artistName}/>;
  }

}


