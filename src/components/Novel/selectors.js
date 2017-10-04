import { filterTypes } from './constants';
import { createSelector } from 'reselect';

// returns an array of novel objects
const getNovels = (state) => state.entities.novels.ids.map((id) => state.entities.novels.data[id]);
// returns a single novel object based on prop id
const getNovel = (state, props) => state.entities.novels.data[props.id];

const getFilter = (state) => state.filter;

// returns an array of chapters objects
const getChapters = (state) => state.entities.chapters.ids.map((id) => state.entities.chapters.data[id]);

const getNovelChapters = createSelector(
  getNovel, getChapters,
  (novel, chapters) => (
    chapters.filter((chapter) => chapter.novelId === novel.id)
  )
);

const getNovelChaptersVisible = createSelector(
  getFilter, getNovelChapters,
  (filter, chapters) => {
    if (filter === filterTypes.FILTER_TYPE_ALL) {
      return chapters;
    }
    return chapters.filter((chapter) => chapter.type === filter)  
  }
);

export {
  getNovelChaptersVisible
};
