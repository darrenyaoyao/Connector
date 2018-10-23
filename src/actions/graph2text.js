var nodeList = [
    {
        name: 's_Any',
        type: 'state',
        inEdges: [],
        outEdges: [0]
    },
    {
        name: 'f_update_musiclang',
        type: 'function',
        inEdges: [0],
        outEdges: [1, 2]
    },
    {
        name: 'f_recommend_by_musiclang',
        type: 'function',
        inEdges: [1],
        outEdges: [3, 4]
    },
    {
        name: 'f_update_songtag',
        type: 'function',
        inEdges: [2],
        outEdges: []
    },
    {
        name: 's_recommend_confirmation_musiclang',
        type: 'state',
        inEdges: [3],
        outEdges: [5]
    },
    {
        name: 's_done',
        type: 'state',
        inEdges: [4],
        outEdges: []
    },
    {
        name: 's_recommend_confirmation_songtag',
        type: 'state',
        inEdges: [],
        outEdges: [6]
    },
    {
        name: 's_recommend_confirmation_singer',
        type: 'state',
        inEdges: [],
        outEdges: [7]
    },
    {
        name: 's_recommend_confirmation_song',
        type: 'state',
        inEdges: [],
        outEdges: [8]
    }
]

var edgeList = [
    {
        name: '智能互动-负面情感反馈',
        type: 'intent',
        inNode: 0,
        outNode: 1
    },
    {
        name: '1',
        type: 'function_output',
        inNode: 1,
        outNode: 2
    },
    {
        name: '0',
        type: 'function_output',
        inNode: 1,
        outNode: 3
    },
    {
        name: 'SUCCESS',
        type: 'function_output',
        inNode: 3,
        outNode: 4
    },
    {
        name: 'ERROR',
        type: 'function_output',
        inNode: 3,
        outNode: 5
    },
    {
        name: '通用-肯定',
        type: 'intent',
        inNode: 4,
        outNode: 5
    },
    {
        name: '通用-肯定',
        type: 'intent',
        inNode: 6,
        outNode: 5
    },
    {
        name: '通用-肯定',
        type: 'intent',
        inNode: 7,
        outNode: 5
    },
    {
        name: '通用-肯定',
        type: 'intent',
        inNode: 8,
        outNode: 5
    }
]

function graph2text(nodeList, edgeList, title) {
    console.log(nodeList)
    console.log(edgeList)
    function tree2text(headNode, prefix, outputObj) {
        prefix += '\t' + headNode.name;
        var isFirst = true;
        for (var index of headNode.outEdges) {
            var edge = edgeList[index];
            if (edge.type != 'INTENT') {
                var toAdd = isFirst ? prefix : prefix.replace(/[^\t]+/g, '--');
                isFirst = false;
                tree2text(nodeList[edge.outNode], toAdd + '\t' + edge.name, outputObj);
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
    var outputObj = { text: title + '\n' };
    for (var [intent, edges] of groups) {
        var isFirst = true;
        for (var edge of edges) {
            var toAdd = '--\t' + (isFirst? intent : '--');
            isFirst = false;
            tree2text(nodeList[edge.outNode], toAdd + '\t' + nodeList[edge.inNode].name, outputObj);
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
        // downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}

export {graph2text, saveTextToFile}
