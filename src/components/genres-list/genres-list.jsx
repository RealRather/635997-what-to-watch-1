import React from 'react';
import PropTypes from 'prop-types';

const GenresList = ((props) => {
  const {activeGenreItem, genres} = props;
  const itemClassName = `catalog__genres-item`;

  return (
    <React.Fragment>
      {
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
    </React.Fragment>
  );
});

GenresList.defaultProps = {
  activeGenreItem: `All genres`
};

GenresList.propTypes = {
  activeGenreItem: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenresList;
