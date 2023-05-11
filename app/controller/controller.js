const mongoose = require("mongoose");

// Định nghĩa một cấu trúc cho document sẽ được lưu vào trong DB
const todoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	completed: { type: Boolean, default: false },
});

// Định nghĩa một model đại diện cho DB được chỉ định để tương tác với DB
const Todo = mongoose.model("todos", todoSchema);

// Định nghĩa hàm getTodos để lấy danh sách công việc trong DB
exports.getTodos = async (req, res) => {
	try {
		const todos = await Todo.find({});
		res.send(todos);
	} catch (err) {
		res.status(500).send({ error: err });
	}
};

// Định nghĩa hàm createTask để tạo một công việc mới và lưu vào DB
exports.createTask = async (req, res) => {
	try {
		const todo = new Todo({ title: req.body.title });
		await todo.save();
		res.send(todo);
	} catch (err) {
		res.status(500).send({ error: err });
	}
};

// Định nghĩa hàm updateTask để đánh dấu công việc đã hoàn thành
exports.updateTask = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id);
		todo.completed = req.body.completed;
		await todo.save();
		res.send(todo);
	} catch (err) {
		res.status(500).send({ error: err });
	}
};

// Định nghĩa hàm deleteTask để xóa một công việc
exports.deleteTask = async (req, res) => {
	try {
		return await Todo.findByIdAndDelete(req.params.id);
	} catch (err) {
		res.status(500).send({ error: err });
	}
};

// Định nghĩa hàm deleteAllTask để xóa toàn bộ công việc
exports.deleteAllTask = async (req, res) => {
	try {
		return await Todo.deleteMany();
	} catch (err) {
		res.status(500).send({ error: err });
	}
};

// Định nghĩa hàm deleteAllCompletedTask để xóa toàn bộ công việc đã hoàn thành
exports.deleteAllCompletedTask = async (req, res) => {
	try {
		return await Todo.deleteMany({ completed: true });
	} catch (err) {
		res.status(500).send({ error: err });
	}
};
