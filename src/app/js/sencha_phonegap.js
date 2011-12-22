/*
 * 1)Accelerometer
 * 		Captures device motion in the x, y, and z direction.
 * 
 * Methods
 * 		accelerometer.getCurrentAcceleration
 * 		accelerometer.watchAcceleration
 * 		accelerometer.clearWatch
 * 
 * Arguments
 * 		accelerometerSuccess
 * 		accelerometerError
 * 		accelerometerOptions
 * 
 * Objects (Read-Only)
 * 		Acceleration
 * 
 * 
 * 2)Camera
 * 		The camera object provides access to the device's default camera application.
 *  
 * Methods
 * 		camera.getPicture
 * 
 * 
 * 3)Capture
 * 		Provides access to the audio, image, and video capture capabilities of the device.
 * 
 * Objects
 * 		Capture
 * 		CaptureAudioOptions
 * 		CaptureImageOptions
 * 		CaptureVideoOptions
 * 		CaptureCB
 * 		CaptureErrorCB
 * 		ConfigurationData
 * 		MediaFile
 * 		MediaFileData
 * 
 * Methods
 * 		capture.captureAudio
 * 		capture.captureImage
 * 		capture.captureVideo
 * 		MediaFile.getFormatData
 * 
 * 
 * 4)Compass
 * 		Obtains the direction that the device is pointing.
 * 
 * Methods
 * 		compass.getCurrentHeading
 * 		compass.watchHeading
 * 		compass.clearWatch
 * 		compass.watchHeadingFilter
 * 		compass.clearWatchFilter
 * 
 * Arguments
 * 		compassSuccess
 * 		compassError
 * 		compassOptions
 * 		compassHeading
 * 
 * 
 * 5)Connection
 * 		The connection object gives access to the device's cellular and wifi connection information.
 * 		This object is accessed under the navigator.network interface.
 * 
 * Properties
 * 		connection.type
 * 
 * Constants
 * 		Connection.UNKNOWN
 * 		Connection.ETHERNET
 * 		Connection.WIFI
 * 		Connection.CELL_2G
 * 		Connection.CELL_3G
 * 		Connection.CELL_4G
 * 		Connection.NONE
 * 
 * 
 * 6)Contacts
 * 		The contacts object provides access to the device contacts database.
 * 
 * Methods
 * 		contacts.create
 * 		contacts.find
 * 
 * Arguments
 * 		contactFields
 * 		contactSuccess
 * 		contactError
 * 		contactFindOptions
 * 
 * Objects
 * 		Contact
 * 		ContactName
 * 		ContactField
 * 		ContactAddress
 * 		ContactOrganization
 * 		ContactFindOptions
 * 		ContactError
 * 
 * 
 * 7)Device
 * 		The device object describes the device's hardware and software.
 * 
 * Properties
 * 		device.name
 * 		device.phonegap
 * 		device.platform
 * 		device.uuid
 * 		device.version
 * 
 * 
 * 8)Events
 * 		PhoneGap lifecycle events.
 * 
 * 
 * Event Types
 * 		deviceready
 * 		pause
 * 		resume
 * 		online
 * 		offline
 * 		backbutton
 * 		batterycritical
 * 		batterylow
 * 		batterystatus
 * 		menubutton
 * 		searchbutton
 * 		startcallbutton
 * 		endcallbutton
 * 		volumedownbutton
 * 		volumeupbutton
 * 
 * 
 * 9)File
 * 		An API to read, write and navigate file system hierarchies.
 * 
 * Objects
 * 		DirectoryEntry
 * 		DirectoryReader
 * 		File
 * 		FileEntry
 * 		FileError
 * 		FileReader
 * 		FileSystem
 * 		FileTransfer
 * 		FileTransferError
 * 		FileUploadOptions
 * 		FileUploadResult
 * 		FileWriter
 * 		Flags
 * 		LocalFileSystem
 * 		Metadata
 * 
 * 
 * 10)Geolocation
 * 		The geolocation object provides access to the device's GPS sensor.
 * 
 * Geolocation provides location information for the device, such as latitude and longitude. 
 * Common sources of location information include Global Positioning System (GPS) 
 * and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, 
 * and GSM/CDMA cell IDs. No guarantee is given that the API returns the device's actual location.
 * 
 * This API is based on the W3C Geo location API Specification. 
 * Some devices already provide an implementation of this spec. 
 * For those devices, the built-in support is used instead of replacing it with PhoneGap's implementation. 
 * For devices that don't have geolocation support, 
 * PhoneGap's implementation should be compatible with the W3C specification.
 * 
 * 
 * Methods
 * 		geolocation.getCurrentPosition
 * 		geolocation.watchPosition
 * 		geolocation.clearWatch
 * 
 * Arguments
 * 		geolocationSuccess
 * 		geolocationError
 * 		geolocationOptions
 * 
 * Objects (Read-Only)
 * 		Position
 * 		PositionError
 * 		Coordinates
 * 
 * 
 * 11)Media
 * 		The Media object provides the ability to record and play back audio files on a device.
 * 
 * 		var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
 * 
 * Note: The current implementation does not adhere to a W3C specification for media capture, 
 * and is provided for convenience only. 
 * A future implementation will adhere to the latest W3C specification and may deprecate the current APIs.
 * 
 * 
 * Parameters
 * 		src: A URI containing the audio content. (DOMString)
 * 		mediaSuccess: (Optional) The callback that is invoked after a Media object has completed 
 * 						the current play/record or stop action. (Function)
 * 		mediaError: (Optional) The callback that is invoked if there was an error. (Function)
 * 		mediaStatus: (Optional) The callback that is invoked to indicate status changes. (Function)
 * 
 * Methods
 * 		media.getCurrentPosition: Returns the current position within an audio file.
 * 		media.getDuration: Returns the duration of an audio file.
 * 		media.play: Start or resume playing audio file.
 * 		media.pause: Pause playing audio file.
 * 		media.release: Releases the underlying OS'es audio resources.
 * 		media.seekTo: Moves the position within the audio file.
 * 		media.startRecord: Start recording audio file.
 * 		media.stopRecord: Stop recording audio file.
 * 		media.stop: Stop playing audio file.
 * 
 * Additional ReadOnly Parameters
 * 		_position: The position within the audio playback in seconds. 
 * 					Not automatically updated during play, call getCurrentPosition to update.
 * 		_duration: The duration of the media in seconds.
 * 
 * Supported Platforms
 * 		Android
 * 		iOS
 * 		Windows Phone 7 ( Mango )
 * 
 * 
 * 12)Notification
 * 		Visual, audible, and tactile device notifications.
 * 
 * Methods
 * 		notification.alert
 * 		notification.confirm
 * 		notification.beep
 * 		notification.vibrate
 * 
 * 
 * 13)Storage
 * 		Provides access to the devices storage options.
 * 
 * 		This API is based on the W3C Web SQL Database Specification and W3C Web Storage API Specification. 
 * 		Some devices already provide an implementation of this spec. 
 * 		For those devices, the built-in support is used instead of replacing it with PhoneGap's implementation. 
 * 		For devices that don't have storage support, 
 * 		PhoneGap's implementation should be compatible with the W3C specification.
 * 
 * Methods
 * 		openDatabase
 * 
 * Arguments
 * 		name
 * 		version
 * 		display_name
 * 		size
 * 
 * Objects
 * 		Database
 * 		SQLTransaction
 * 		SQLResultSet
 * 		SQLResultSetList
 * 		SQLError
 * 		localStorage
 * 
 */
