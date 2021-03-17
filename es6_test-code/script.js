class First{
    hello(){
        console.log('kekw я метод родаков');
    }
}

class Second extends First{
    hello(){
        super.hello();
        console.log('я твой ребенок <3');
    }
}

const obj = new Second();
obj.hello();