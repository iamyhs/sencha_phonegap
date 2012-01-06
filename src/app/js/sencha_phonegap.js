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

		App.views.Accelerometer = new Ext.Container({
			
        	id:'accelerometer',
        	fullscreen:true,
           layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			   },
			   
           items:[
           {
           		id : 'acceltextarea',
	           	//xtype     : 'textareafield',
		        //grow      : true,
		        //name      : 'message',
		        //fieldLabel: 'Message',
		        //anchor    : '100%',
		        //flex :1
		        xtype: 'textareafield',
		        //xtype: 'textfield',
				fieldLabel: 'Comments',
				labelAlign: 'top',
				//flex: 1
	       },
	       {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
			   //flex:1,
			   
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		//Ext.getCmp('acceltextarea').value +="Test"+"\n";
		           		// Ext.getCmp('acceltextarea').setValue(Ext.getCmp('acceltextarea').getValue()+
		           		// "Test"+"\n");
		           		//this.acceltextarea.value += "this.acceltextarea";
		           		//Ext.Msg.alert('Accelerometer Ready');
		           		//var oldvalue = Ext.getCmp('acceltextarea').getValue();
		           		//Ext.getCmp('acceltextarea').setValue(oldvalue+"Accelerometer is initialized successfully\n");
		           		navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
		   			}
	       		},{
	       			id:'acceltestbtn',
	       			xtype:'button',		           	
		           	text:'Acceler.. Test',
		           	disabled: 'true',
		           	handler:function(){
		           		//if accelerometer doesn't initialized, then make disable this button
		           		//Ext.Msg.alert('Accelerometer Ready');
		           		Ext.Msg.alert('Accelerometer Info','Acceleration X: ' + acceleration.x + '\n' +
		               'Acceleration Y: ' + acceleration.y + '\n' +
		               'Acceleration Z: ' + acceleration.z + '\n' +
		               'Timestamp: '      + acceleration.timestamp + '\n',Ext.emptyFn);
		               
		               var oldvalue = Ext.getCmp('acceltextarea').getValue();
		               Ext.getCmp('acceltextarea').setValue(oldvalue+'Accelerometer Info','Acceleration X: ' + acceleration.x + '\n' +
		               'Acceleration Y: ' + acceleration.y + '\n' +
		               'Acceleration Z: ' + acceleration.z + '\n' +
		               'Timestamp: '      + acceleration.timestamp + '\n');
		               
		   			}
	       		}]
	           		
		   	}	       
           ],
                        			            	
        	onSuccess:function(acceleration){
        		//make a "Ready" text info on the textarea
        		Ext.getCmp('acceltextarea').setValue("Accelerometer is initialized successfully"+"\n");
        		Ext.getCmp('acceltestbtn').setDisabled(false);
        		//Ext.getCmp('acceltextarea').setValue("Accelerometer is initialized successfully");
        		// Ext.Msg.alert('Accelerometer Info','Acceleration X: ' + acceleration.x + '\n' +
		               // 'Acceleration Y: ' + acceleration.y + '\n' +
		               // 'Acceleration Z: ' + acceleration.z + '\n' +
		               // 'Timestamp: '      + acceleration.timestamp + '\n',Ext.emptyFn);
        	},
        	
        	onError:function(){
        		Ext.Msg.alert('Accelerometer Info','Accelerometer error' ,Ext.emptyFn);        		        		
        	}
        	      	
        });
        
        
        App.views.Camera = new Ext.Container({
        	id:'camera',
        	fullscreen:true,
        	//html:'Camera Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			   },

			items:[
            {
            	id : 'camerapanel',
		        xtype: 'panel',		
		        //height: '100%'		
				//labelAlign: 'top',
				//flex: 1
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		pictureSource=navigator.camera.PictureSourceType;
        				destinationType=navigator.camera.DestinationType;
        				Ext.getCmp('cameratestbtn').setDisabled(false);
		           	}
	       		},{
		   			id:'cameratestbtn',
	       			xtype:'button',		           	
		           	text:'Camera Test',
		           	disabled: 'true',
		           	handler:function(){
		           		//navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, { quality: 50 });
		           		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
		           	}
	       		}]
		   	 }	       
            ],
            
            onPhotoDataSuccess:function(imageData){
            	//use panel itemTpl
            	camerapanel.item = imageData;
            },
            
            onFail:function(message){
            	alert('Failed because: ' + message);	
            },
            
            getPhoto:function(source){
            	navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
		        destinationType: destinationType.FILE_URI,
		        sourceType: source });
            },
            
        });

        App.views.Capture = new Ext.Container({
        	id:'capture',
        	fullscreen:true,
        	//html:'Capture Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'capturetestbtn',
	       			xtype:'button',		           	
		           	text:'Capture Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],      	
        });


        App.views.Compass = new Ext.Container({
        	id:'compass',
        	fullscreen:true,
        	//html:'Compass Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'compasstestbtn',
	       			xtype:'button',		           	
		           	text:'Compass Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],        	
        });

        App.views.Connection = new Ext.Container({
        	id:'connection',
        	fullscreen:true,
        	//html:'Connection Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'connectiontestbtn',
	       			xtype:'button',		           	
		           	text:'Connection Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],        	
        });        


        App.views.Contacts = new Ext.Container({
        	id:'contacts',
        	fullscreen:true,
        	//html:'Contacts Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'contacttestbtn',
	       			xtype:'button',		           	
		           	text:'Contacts Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],        	
        });


        App.views.Device = new Ext.Container({
        	id:'device',
        	fullscreen:true,
        	//html:'Device Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'devicetestbtn',
	       			xtype:'button',		           	
		           	text:'Device Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],        	
        });

        App.views.Events = new Ext.Container({
        	id:'events',
        	fullscreen:true,
        	//html:'Events Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'eventtestbtn',
	       			xtype:'button',		           	
		           	text:'Events Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],        	
        });        

        App.views.File = new Ext.Container({
        	id:'file',
        	fullscreen:true,
        	//html:'File Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'filetestbtn',
	       			xtype:'button',		           	
		           	text:'File Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],        	
        });


        App.views.Geolocation = new Ext.Container({
        	id:'geolocation',
        	fullscreen:true,
        	//html:'Geolocation Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		navigator.geolocation.getCurrentPosition(this.geoOnSuccess, this.geoOnError);
		           	}
	       		},{
		   			id:'geotestbtn',
	       			xtype:'button',		           	
		           	text:'GeoLocation Test',
		           	//disabled: 'true',
		           	handler:function(){
		           		navigator.geolocation.getCurrentPosition(this.geoOnSuccess, this.geoOnError);
		           	}
	       		}]
		   	 }	       
            ],        	
            
            geoOnSuccess:function(){
            	Ext.Msg.alert('Latitude: '         + position.coords.latitude            + 
                            'Longitude: '          + position.coords.longitude             + 
                            'Altitude: '           + position.coords.altitude              + 
                            'Accuracy: '           + position.coords.accuracy              + 
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + 
                            'Heading: '            + position.coords.heading               + 
                            'Speed: '              + position.coords.speed                 + '\n' 
                             );
            },
            
            geoOnError:function(error){
            	Ext.Msg.alert('Geolocation Error','Error code: ' + error.code + '\n' + 
            				'Error message: ' + error.message + '\n');
            }
            
        });


        App.views.Media = new Ext.Container({
        	id:'media',
        	fullscreen:true,
        	//html:'Media Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'mediatestbtn',
	       			xtype:'button',		           	
		           	text:'Media Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],        	
        });

        App.views.Notification = new Ext.Container({
        	id:'notification',
        	fullscreen:true,
        	//html:'Notification Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'notitestbtn',
	       			xtype:'button',		           	
		           	text:'Notification Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],        	
        });

        App.views.Storage = new Ext.Container({
        	id:'storage',
        	fullscreen:true,
        	//html:'Storage Page'
        	layout : {
			    type : 'vbox',
			    align : 'stretch',
			    pack : 'center'
			},  
			items:[
            {
	        },
	        {
	       		layout:{
				    type : 'hbox',
				    align : 'end',
				    pack : 'center'
			   },
	       		items:[{
	       			xtype:'button',
		           	text:'Initialize',		           	
		           	handler:function(){
		           		
		           	}
	       		},{
		   			id:'storagetestbtn',
	       			xtype:'button',		           	
		           	text:'Storage Test',
		           	disabled: 'true',
		           	handler:function(){
		           	}
	       		}]
		   	 }	       
            ],        	
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