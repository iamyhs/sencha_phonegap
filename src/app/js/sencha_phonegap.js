var App = new Ext.Application({
	
	name:'App',
	useLoadMask:true,	
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        if (!device || !this.launched) {return;}
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
        	
        	onReady:function(){
        		navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        	},
        	
        	onSuccess:function(acceleration){
        		Ext.Msg.alert('Accelerometer Info','Acceleration X: ' + acceleration.x + '\n' +
		               'Acceleration Y: ' + acceleration.y + '\n' +
		               'Acceleration Z: ' + acceleration.z + '\n' +
		               'Timestamp: '      + acceleration.timestamp + '\n',Ext.emptyFn);
        	},
        	
        	onError:function(){
        		Ext.Msg.alert('Accelerometer Info','Accelerometer error' ,Ext.emptyFn);        		        		
        	}      	
        });
        
        
        App.views.Camera = new Ext.Container({
        	id:'camera',
        	fullscreen:true,
        	html:'Camera Page',
        	
        	// function onDeviceReady() {
		        // navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
		    // }
// 		
		    // // onSuccess: Get a snapshot of the current acceleration
		    // //
		    // function onSuccess(acceleration) {
		        // alert('Acceleration X: ' + acceleration.x + '\n' +
		              // 'Acceleration Y: ' + acceleration.y + '\n' +
		              // 'Acceleration Z: ' + acceleration.z + '\n' +
		              // 'Timestamp: '      + acceleration.timestamp + '\n');
		    // }
// 		
		    // // onError: Failed to get the acceleration
		    // //
		    // function onError() {
		        // alert('onError!');
		    // }
    
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