const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/categories', (req, res) => {
   var categories = [ 
       { "name": "comedy", "id": "comedy"}, 
       { "name": "cartoon", "id": "cartoon" },
       { "name": "triller", "id": "triller" },
       { "name": "science-fiction", "id": "science-fiction" },
       { "name": "actions", "id": "actions" },
       { "name": "soap-operas", "id": "soap-operas" },
       { "name": "drama", "id": "drama" }
    ];

    res.render('categories', 
        { "categories": categories}
    );
});
router.get('/age', (req, res) => {
   var age = [ 
       { "name": "2014", "id": "2014"}, 
       { "name": "2015", "id": "2015" },
       { "name": "2016", "id": "2016" },
       { "name": "2017", "id": "2017" },
       { "name": "2018", "id": "2018" },
       { "name": "2019", "id": "2019" }
    ];

    res.render('age', 
        { "age":age}
    );
});

router.get('/country', (req, res) => {
   var country = [ 
       { "name": "America", "id": "America"}, 
       { "name": "France", "id": "France" },
       { "name": "Russia", "id": "Russia" },
       { "name": "India", "id": "India" },
       { "name": "Germany", "id": "Germany" }
    ];

    res.render('country', 
        { "country":country}
    );
});
router.get('/serials', (req, res) => {
   var serials = [ 
       { "name": "Russian", "id": "Russian" },
       { "name": "foreign", "id": "foreign" }
    ];

    res.render('serials', 
        { "serials":serials}
    );
});

router.get('/sales', (req, res) => {
    res.render('sales', 
        { "sales": [ 
           { "name": "National historic museums", "id": "byhist"}, 
           { "name": "Art gallery 1", "id": "byart1" },
           { "name": "Contemporary art", "id": "bycontemp" },
           { "name": "Design space", "id": "bydesign" }
          ]
        }
    );
});


router.get('/items', (req, res) => {
    res.render('items', 
        { "items": [ 
           { "name": "Shocking news", "id": "shock", "url":"https://miami2019.designmiami.com/images/content/channels/_JRH5464_SEGUIN_2_PS_HiRes_edited.jpg"}, 
           { "name": "Design Miami parts", "id": "miamiparts1", "url":"https://miami2019.designmiami.com/images/content/channels/_JRH4475_PEOPLE_5_PS_LoRes.jpg" },
           { "name": "Best shows design", "id": "bestshows", "url":"https://miami2019.designmiami.com/images/content/channels/_JRH6141_CARPENTERS_1_PS_hires.jpg" },
           { "name": "Design space Miami", "id": "designmiami", "url":"https://miami2019.designmiami.com/images/content/channels/_JRH4448_PEOPLE_5_PS_LoRes.jpg" }
          ]
        }
    );
});

router.get('/stations', (req, res) => {
    res.render('stations', 
        { "sales": [ 
           { "name": "g-avenu"}, 
           { "name": "Royal street" },
           { "name": "chagal street" },
           { "name": "Pan street" }
          ]
        }
    );
});

module.exports = router;