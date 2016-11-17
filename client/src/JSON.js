//JSON不支持undefined，变量，函数或对象实例
//JSON字符串必须使用双引号
//JavaScript字面量
var person = {
	name: "Tom",
	age: 29
}
//JSON对象, 对象的属性必须加双引号
/*{
	"name": "Tome",
	"age": 29
}*/

//解析与序列化
//序列化 
var personText = JSON.stringify(person); //{"name":"Tom","age": 29}, 不包含任何空格和缩进
var personCody = JSON.parse(personText);
//序列化的顺序
//1.如果存在toJSON()方法而且能通过它取得有效的值，则调用该方法。否则，按默认顺序执行序列化
//2.如果提供第二个参数，应用这个函数过滤器。传入函数过滤器的值是第1步返回的值。
//3.对第2步返回的每个值进行相应的序列化
//4.如果提供了第三个参数，执行相应的格式化