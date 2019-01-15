const visit = require("unist-util-visit");

module.exports = ({ markdownAST }) => {
    visit(markdownAST, "code", node => {
        if (node.value.startsWith("//display-name{")) {
            let [, label, value] = node.value.match(/^\/\/display-name{(.+)}\n([\s\S]*)/);

            node.label = label;
            node.value = value;
        } else if (node.lang) {
            const [lang, label] = node.lang.split(" ");

            node.lang = lang;
            node.label = label || lang;
        }

        return node;
    });
};