var App = new Ext.Application({
	
	name:'App',
	useLoadMask:true,	
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        //if (!device || !this.launched) {return;}
    	Ext.regModel('PhoneGapFeature', {
            idProperty: 'id',
            fields: [
                { name: 'id', type: 'int' },                
                { name: 'name', type: 'string' }                                
            ]
        });

        Ext.regStore('PhoneGapFeatureStore', {
            model: 'PhoneGapFeature',
            sorters: [{
                property: 'name',
                direction: 'ASC'
            }],
            proxy: {
                type: 'localstorage',
                id: 'phonegapfeature-app-store'
            },
        
            data: [
                   { id: 1, name: 'Accelerometer' },
                   { id: 2, name: 'Camera' },
                   { id: 3, name: 'Capture' },
                   { id: 4, name: 'Compass' },
                   { id: 5, name: 'Connection' },
                   { id: 6, name: 'Contacts' },
                   { id: 7, name: 'Device' },
                   { id: 8, name: 'Events' },
                   { id: 9, name: 'File' },
                   { id: 10, name: 'Geolocation' },
                   { id: 11, name: 'Media' },
                   { id: 12, name: 'Notification' },
                   { id: 13, name: 'Storage' }
                   ]
        });
        
        App.views.phonegapTopToolbar = new Ext.Toolbar({
        	title:'Sencha_PhoneGap',
        	items:[
        	{
        		xtype:'spacer'
        	},
        	{
        		text:'Info',
        		ui:'action',
        		handler:function(){
        			
        		}
        	}]
        });
        
        App.views.phonegapBottomToolbar = new Ext.Toolbar({
        	dock:'bottom',
        	itmes:[{
        		xtype:'spacer'
        	}]
        });
        
        
        
        // App.views.phonegapFeature = new Ext.form.FormPanel({
//         	
        	// id:'phonegapFeature',        	
        	// loadRecord:function(record){
        		// //Ext.Msg.alert('Record Info', record.data.id+" : "+record.data.name, Ext.emptyFn);
        		// switch(record.data.id){
//         			
        			// case 1:
        				// //Ext.Msg.alert('Record Info', record.data.name, Ext.emptyFn);
        				// //alert(this.id);
        				// //App.views.viewport.setActiveItem('accelerometer', { type: 'slide', direction: 'left' });
						// //items:[App.views.Accelerometer];	
						// //this.items = [App.views.Accelerometer];		
        			// break;
//         			
        			// case 2:
        			// break;
//         			
        			// case 3:
        			// break;
//         			
        			// case 4:
        			// break;
//         			
        			// case 5:
        			// break;
//         			
        			// case 6:
        			// break;
//         			
        			// case 7:
        			// break;
//         			
        			// case 8:
        			// break;
//         			
        			// case 9:
        			// break;
//         			
        			// case 10:
        			// break;
//         			
        			// case 11:
        			// break;
//         			
        			// case 12:
        			// break;
//         			
        			// case 13:
        			// break;
//         			
        			// default:
        			// //App.views.viewport.setActiveItem('phonegapMain', { type: 'slide', direction: 'left' });
//         			
        		// }
        	// }
//         	
        // });
                

        App.views.phonegapFeaturesListToolbar = new Ext.Toolbar({
        	title: 'Detail Info',
            items: [
                {
                    text: 'Home',
                    ui: 'back',
                    handler: function () {
                        App.views.viewport.setActiveItem('phonegapMain', { type: 'slide', direction: 'left' });                        
                    }
                },
                { xtype: 'spacer' }
            ]
        });
        
        App.views.phonegapFeaturesList = new Ext.List({
        	id:'phonegapFeatureList',
        	store:'PhoneGapFeatureStore',
        	
        	itemTpl: '<div class="list-item-name">{name}</div>',
            
        	onItemDisclosure:function(record){
				//App.views.phonegapFeature.load(record);        		
        		App.views.viewport.setActiveItem('phonegapFeaturesListContainer', { type: 'slide', direction: 'right' });
        		App.views.phonegapFeaturesListContainer.showPhoneGapView(record);
        		//App.views.viewport.setActiveItem('accelerometer', { type: 'slide', direction: 'left' });
        	}        	
        });

		App.views.Accelerometer = new Ext.Container({
        	id:'accelerometer',
        	fullscreen:true,
        	//html:'Accelerometer Page'
        	items:[
        	{
        		xtype:'button'
        	},{
        		xtype:'button'	
        	}
        	]
        });
        
        
        App.views.Camera = new Ext.Container({
        	id:'camera',
        	fullscreen:true,
        	html:'Camera Page'        	
        	//items:[{xtype:'button'}]
        });

        App.views.Capture = new Ext.Container({
        	id:'capture',
        	fullscreen:true,
        	html:'Capture Page'        	
        	//items:[{xtype:'button'}]
        });


        App.views.Compass = new Ext.Container({
        	id:'compass',
        	fullscreen:true,
        	html:'Compass Page'        	
        	//items:[{xtype:'button'}]
        });

        App.views.Connection = new Ext.Container({
        	id:'connection',
        	fullscreen:true,
        	html:'Connection Page'        	
        	//items:[{xtype:'button'}]
        });        


        App.views.Contacts = new Ext.Container({
        	id:'contacts',
        	fullscreen:true,
        	html:'Contacts Page'        	
        	//items:[{xtype:'button'}]
        });


        App.views.Device = new Ext.Container({
        	id:'device',
        	fullscreen:true,
        	html:'Device Page'        	
        	//items:[{xtype:'button'}]
        });

        App.views.Events = new Ext.Container({
        	id:'events',
        	fullscreen:true,
        	html:'Events Page'        	
        	//items:[{xtype:'button'}]
        });        

        App.views.File = new Ext.Container({
        	id:'file',
        	fullscreen:true,
        	html:'File Page'        	
        	//items:[{xtype:'button'}]
        });


        App.views.Geolocation = new Ext.Container({
        	id:'geolocation',
        	fullscreen:true,
        	html:'Geolocation Page'        	
        	//items:[{xtype:'button'}]
        });


        App.views.Media = new Ext.Container({
        	id:'media',
        	fullscreen:true,
        	html:'Media Page'        	
        	//items:[{xtype:'button'}]
        });

        App.views.Notification = new Ext.Container({
        	id:'notification',
        	fullscreen:true,
        	html:'Notification Page'        	
        	//items:[{xtype:'button'}]
        });

        App.views.Storage = new Ext.Container({
        	id:'storage',
        	fullscreen:true,
        	html:'Storage Page'        	
        	//items:[{xtype:'button'}]
        });
                                                            
        //Custom component contain Ext.Panel and Data Process or custom handler 
        App.views.phonegapFeaturesListContainer = new Ext.Panel({
            id: 'phonegapFeaturesListContainer',
            layout: 'fit',
            dockedItems: [App.views.phonegapFeaturesListToolbar],
            items:[],
            // listeners: {
		        // added: addedHandler,
		        // scope: this
		    // },
            
            // initComponent:function(){
//             	
            	// console.log(this.id);
            	// //App.views.phonegapFeaturesListContainer.superclass.initComponent.apply(this, arguments);
            	// //this.add(App.views.Accelerometer);
            // },
            swapArray:function (array,x) {
			  var b = array[x];
			  array[x] = array[array.length-1];
			  array[array.length-1] = b;
			  
			  var a = this.items.keys[x];
			  this.items.keys[x] = this.items.keys[this.items.keys.length-1];
			  this.items.keys[this.items.keys.length-1] = a;
			  
			  return this;
			},
			
			clickedItemShow:function(name){
				//this.items.items.each(function(item){
				this.items.each(function(item){					
					if(item.id == name){
						item.show();
					}else{
						item.hide();
					}
				});
			},

            isExist:function(targetArray, string){
            	if(targetArray.indexOf(string) == -1){
            		return false;
            	}
            	return true;
            },
            
            showPhoneGapView:function(record){            	
            	App.views.phonegapFeaturesListToolbar.setTitle(record.data.name);
            	switch(record.data.id){
        			
        			case 1:
						if(!this.isExist(this.items.keys, "accelerometer")){
							this.add("accelerometer");							
						}else{
							this.clickedItemShow("accelerometer");
						}
        			break;
        			
        			case 2:
        				if(!this.isExist(this.items.keys, "camera")){
							this.add("camera");							
						}else{
							this.clickedItemShow("camera");
						}
        			break;
        			
        			case 3:
        				if(!this.isExist(this.items.keys, "capture")){
							this.add("capture");							
						}else{
							this.clickedItemShow("capture");
						}
        			break;
        			
        			case 4:
        				if(!this.isExist(this.items.keys, "compass")){
							this.add("compass");							
						}else{
							this.clickedItemShow("compass");						
						}
        			break;
        			
        			case 5:
        			    if(!this.isExist(this.items.keys, "connection")){
							this.add("connection");							
						}else{
							this.clickedItemShow("connection");						
						}
        			break;
        			
        			case 6:
        			    if(!this.isExist(this.items.keys, "contacts")){
							this.add("contacts");							
						}else{
							this.clickedItemShow("contacts");						
						}        			
        			break;
        			
        			case 7:
        			    if(!this.isExist(this.items.keys, "device")){
							this.add("device");							
						}else{
							this.clickedItemShow("device");						
						}         			
        			break;
        			
        			case 8:
        			    if(!this.isExist(this.items.keys, "events")){
							this.add("events");							
						}else{
							this.clickedItemShow("events");						
						}         			
        			break;
        			
        			case 9:
        			    if(!this.isExist(this.items.keys, "file")){
							this.add("file");							
						}else{
							this.clickedItemShow("file");						
						}         			
        			break;
        			
        			case 10:
        			    if(!this.isExist(this.items.keys, "geolocation")){
							this.add("geolocation");							
						}else{
							this.clickedItemShow("geolocation");						
						}         			
        			break;
        			
        			case 11:
        			    if(!this.isExist(this.items.keys, "media")){
							this.add("media");							
						}else{
							this.clickedItemShow("media");						
						}         			
        			break;
        			
        			case 12:
        			    if(!this.isExist(this.items.keys, "notification")){
							this.add("notification");							
						}else{
							this.clickedItemShow("notification");						
						}          			
        			break;
        			
        			case 13:
        			    if(!this.isExist(this.items.keys, "storage")){
							this.add("storage");							
						}else{
							this.clickedItemShow("storage");						
						}         			
        			break;
        			
        			default:        			
        			break;
        		}
        	    this.doLayout();
            },
        });
                        
        App.views.phonegapMain = new Ext.Panel({
        	id:'phonegapMain',
        	layout:'fit',
        	dockedItems: [App.views.phonegapTopToolbar,App.views.phonegapBottomToolbar],
        	items:[App.views.phonegapFeaturesList]
        });
        
        App.views.viewport = new Ext.Panel({
            fullscreen: true,
            layout: 'card',
            cardAnimation: 'slide',
        	items: [App.views.phonegapMain,App.views.phonegapFeaturesListContainer]
        })
        
    }
	
    
    
});