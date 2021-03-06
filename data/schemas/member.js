var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
		"id":String,/*id*/
		"type":Number,/*类型,1普通用户2管理用户*/
		"userName":String,/*用户名*/
		"image":String,/*头像*/
		"sex":String,/*性别*/
		"place":String,/*地址*/
		"phone":String,/*手机*/
		"email":String,/*邮箱*/
		"name":String,/*真实姓名*/
		"contacts":String,/*联系人*/
		"contactsPhone":String,/*联系人电话*/
		"record":String,/*学历*/
		"university":String,/*毕业院校*/
		"job":String,/*职位*/
		"company":String/*公司*/
	})
module.exports = MemberSchema;