import Baobab from 'baobab';
import dataStore from 'stores/dataStore';
import appStore from 'stores/appStore';

export default new Baobab({
  data: dataStore,
  app: appStore
});