/**
 * Created by aayusharora on 10/25/17.
 */

function decorate(label: string) {
    return function(target, key) {
        Object.defineProperty(target, key,{
            configurable: true,
            get : function() {
                return label;
            }
        })
    }
}

class A {
    @decorate('hello')
    name: string;
    constructor(name: string ) {
        this.name = name;
    }
    display() {
        console.log(this.name)
    }
}

var a = new A('ram');
a.display();