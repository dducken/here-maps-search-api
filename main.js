
   //Step 1: initialize communication with the platform
        // Replace variable YOUR_API_KEY with your own apikey
        var platform = new H.service.Platform({
            apikey: 'Zpso891hY2BWBCRZyGvZDU3ECXonyT7-z7HNQ09Tmew'
        });
        var defaultLayers = platform.createDefaultLayers();
        //Step 2: initialize a map - this map is centered over Europe
        var map = new H.Map(document.getElementById('mapContainer'),
            defaultLayers.vector.normal.map,
            {
                center: { lat: -31.442833432567536, lng: -64.19400626410122 },
                zoom: 14,
                pixelRatio: window.devicePixelRatio || 1
            }
        );
        // add a resize listener to make sure that the map occupies the whole container
        window.addEventListener('resize', () => map.getViewPort().resize());
        //Step 3: make the map interactive
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // Create the default UI components
        var ui = H.ui.UI.createDefault(map, defaultLayers);

        // Marker code goes here
      

        var LocationOfMarker = { lat: -31.442833432567536, lng: -64.19400626410122 };

        // Create a marker icon from an image URL:
        var icon = new H.map.Icon('/images/pin-sharp.svg', { size: { w: 56, h: 56 } });

        // Create a marker using the previously instantiated icon:
        var marker = new H.map.Marker(LocationOfMarker, { icon: icon });

        // Add the marker to the map:
        map.addObject(marker);

        //---------------------------------------------

        

          
        
        
  