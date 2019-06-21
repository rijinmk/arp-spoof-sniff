console.log('background');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(request);
	console.log(sender);
	if (request) {
		chrome.browserAction.setPopup({
			tabId: sender.tab.id,
			popup: 'danger.html'
		});
	}
});

// chrome.browserAction.onClicked.addListener(function(tab) {
// 	console.log('CLICKED');
// 	let msg = {
// 		txt: 'hello'
// 	};
// 	chrome.tabs.sendMessage(tab.id, msg);
// });

// chrome.tabs.onUpdated.addListener((tabId) => {
// 	setTimeout(() => {
// 		chrome.browserAction.setPopup({
// 			tabId: tabId,
// 			popup: 'test.html'
// 		});
// 	}, 10000);
// });

// setTimeout(function(){
//     chrome.browserAction.setPopup({
//         tabId: tabId,
//         popup: 'nottracking.html'
//     });
// }, 10000);

// setInterval(function() {
// 	window.open('popup.html', 'extension_popup', 'width=300,height=400,status=no,scrollbars=no,resizable=no');
// }, 1000);
