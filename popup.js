/*global chrome*/

// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);

var tabId;

var hightCfg = {
  showInfo: true,
  showStyles: true,
  contentColor: { r: 155, g: 11, b: 239, a: 0.7 },
};

window.yourGlobalVariable = false;

// window?.addEventListener("unload", function () {
//   chrome?.debugger?.detach({ tabId: tabId });
// });

// chrome?.runtime?.sendMessage({ name: "message" }, (response) => {
//   console.log(response, "responseeeeee");

//   // window.postMessage({ type: 'FROM_PAGE', text: response }, '*')
//   // tabId = response?.sender?.tab?.id

//   // window?.addEventListener('load', function () {
//   //     chrome.debugger.attach({ tabId: tabId }, '1.0', function () {
//   //         chrome?.debugger?.sendCommand({ tabId: tabId }, 'DOM.enable')
//   //         chrome?.debugger?.sendCommand({ tabId: tabId }, 'Overlay.enable')
//   //         chrome.debugger.sendCommand(
//   //             { tabId: tabId },
//   //             'Overlay.setInspectMode',
//   //             { mode: 'searchForNode', highlightConfig: hightCfg }
//   //         )

//   //         chrome.debugger.sendCommand(
//   //             { tabId: tabId },
//   //             'Runtime.evaluate',
//   //             {
//   //                 expression:
//   //                     'console.log(document.body); inspect(document.body);',
//   //             },
//   //             function () {
//   //                 console.log('Result:', arguments)
//   //             }
//   //         )
//   //     })

//   //     chrome?.debugger?.onEvent?.addListener(onEvent)

//   //     document
//   //         ?.getElementById('btn_inspect')
//   //         ?.addEventListener('click', function () {
//   //             chrome.debugger.sendCommand(
//   //                 { tabId: tabId },
//   //                 'Overlay.setInspectMode',
//   //                 { mode: 'searchForNode', highlightConfig: hightCfg }
//   //             )
//   //         })
//   // })
// });

function onEvent(debuggeeId, message, params) {
  console.log("onEvent ..." + message);
  if (tabId != debuggeeId.tabId) return;

  if (message == "Network.inspectNodeRequested") {
    console.log("update element");
  }
}

window.addEventListener("message", (event) => {
  // Only accept messages from the same frame
  console.log(event, "workingDeaddd");

  console.log("dskjkjsd", event.data);

  if (event.data.type == "FROM_PAGE") {
    window.yourGlobalVariable = true;
    // if (window.yourGlobalVariable == true) {
    //   highLightSeleection();
    // }
  }
  // if (event.source !== window) {
  //     return
  // }

  var message = event.data;

  // Only accept messages that we know are ours
  // if (
  //   typeof message !== "object" ||
  //   message === null ||
  //   (!!message.source && message.source !== "dataaccessgateway-agent")
  // ) {
  //   return;
  // }
  // console.log(message, "duell330");
  // if (message.type === "FROM_PAGE") {
  //   console.log(chrome, "enteredd");
  //   chrome?.runtime?.sendMessage({ name: "message" }, (response) => {
  //     console.log(response, "fdkjfddjdfkd");
  //     window.postMessage(
  //       { type: "FROM_EXTENSION_PAGE", text: response?.sender },
  //       "*"
  //     );
  //     // tabId = response?.sender?.tab?.id
  //   });

  //   console.log(chrome, "senttttttttttttttt");
  // }
});

// document.body.addEventListener('click', function (ev) {
//     console.log(ev)
//     console.log(ev.toElement)

//     var xpath = window?.getElementXpath(ev.toElement)
//     console.log(xpath)
// })

console.log(window, "akkkajkka");
// window?.onmouseenter(function(event) {
//     event.target.addClass("el-selection");
// });

// window?.onmouseenter(function(event) {
//     event.target.removeClass("el-selection");
// });

// window?.onclick(function(event) {
//     console.log("selected: ", event.target);
//     return false;
// });

// const showModal = () => {
//   document.body.innerHTML +=
//     "<dialog>This is a dialog.<br><button>Close</button></dialog>";
//   var dialog = document.querySelector("dialog");
//   dialog.querySelector("button").addEventListener("click", function () {
//     dialog.close();
//   });
//   dialog.showModal();
// };

