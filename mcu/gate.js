// The node-red-mcu-plugin consolidates this node to a noop.
// This definition is only provided for compatibility,
// in case a flow is constructed manually...

module.exports = function(RED) {
    function mcuGate(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg, done) {
            node.send(msg);
            done();
        });
    }
    RED.nodes.registerType("mcu-gate", mcuGate);
}
