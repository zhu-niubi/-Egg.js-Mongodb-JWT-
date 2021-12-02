import { combineReducers } from 'redux';
import global, { GlobalState } from './global';
import searchTable, { SearchTableState } from '../pages/search-table/redux/reducer';
import login, { UserLoginState } from '../pages/login/redux/reducer';
import categories, { CategoriesState } from '../pages/categories/redux/reducer';
import tags, { TagsState } from '../pages/tags/redux/reducer';
import user, { UserState } from '../pages/user/redux/reducer';


export interface ReducerState {
  global: GlobalState;
  searchTable: SearchTableState;
  login: UserLoginState;
  categories: CategoriesState;
  tags: TagsState;
  user: UserState;
}

export default combineReducers({
  global,
  searchTable,
  login,
  categories,
  tags,
  user
});
