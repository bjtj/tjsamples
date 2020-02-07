import { observable, decorate, action } from 'mobx';

let index = 0;

class ObservableListStore {
  
  list = observable([]);
  
  constructor() {
  }

  addListItem (item) {
    console.log('add item:::', item);
    this.list.push({
      name: item, 
      items: [],
      index: index,
    })
    index++;
  }

  removeListItem (item) {
    console.log('remove item:::', item);
    this.list = this.list.filter((l) => {
      return l.index !== item.index;
    })
  }

  addItem(item, name) {
    console.log('add item:::', item, name);
    this.list.forEach((l) => {
      if (l.index === item.index) {
	l.items.push(name);
      }
    })
  }
}


decorate(ObservableListStore, {
  list: observable,
  addListItem: action,
  removeListItem: action,
  addItem: action,
});

export default ObservableListStore;
