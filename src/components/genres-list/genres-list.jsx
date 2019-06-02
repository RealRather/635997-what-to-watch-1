import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';

class GenresList extends PureComponent {
  render() {
    const {activeGenreItem, genres, onGenreLinkClick} = this.props;
    const itemClassName = `catalog__genres-item`;
    return (<React.Fragment> {
      genres.map((genre, index) => {
        return (
          <li
            key={`${genre}-${index}`}
            className= {(activeGenreItem === genre) ? itemClassName + ` catalog__genres-item--active` : itemClassName}
          >
            <a href="#" className="catalog__genres-link" onClick={() => onGenreLinkClick(genre)}>{genre}</a>
          </li>
        );
      })
    }
    </React.Fragment>);
  }
}

GenresList.propTypes = {
  activeGenreItem: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreLinkClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({},
    ownProps, {
      genres: state.genres,
      activeGenreItem: state.genreType
    });

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick: (genre) => dispatch(ActionCreator.getGenreType(genre)),
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
