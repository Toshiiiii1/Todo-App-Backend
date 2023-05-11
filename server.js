const express = require("express");
const mongoose = require("mongoose");
const route = require("./app/route/route");

const app = express();

// Kết nối với cơ sở dữ liệu MongoDB
mongoose
	.connect("mongodb://127.0.0.1:27017/todo_list")
	.then(() => console.log("Đã kết nối với MongoDB"))
	.catch((err) => console.error("Lỗi kết nối với MongoDB:", err));

// Đọc dữ liệu từ request body -> JSON
app.use(express.json());

// Sử dụng các route quản lý các công việc
app.use("/api/todos", route);

// Khởi động server
const port = 3002;
app.listen(port, () => {
	console.log(`Server đang lắng nghe trên cổng ${port}`);
});
