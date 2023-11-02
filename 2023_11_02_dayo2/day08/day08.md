# proxy对象

Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

# set数组

它类似于数组，但是成员的值都是唯一的，没有重复的值。

`Set`本身是一个构造函数，用来生成 Set 数据结构。

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。

- `Set.prototype.size`：返回`Set`实例的成员总数。

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。

- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。

- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。

- `Set.prototype.clear()`：清除所有成员，没有返回值。

- # 

# **map**

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。
- 