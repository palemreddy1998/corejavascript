//Student class to illustrate setter and getter
class Student{
  //let name;
  //let age;
  //let grade;
  
  constructor(name,age,grade){
    this.name = name;
    this.age = age;
    this.grade = grade; 
  }

  set Name(name){
    this.name=name;
  }
  get Name(){
    return 'Namegetter';
  }
  
  set Age(age){
    this.age=age;
  }
  get Age(){
    return age;
  }
  
  set Grade(grade){
    this.grade=grade;
  }
  get Grade(){
    return grade;
  }

  Student(){
    return this.name+this.age+this.grade;
  }
}

let st = new Student('Reddy1',30,'A');
console.log(st)
st.Name='Reddy2';
st.Age=32;
st.Grade = 'B';
console.log(st)
console.log(st.Name);
