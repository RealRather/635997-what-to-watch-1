import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class GenresList extends PureComponent {
  render() {
    const {activeGenreItem, genres} = this.props;
    const itemClassName = `catalog__genres-item`;
    return (<React.Fragment> {
      genres.map((genre, index) => {
        return (
          <li
            key={`${genre}-${index}`}
            className= {(activeGenreItem === genre) ? itemClassName + ` catalog__genres-item--active` : itemClassName}
          >
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })
    }
    </React.Fragment>);
  }
}

GenresList.defaultProps = {
  activeGenreItem: `All genres`
};

GenresList.propTypes = {
  activeGenreItem: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({},
    ownProps, {
      genres: state.genres,
      activeGenreItem: state.genreType
    });

export {GenresList};
export default connect(mapStateToProps)(GenresList);
