var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0685154446986065,
        "pitch": 0.035341945862487734,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 3.085351503725306,
          "pitch": 0.13464497806079834,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 2.628602025340377,
          "pitch": 0.18953711999854583,
          "rotation": 0,
          "target": "1-room1"
        },
        {
          "yaw": -1.512179060639074,
          "pitch": 0.21593165910203282,
          "rotation": 0,
          "target": "5-toilet"
        },
        {
          "yaw": -2.773968957283939,
          "pitch": 0.06363538608980868,
          "rotation": 0,
          "target": "2-washroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9653364797502135,
          "pitch": -0.10145287012987048,
          "title": "Cupboard",
          "text": "This is a cupboard"
        },
        {
          "yaw": -2.119711672748295,
          "pitch": -0.21935666615659422,
          "title": "<span style=\"color: rgb(118, 118, 118); font-family: Arial, sans-serif; font-size: 14px; font-weight: 700; background-color: rgb(255, 255, 255);\">गणेश जी</span>",
          "text": "<span style=\"color: rgb(71, 71, 71); font-family: Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">वास्तु शास्त्र में वर्णित है कि&nbsp;</span><span style=\"font-weight: bold; color: rgb(118, 118, 118); font-family: Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">मुख्य द्वार पर गणेश जी की दो प्रतिमाएं इस प्रकार लगानी चाहिए</span><span style=\"color: rgb(71, 71, 71); font-family: Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">&nbsp;कि एक की नजर अन्दर पड़े, तो दूसरी की नजर बाहर की ओर रहे। गणेश जी ऋद्धि-सिद्धि के दाता हैं।</span>"
        },
        {
          "yaw": 2.590206513033806,
          "pitch": 0.9534496445428786,
          "title": "Shoes",
          "text": "Shoes should not be on the South side"
        }
      ]
    },
    {
      "id": "1-room1",
      "name": "Room1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.145175216969016,
        "pitch": 0.31010924950929564,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -3.102662316147107,
          "pitch": -0.039682438493453986,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-washroom",
      "name": "Washroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4664800671517657,
        "pitch": -0.024116017384258726,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.936714144330832,
          "pitch": 0.29042796156537776,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9624697493270613,
        "pitch": 0.10369883113844836,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.8644060041303803,
          "pitch": 0.15858286715838155,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 2.6394001120321713,
          "pitch": 0.11193146614400007,
          "rotation": 0,
          "target": "4-room2"
        },
        {
          "yaw": 2.00167074194795,
          "pitch": 0.15153430909738042,
          "rotation": 0,
          "target": "1-room1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4380458113208512,
          "pitch": 0.30240186768097743,
          "title": "Oven",
          "text": "The oven should be in the North East corner"
        }
      ]
    },
    {
      "id": "4-room2",
      "name": "Room2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1631850112461422,
        "pitch": 0.27801756980654346,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.7860052363654333,
          "pitch": 0.054929571640956354,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3465271896686897,
        "pitch": 0.0012958722504095022,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -2.9032460045845383,
          "pitch": 0.500824241653838,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mikontalo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
