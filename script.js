
	type="text/javascript"
		// VOLUME
		var volumeSlider = document.getElementById("volumeSlider"); // the volume slider 
		var volumeIndicator = document.getElementById("volumeIndicator"); // the volume index
		var btnSetVolume = document.getElementById("btnVolSet"); // hidden button to submit the form

		// BASE
		var baseSlider = document.getElementById("baseSlider"); // the base slider 
		var baseIndicator = document.getElementById("baseIndicator"); // the base index
		var btnSetBase = document.getElementById("btnBaseSet"); // hidden button to submit the form

		// STATIONS
		var stationDropDownMenu = document.getElementById("station");
		var btnSetStation = document.getElementById("btnStationSet");
		var selectedStationIndex;

		// MAC ADDRESS
		var macAddressField = document.getElementById("txtMAC");
		var macAddressField2 = document.getElementById("machineMacAddress");
		var macAddressInvalidWarning = document.getElementById("MacAddressInvalidWarning");
		var btnSetMac = document.getElementById("btnSaveMAC");

		// MACHINE INFORMATION
		var machineMacAddress = document.getElementById("machineMacAddress");
		var machineVolume = document.getElementById("machineVolume");
		var machineBase = document.getElementById("machineBase");
		var machineStations = document.getElementById("machineStation");

		// load machine mac
		function loadMachineMacAddress(){
			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				console.log("Machine Mac Address loaded");
				window.localStorage["MACAddress"] = machineMacAddress.value;		 			
			}
		}
		
		// load machine base
		function loadMachineBase(){
			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				console.log("Machine Base Address loaded");
				window.localStorage["base"] = machineBase.value;		 			
			}
		}

		// load machine volume
		function loadMachineVolume(){
			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				console.log("Machine Volume Address loaded");
				window.localStorage["volume"] = machineVolume.value;		 			
			}
		}

		// load machine station
		function loadMachineStation(){
			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				console.log("Machine Station Address loaded");
				window.localStorage["station"] = machineStations.value;		 			
			}
		}

		// perform volumne change in machine after user releases the slider
		volumeSlider.onmouseup = function() {
			var paddingZero = 0;
			var paddingString = paddingZero.toString();
			var volumeString = this.value.toString();
			if(this.value < 10){
				volumeIndicator.innerHTML = paddingString.concat(volumeString);
			}else{
				volumeIndicator.innerHTML = volumeString;
			}

			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				// set volume in loclaStorage
				var storage=window.localStorage;
				storage["volume"] = this.value;
			}
			// adjust volume in the machine
			adjustVolume(this.value);
		}

		// update the volumeIndicator whenever the slider has value change, so that the webpage looks responsive
		volumeSlider.oninput = function(){
			var paddingZero = 0;
			var paddingString = paddingZero.toString();
			var volumeString = this.value.toString();
			if(this.value < 10){
				volumeIndicator.innerHTML = paddingString.concat(volumeString);
			}else{
				volumeIndicator.innerHTML = volumeString;
			}
		}

		// call when page loads
		function initVolume(){
			console.log("initVolume called");
			// check if the browser support localStorage 
			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				var storage=window.localStorage;
				// check if the page is loaded in the browser at the first time, create a variable to store the volume
				if(localStorage.getItem("volume") === null){
					console.log("volume is not created, initalized");
					storage["volume"] = 6;		
					adjustVolume(localStorage.getItem("volume"));
					volumeSlider.value = localStorage.getItem('volume').toString();				
				}else{
				// if the page is previously loaded (reloaded in the brwoser), set the volume back to previously defined value
					volumeSlider.value = localStorage.getItem('volume').toString();
					console.log("volume is set back to" + localStorage.getItem('volume'));
					var volumeString = localStorage.getItem('volume').toString();
					volumeIndicator.innerHTML = volumeString;
					
				}
			}
		}

		// adjust volume in the machine
		function adjustVolume(volume){
			console.log("set volume to "+volume);
			var storage=window.localStorage;
			if(this.volume != storage["volume"]){
				btnSetVolume.click();
			}else{
				console.log("volume is not changed");
			}
		}

		// perform base change in machine after 
		baseSlider.onmouseup = function(){
			var paddingZero = 0;
			var paddingString = paddingZero.toString();
			var baseString = this.value.toString();
			if(localStorage.getItem('volume') < 10){
				baseIndicator.innerHTML = paddingString.concat(baseString);
			}else{
				baseIndicator.innerHTML = baseString;
			}

			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				// set base in loclaStorage
				var storage=window.localStorage;
				storage["base"] = this.value;
			}
			// adjust volume in the machine
			adjustBase(this.value);
		}

		// update the baseIndicator whenever the slider has value update, so that the wbpages 
		baseSlider.oninput = function(){

			var paddingZero = 0;
			var paddingString = paddingZero.toString();
			var baseString = this.value.toString();
			if(localStorage.getItem('volume') < 10){
				baseIndicator.innerHTML = paddingString.concat(baseString);
			}else{
				baseIndicator.innerHTML = baseString;
			}
		}

		// call when page loads
		function initBase(){
			console.log("initBase called");
			// check if the browser support localStorage 
			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				var storage=window.localStorage;
				// check if the page is loaded in the browser at the first time, create a variable to store the base
				if(localStorage.getItem("base") === null){
					console.log("base is not created, initalized");
					storage["base"] = 6;		
					adjustBase(localStorage.getItem("base"));
					baseSlider.value = localStorage.getItem('base').toString();				
				}else{
				// if the page is previously loaded (reloaded in the brwoser), set the base back to previously defined value
					console.log("base is set back to" + localStorage.getItem('base'));
					var baseString = localStorage.getItem('base').toString();
					baseSlider.value = localStorage.getItem('base').toString();			
					baseIndicator.innerHTML = baseString;
					
				}
			}
		}

		// adjust base in the machine
		function adjustBase(baseValue){
			console.log("set base to " + baseValue);
			btnSetBase.click();
		}

		// change station when a new option is picked
		stationDropDownMenu.onchange = function (){
			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				// set station in loclaStorage
				var storage=window.localStorage;
				storage["station"] = this.value;
			}
			// adjust volume in the machine
			changeStation(this.value);
		}

		// call when page loads
		function initStation(){
			console.log("initStation called");
			// check if the browser support localStorage 
			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				var storage=window.localStorage;
				// check if the page is loaded in the browser at the first time, create a variable to store the selected station
				if(localStorage.getItem("station") === null){
					console.log("station is not created, initalized");
					storage["station"] = 1;		
				}else{
				// if the page is previously loaded (reloaded in the brwoser), set the base back to previously defined value
					//baseSlider.value = localStorage.getItem('station').toString();
					//baseIndicator.innerHTML = localStorage.getItem('station').toString();
					console.log("station is set back to" + localStorage.getItem('station'));
				}
				stationDropDownMenu.selectedIndex = localStorage.getItem('station') - 1;
			}
		}

		// perform change station
		function changeStation(station){
			console.log("set station to " + station);
			btnSetStation.click();
		}

		// load and display mac address from memory 
		function initalMacAddress(){
			console.log("inital mac address called");
			if(!window.localStorage){
				console.log("This browser doesn not support localStorage");
				return false;
			}else{
				var address = macAddressField2.value;//document.getElementById("macAddress").value;
				console.log("Mac address is "+ address);
				console.log("Mac address is "+ macAddressField2.value);
				window.localStorage["MACAddress"] = address;
				macAddressField.value = window.localStorage["MACAddress"];
			}
		}

		// mac address validation
		macAddressField.oninput = function(){
			console.log("entering MAC");
			var regexp = /^(([A-Fa-f0-9]{2}[:]){5}[A-Fa-f0-9]{2}[,]?)+$/i;
			var mac_address = macAddressField.value;
			if(!regexp.test(mac_address)) {
				macAddressInvalidWarning.textContent = "Invalid Mac Address!";
				btnSaveMAC.disabled = true;
			}else{
				macAddressInvalidWarning.textContent = "";		
				btnSaveMAC.disabled = false;
			}
		}

		// update mac address in memory
		btnSetMac.addEventListener("click", function() {
			console.log("btnSetMac clicked");
			window.localStorage["MACAddress"] = macAddressField.value;
		});

		function reloadPage(){
			window.location = window.location.href.split("?")[0];
		}

		window.onload = function() {
			loadMachineVolume();
			loadMachineBase();
			loadMachineStation();
			loadMachineMacAddress();
			initVolume();
			initBase();
			initStation();
			initalMacAddress();
			console.log("window loaded");
	}
