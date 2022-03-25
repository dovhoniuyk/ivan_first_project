var map;
var iconBase =document.getElementById("marker").src;

            function initMap() {
                const myLatLng = {
                    lat: 32.16428051675053,
                    lng: 34.81232496357425
                };
                map = new google.maps.Map(document.getElementById('map'), {
                    disableDefaultUI: true,
                    center: myLatLng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [{
                        "featureType": "all",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "weight": "2.00"
                        }]
                    },
                        {
                            "featureType": "all",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                "color": "#9c9c9c"
                            }]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text",
                            "stylers": [{
                                "visibility": "on"
                            }]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#f2f2f2"
                            }]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#f9f9f9"
                            }]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#f9f9f9"
                            }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [{
                                "saturation": -100
                            }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [{
                                "saturation": -100
                            },
                                {
                                    "lightness": 45
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#eeeeee"
                            }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#7b7b7b"
                            }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "color": "#f9f9f9"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "all",
                            "stylers": [{
                                "visibility": "simplified"
                            }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#46bcec"
                            },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#dfdfdf"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#070707"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        }
                    ]
                });

                new google.maps.Marker({
                    position: myLatLng,
                    map,
                    title: "Office",
                });
              
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    icon: iconBase
                });
                
            }