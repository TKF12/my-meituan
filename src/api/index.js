import instance from './axios';

export default {
  getNavList() {
    return instance.get('/index/nav.json');
  },
  getSearchList() {
    return instance.get('/header/search.json');
  },
  getCityList() {
    return instance.get('/city/cityList.json');
  },
  getHot() {
    return instance.get('/city/hot.json');
  },
  getRecents() {
    return instance.get('/city/recents.json');
  },
  getProvince() {
    return instance.get('/city/province.json');
  },
  getGoodList() {
    return instance.get('/list/goodsList.json');
  },
  getRecommend() {
    return instance.get('/list/recommend.json');
  },
};
