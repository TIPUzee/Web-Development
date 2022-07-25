
class Person {
	
	constructor (name = 'unknown', age = -1) 
	{
		this.__proto__.m_Name = name;
		this.age = age;
	};
	
	Name() {
		return this.m_Name;
	}

	Age() {
		return this.age;
	}
};

class Student extends Person {
	constructor (name, age) 
	{
		super(name, age);
	}	
};

var s1 = new Student('zeeshan');
console.log(s1.Name());
console.log(s1)