const showModal = () => {
  const modal = document.createElement("div");
  modal.setAttribute(
    "style",
    `
      height:max-content;
      width: 450px;
      border: none;
      top:350px;
      border-radius:5px;
      background-color:blue;
      position: fixed; 
      margin: 10px 10px
      `
  );

  // modal.setAttribute(
  //   "style",
  //   `
  // height:450px;
  // border: none;
  // top:150px;
  // border-radius:20px;
  // background-color:white;
  // position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
  // `
  // );
  // modal.innerHTML = `<iframe id="popup-content"; style="height:100%"></iframe>
  // <div style="position:absolute; top:0px; left:5px;">
  // <button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
  // </div>`;

  modal.innerHTML = `
  <div style="border: 2px solid red; display:flex; flex-direction: column; row-gap: 15px; color: white; padding: 1rem 1rem">
    <div style="width: 100%; display:flex; justify-content: space-between"><div <img style="width: 50%; height: 50%" src="./logo.png" alt="Logo" /> </div><div><b>ROBOMOTION WEB INSPECTOR</b> </div></div>
    <div style="width: 100%"><input type='text' name="myInput" id="xpath-input" style="width: 100%; color: black"/> </div>
    <div style="display:flex; width: 100% ; justify-content: space-between"><div>COUNT: 1</div> <div> <button>Select</button> <button id="closebtn">Cancel</button> </div>  </div>
    <table>
      <tr>
        <th style="border: 1px solid black">Attribute Name</th>
        <th style="border: 1px solid black">Attribute Value</th>
        <th style="border: 1px solid black">Select</th>
      </tr>
      <tr>
        <td style="border: 1px solid black">Class</td>
        <td style="border: 1px solid black">yuRuf</td>
        <td style="border: 1px solid black"><input type="checkbox"/></td>
      </tr>
    </table>
   
  </div>
  `;

  // <div style="display:flex; width: 100%; justify-content: space-around"><div style="border: 1px solid black">Attribute Name</div><div style="border: 1px solid black">Attribute Value</div> <div style="border: 1px solid black">Select</div></div>
  // <div style="display:flex; width: 100%; justify-content: space-around"><div style="border: 1px solid black">Class</div><div style="border: 1px solid black">uyru</div> <div style="border: 1px solid black"><input type='checkbox'/> </div></div>

  document.body.appendChild(modal);
  document
    .getElementById("closebtn")
    .addEventListener("click", console.log("jjdjd"));
  const btnc = document.getElementById("closebtn");
  console.log(btnc, "djsdjsjsjsj");
  // const dialog = document.querySelector("dialog");
  // dialog.showModal();
  // const iframe = document.getElementById("popup-content");
  // iframe.src = chrome.extension.getURL("index.html");
  // iframe.frameBorder = 0;
  // const xpathInput = document.getElementById("xpath-input");
  const out1 = document.querySelector('input[name="myInput"]');
  const out2 = document.getElementById("xpath-input");
  console.log(out1, out2, "kdkdkdkdk");
  // document.querySelector('input[name="myInput"]').value = "Whatever you want!";
  // document
  //   .getElementById("xpath-input")
  //   .setAttribute("value", "My default value");
  // document.getElementById("xpath-input").value = "My value";
  // dialog.querySelector("close-inspector").addEventListener("click", () => {
  //   dialog.close();
  // });
};

function get_XPath(elt) {
  {
    var path = "";
    for (; elt && elt.nodeType == 1; elt = elt.parentNode) {
      var idx = $(elt.parentNode).children(elt.nodeName).index(elt) + 1;
      idx > 1 ? (idx = "[" + idx + "]") : (idx = "");
      path = "/" + elt.nodeName.toLowerCase() + idx + path;
    }
    return path;
  }
}

function addHighlight(target) {
  target.classList.add("highlighted");
}

function removeHighlight(target) {
  target.classList.remove("highlighted");
}

var enabled = true;

function onHighLightClick(target) {
  console.log(target, "naimmmmm");
  return target;
}

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function message_broadcast(message, xpath) {
  console.log(message, xpath, "djdjdjjdjd");
  document.getElementById("xpath-input").setAttribute("value", xpath);
  var element = document.getElementById("xpath-input");
  var event = new Event("change");
  element.dispatchEvent(event);
  document.getElementById("xpath-input").setAttribute("value", xpath);

  localStorage.setItem("message", JSON.stringify(message));
  const channel = new BroadcastChannel("app-data");
  channel.postMessage(message);

  postData("http://localhost:5000/htmlpost", {
    html: message,
    xpath: xpath,
  }).then((data) => {
    console.log(data, "postHTML"); // JSON data parsed by `data.json()` call
  });

  // chrome?.runtime?.sendMessage({ name: message }, (response) => {
  //   console.log(response, "responseeeeee");
  // });

  window.postMessage({ type: "FROM_EXTENSION_PAGE", html: message }, "*");
}

  window.addEventListener("mouseover", function (e) {
    addHighlight(e.target);
    window.addEventListener("click", function (e) {
      showModal();
      const returnHTML = onHighLightClick(e.target);
      const innerHtml = returnHTML.innerHTML;
      e.stopPropagation();
      e.stopImmediatePropagation();
      const xpath = get_XPath(e.target);
      message_broadcast(innerHtml, xpath);
      const xpathInputT = document.getElementById("xpath-input");
      console.log(xpathInputT, "xpathInputTxpathInputTxpathInputT");
      xpathInputT.value = xpath;
    });
  });

  window.addEventListener("mouseout", function (e) {
    removeHighlight(e.target);

    window.addEventListener("click", function (e) {
      showModal();
      const returnHTML = onHighLightClick(e.target);
      const innerHtml = returnHTML.innerHTML;
      e.stopPropagation();
      e.stopImmediatePropagation();
      const xpath = get_XPath(e.target);
      message_broadcast(innerHtml, xpath);
      document.getElementById("xpath-input").value = xpath;
    });
  });


function hello() {
  var name = document.getElementById("info").value;
  if (name) {
    alert("Hello " + name);
  }
}

window.addEventListener("load", (event) => {
  document.getElementById("btn").addEventListener("click", hello);
});
