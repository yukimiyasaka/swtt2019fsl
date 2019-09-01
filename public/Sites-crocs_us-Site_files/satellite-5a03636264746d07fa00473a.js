_satellite.pushAsyncScript(function(event, target, $variables){
  (function(){
	try{
		function getValueAsString(data){
			if(typeof data !== 'undefined'){
				if(typeof data === 'string'){
					return data;
				}else{
					return JSON.stringify(data);
				}
			}else{
				return '';
			}
		}
	
		function initQuickLookMbox(){
	      try{
			// we are transitioning away from using app.config.qv
			var defaultColor = '', productID = '', productName = '', sizeID = '', isMaster = '';
			if(app.config.qv){
				defaultColor = window.app.config.qv.defaultColor;
				productID = window.app.config.qv.productID;
				productName = window.app.config.qv.productName;
				sizeID = window.app.config.qv.sizeID;
				isMaster = window.app.config.qv.isMaster;
			}else{
				var pid = window.document.querySelector('.js-modal').getAttribute('data-modalpidmaster');
				var data = pid ? app.config.products[pid].pidData : null;
				defaultColor = data && data.defaultColor ? data.defaultColor : '';
				productID = pid ? pid : '';
				productName = data && data.name ? data.name : '';
				sizeID = data && data.sizeId ? data.sizeId : '';
				isMaster = data && data.isMaster ? data.isMaster : '';				
			}
	        adobe.target.getOffer({  
	          "mbox": "quicklook-filtered-mbox",
	          "params": {
	          "crx_quicklook_enabled" : "true",
	          "crx_ac_qvDefaultColor" : (function(window){try{return getValueAsString(defaultColor);}catch(e){return '';}})(window),
	          "crx_ac_qvProductID" : (function(window){try{return getValueAsString(productID);}catch(e){return '';}})(window),
	          "crx_ac_qvProductName" : (function(window){try{return getValueAsString(productName);}catch(e){return '';}})(window),
	          "crx_ac_qvSizeID" : (function(window){try{return getValueAsString(sizeID);}catch(e){return '';}})(window),
	          "crx_ac_qvIsMaster" : (function(window){try{return getValueAsString(isMaster);}catch(e){return '';}})(window)
	          },
	          "success": function(offers) {          
	                adobe.target.applyOffer( { 
	                   "mbox": "quicklook-filtered-mbox",
	                   "offer": offers 
	                } );
	          },  
	          "error": function(status, error) {          
	              if (console && console.log) {
	                console.log(status);
	                console.log(error);
	              }
	          },
	         "timeout": 5000
	        });
	      }catch(e){
	      	// console && console.log('ERROR: DTM Page Load for quicklook-filtered-mbox');
	    		// console && console.log(e);
	      }
		}
		
		$(window).addEventListener('modal-loaded', function (e) {
			if(document.querySelector('.quick-view-modal')){
				initQuickLookMbox();
			}
		}, false);
		
	}catch(e){
		// console && console.log('ERROR: DTM Page Load for quicklook-filtered-mbox');
    // console && console.log(e);
	}
})()
});
