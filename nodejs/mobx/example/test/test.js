import { observable, reaction, computed, autorun, decorate, action, transaction } from 'mobx';
const util = require('util');

describe('mobx', function () {

    // observable
    describe('observable', function () {

	console.log(' == observable ==');
	
        const calculator = observable({
	    a: 1,
	    b: 2
	});
    });

    // reaction
    describe('reaction', function () {

	console.log(' == reaction ==');
	
        const calculator = observable({
	    a: 1,
	    b: 2
	});

	reaction(
	    () => calculator.a,
	    (value, reaction) => {
		console.log(`a 값이 ${value} 로 바뀌었네요!`);
	    }
	);

	reaction(
	    () => calculator.b,
	    value => {
		console.log(`b 값이 ${value} 로 바뀌었네요!`);
	    }
	);

	calculator.a = 10;
	calculator.b = 20;
    });

    // computed
    describe('computed', function () {

	console.log(' == computed ==');
	
        const calculator = observable({
	    a: 1,
	    b: 2
	});

	reaction(
	    () => calculator.a,
	    (value, reaction) => {
		console.log(`a 값이 ${value} 로 바뀌었네요!`);
	    }
	);

	reaction(
	    () => calculator.b,
	    value => {
		console.log(`b 값이 ${value} 로 바뀌었네요!`);
	    }
	);

	const sum = computed(() => {
	    console.log('계산중이에요!');
	    return calculator.a + calculator.b;
	});

	sum.observe(() => calculator.a);
	sum.observe(() => calculator.b);

	calculator.a = 10;
	calculator.b = 20;

	console.log(sum.value);
	console.log(sum.value);

	calculator.a = 20;

	console.log(sum.value);
    });

    // autorun
    describe('autorun', function () {

	console.log(' == autorun ==');
	
        const calculator = observable({
	    a: 1,
	    b: 2
	});

	const sum = computed(() => {
	    console.log('계산중이에요!');
	    return calculator.a + calculator.b;
	});

	autorun(() => console.log(`a 값이 ${calculator.a} 로 바뀌었네요!`));
	autorun(() => console.log(`b 값이 ${calculator.b} 로 바뀌었네요!`));
	autorun(() => sum.get());

	calculator.a = 10;
	calculator.b = 20;

	console.log(sum.value);
	console.log(sum.value);

	calculator.a = 20;

	console.log(sum.value);
    });

    // class
    describe('class', function () {
	console.log(' == class ==');

	class GS25 {
	    
	    constructor() {
		this.basket = [];
	    }
	    get total() {
		console.log('계산중입니다..!');
		return this.basket.reduce((prev, curr) => prev + curr.price, 0);
	    }

	    select(name, price) {
		this.basket.push({ name, price });
	    }
	}
	
	decorate(GS25, {
	    basket: observable,
	    total: computed,
	});

	const gs25 = new GS25();
	autorun(() => gs25.total);
	gs25.select('물', 800);
	console.log(gs25.total);
	gs25.select('물', 800);
	console.log(gs25.total);
	gs25.select('포카칩', 1500);
	console.log(gs25.total);
    });

    // action
    describe('action', function () {
	
	console.log(' == action ==');

	// 이 action 을 사용함에 있어서의 이점은 나중에 개발자도구에서 변화의 세부 정보를 볼 수 있고,
	// 변화를 한꺼번에 일으켜서 변화가 일어날 때 마다 reaction 들이 나타나는것이 아니라,
	// 모든 액션이 끝나고 난 다음에서야 reaction 이 나타나게끔 해줄 수 있습니다.

	class GS25 {
	    
	    constructor() {
		this.basket = [];
	    }
	    get total() {
		console.log('계산중입니다..!');
		return this.basket.reduce((prev, curr) => prev + curr.price, 0);
	    }

	    select(name, price) {
		this.basket.push({ name, price });
	    }
	}
	
	decorate(GS25, {
	    basket: observable,
	    total: computed,
	    select: action,
	});

	const gs25 = new GS25();
	autorun(() => gs25.total);
	gs25.select('물', 800);
	console.log(gs25.total);
	gs25.select('물', 800);
	console.log(gs25.total);
	gs25.select('포카칩', 1500);
	console.log(gs25.total);
    });

    // transaction
    describe('transaction', function () {
	
	console.log(' == transaction ==');

	class GS25 {
	    
	    constructor() {
		this.basket = [];
	    }
	    
	    get total() {
		console.log('계산중입니다..!');
		return this.basket.reduce((prev, curr) => prev + curr.price, 0);
	    }

	    select(name, price) {
		this.basket.push({ name, price });
	    }
	}

	decorate(GS25, {
	    basket: observable,
	    total: computed,
	    select: action,
	});

	const gs25 = new GS25();
	autorun(() => gs25.total);
	autorun(() => {
	    if (gs25.basket.length > 0) {
		console.log(util.inspect(gs25.basket[gs25.basket.length - 1], {depth: null, getters: true}));
	    }
	});
	
	// gs25.select('물', 800);
	// gs25.select('물', 800);
	// gs25.select('포카칩', 1500);
	// console.log(gs25.total);
	
	transaction(() => {
	    gs25.select('물', 800);
	    gs25.select('물', 800);
	    gs25.select('포카칩', 1500);
	});
	console.log(gs25.total);
    });

    // decorator
    describe('decorator', function () {
	
	console.log(' == decorator ==');

	class GS25 {

	    // bascket = [];
	    
	    constructor() {
	    	this.basket = [];
	    }

	    @computed
	    get total() {
		console.log('계산중입니다..!');
		return this.basket.reduce((prev, curr) => prev + curr.price, 0);
	    }

	    @action
	    select(name, price) {
		this.basket.push({ name, price });
	    }
	}

	decorate(GS25, {
	    basket: observable,
	//     total: computed,
	//     select: action,
	});

	const gs25 = new GS25();
	autorun(() => gs25.total);
	autorun(() => {
	    if (gs25.basket.length > 0) {
		console.log(util.inspect(gs25.basket[gs25.basket.length - 1], {depth: null, getters: true}));
	    }
	});
	
	// gs25.select('물', 800);
	// gs25.select('물', 800);
	// gs25.select('포카칩', 1500);
	// console.log(gs25.total);
	
	transaction(() => {
	    gs25.select('물', 800);
	    gs25.select('물', 800);
	    gs25.select('포카칩', 1500);
	});
	console.log(gs25.total);
    });
});


