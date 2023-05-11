const express = require("express");
const controller = require("../controller/controller");
const router = express.Router();

// định nghĩa route xử lý việc lấy danh sách công việc và thêm công việc
router.route("/")
    .get(controller.getTodos)
    .post(controller.createTask);

// định nghĩa route xử lý việc đánh dấu công việc
router.route("/:id")
    .put(controller.updateTask);
 
// định nghĩa route xử lý việc xóa một công việc
router.route("/deleteTask/:id")
    .delete(controller.deleteTask);

// định nghĩa route xử lý việc xóa tất cả công việc
router.route("/deleteAll")
    .delete(controller.deleteAllTask);

// định nghĩa route xử lý việc xóa tất cả công việc đã đánh dấu
router.route("/deleteAllCompleted")
    .delete(controller.deleteAllCompletedTask);

module.exports = router;