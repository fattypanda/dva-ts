"use strict";
exports.__esModule = true;
var dva_1 = require("dva");
var router_1 = require("./router");
var dva_loading_1 = require("dva-loading");
var dvaLastEffectTime_1 = require("utils/dvaLastEffectTime");
var Model_1 = require("modules/MainWrapper/Model");
var modelList = [
    Model_1["default"]
];
var app = dva_1["default"]({});
// 2. Plugins
app.use(dva_loading_1["default"]({ effects: true }));
app.use(dvaLastEffectTime_1["default"]());
// 3. Model
modelList.forEach(app.model);
// 4. Router
app.router(router_1["default"]);
// 5. Start
app.start('#root');
