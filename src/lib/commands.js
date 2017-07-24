import { push } from 'react-router-redux';
import { RESET, SAVE } from '../actions/bin';
import { toggleOutput } from '../actions/session';
// import { toggleTheme } from '../actions/editor';
import fetch from 'isomorphic-fetch';

export const newBin = {
  title: 'New',
  run: dispatch => {
    dispatch(push('/', { action: { type: RESET } }));
  },
};

export const save = {
  title: 'Save',
  shortcut: null,
  run: dispatch => {
    dispatch({ type: SAVE });
  },
};

export const open = {
  title: 'Open...',
  run: () => {
    console.log('not implemented');
    // dispatch(push('/open'));
  },
};

export const togglePage = {
  title: 'Toggle page output',
  run: dispatch => {
    dispatch(toggleOutput());
  },
};

// export const toggleThemeCmd = {
//   title: 'Toggle dark/light theme',
//   run: dispatch => {
//     dispatch(toggleTheme());
//   },
// };

export const addLibrary = {
  title: 'Add library…',
  run: async () => {
    const res = await fetch('https://api.cdnjs.com/libraries');
    const json = await res.json();
    return json.results
      .map(({ name, latest }) => ({
        title: name,
        url: latest,
      }))
      .sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase());
  },
};

/**
 * Wanted commands:
 *
 * save as template (optionally named)
 * new from template
 * upgrade
 * clone
 * export
 * delete
 * make private
 * add library + search
 * download
 * toggle dark/light theme
 * help / search
 */
