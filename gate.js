// *****
// 
// @ralphwetzel/node-red-mcu-gate
// 
// Copyright 2023 / Ralph Wetzel
// License: MIT
//
// *****

module.exports = function(RED) {

    function gate(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg, send, done) {
            // block in standard Node-RED
            done();
            return;
        });

        node.on("build4mcu", function(n) {
            // Let's claim to be a junction node!
            // In consequence, the optimization algorithm will eliminate us...
            n.type = "junction";
            return;
        });
    }

    RED.nodes.registerType("mcu-gate",gate);
    registerMCUModeType("mcu-gate", "mcu-gate");
}