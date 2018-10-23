function graph2text(nodeList, edgeList, title) {
    function tree2text(headNode, prefix, outputObj) {
        prefix += '\t' + headNode.name;
        var isFirst = true;
        for (var index of headNode.outEdges) {
            var edge = edgeList[index];
            if (edge.type != 'INTENT' && outputObj.visitedEdges.indexOf(index) < 0) {
                outputObj.visitedEdges.push(index);
                var toAdd = isFirst ? prefix : prefix.replace(/[^\t]+/g, '');
                isFirst = false;
                if (edge.name.length > 0) {
                    toAdd += '\t' + edge.name;
                }
                tree2text(nodeList[edge.outNode], toAdd, outputObj);
            }
        }
        if (isFirst) {
            // console.log(prefix + '\n');
            outputObj.text += prefix + '\n';
        }
    }

    var groups = new Map();
    for (var edge of edgeList) {
        if (edge.type == 'INTENT') {
            if (!groups.has(edge.name)) {
                groups.set(edge.name, []);
            }
            groups.get(edge.name).push(edge);
        }
    }
    title = title || 'begin_scene';
    var outputObj = {
        text: title + '\n',
        visitedEdges: []
    };
    for (var [intent, edges] of groups) {
        var isFirst = true;
        for (var edge of edges) {
            var toAdd = '\t' + (isFirst? intent : '');
            isFirst = false;
            toAdd += '\t' + nodeList[edge.inNode].name;
            tree2text(nodeList[edge.outNode], toAdd, outputObj);
        }
        // console.log('\n');
        outputObj.text += '\n';
    }
    // console.log(outputObj.text);
    outputObj.text += 'end_of_scene\n'
    return outputObj.text;
}

function saveTextToFile(text, fileName) {
    var textBlob = new Blob([text], {type:'text/plain'});
    var downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    // downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textBlob);
        downloadLink.onclick = function (event) {
            event = event || window.event;
            document.body.removeChild(event.target);
        };
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}

export {graph2text, saveTextToFile}
