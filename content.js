var arp_spoofed = 0;

function checkForPIP() {
	var forms = document.getElementsByTagName('form');
	var PIP_regex = /(^127\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)/;
	for (var i = 0; i < forms.length; i++) {
		var form_action = forms[i].getAttribute('action');
		var private_IP_array = form_action.replace(/^(https?|ftp):\/\//, '').match(PIP_regex);
		try {
			for (var j = 0; j < private_IP_array.length; j++) {
				if (private_IP_array[j]) {
					arp_spoofed = 1;
					break;
				}
			}
		} catch (e) {}
	}
	if (arp_spoofed) {
		console.log('You have been ARP Spoofed');
		var html = `
            <style>
                .arp_alert{
                    position: absolute;
                    top:20px;
                    left:20px;
                    font-size: 12px; 
                    padding:8px;
                    background: #FF665A;
                    color: #fff; 
                    z-index:999;
                }
            </style>
            <div class="arp_alert">Your information might be in danger, please change the network</div>
        `;
		document.body.innerHTML += html;
		chrome.runtime.sendMessage(1);
	} else {
		console.log('You are safe');
		chrome.runtime.sendMessage(0);
	}
}

checkForPIP();
setInterval(checkForPIP, 10000);

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
// 	console.log(message.txt);
// });
