// 定义创建接口的请求参数规则
const createRule = {name: 'string', pass: 'string', };
const updateByIdRule = {id: 'int', name: 'string', pass: 'string', }

// 1 获取文章列表，分页，每页几个
exports.index = function* () {
  console.log(this.params);
  const result = yield this.service.news.index(this.params);

  // 设置响应体和状态码
  this.body = result;
  this.status = 201;
};
// 2 根据ID获取文章信息
exports.show = function* () {
  console.log(this.params);
  const result = yield this.service.news.show(this.params);

  // 设置响应体和状态码
  this.body = result;
  this.status = 201;
};

exports.create = function* () {
  console.log(this.params);
  this.validate(createRule);
  const result = yield this.service.news.create(this.params);

  // 设置响应体和状态码
  this.body = result;
  this.status = 201;
};

exports.update = function* () {
  console.log(this.params);
  this.validate(updateByIdRule);
  const result = yield this.service.news.update(this.params);

  // 设置响应体和状态码
  this.body = result;
  this.status = 204;
};
exports.destroy = function* () {
  const result = yield this.service.news.destroy(this.params);
  // 设置响应体和状态码
  this.body = result;
  this.status = 204;
};
