		var villageIcon = L.icon({
		iconUrl: 'icons/VillageIcon.png',
        shadowUrl: 'icons/Shadow.png',
        iconSize:     [40, 65],
        shadowSize:   [1, 1],
        iconAnchor:   [20, 64],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
		});


var el_wyewood = L.marker([-51.298023,-18.651909,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/Wyewood.jpg" alt="owo"style="width:700px;height:450px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Wyewood</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">A large selection of hamlets surrounded by a perpetual morning mist, Wyewood boasts no walls or any defensive structures. The trees are old, and all timber is heavily monitored, with the denizens trying to fend off the magical threats that leak from Qelged. All inhabitants congregate at an old sanctum ruin of forgotten fey to hold meetings and discuss issues. When the sanctum is threatened, the mist turns into fog, and ancient guardians hunt down anything that is within them.</p>'));
var el_blackford = L.marker([-32.981177,-5.7,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/Blackford.jpg" alt="owo"style="width:700px;height:600px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Blackford</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Sethmoor escapees made a frontier settlement to remove themselves from the politics and hostilities. Unfortunately, the area they settled in was a far cry from the peace of mind they had hoped for. Blackford sits on a floodplain next to the Black Lake. During the summer it is a place of good harvests and green fields. When the winter rolls over, the village experiences harsh floods as the roads turn to mud and many houses not built on stilts start to sink into the ground. The denizens know this cycle of by heart and many traditions are built around this phenomenon.</p>'));		
var el_eastwend = L.marker([-32.981177,-52.783972,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/Eastwend.jpg" alt="owo"style="width:700px;height:600px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Eastwend</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">A lakeside village situated on a serine hill with fertile land and abundant fish. The most protected of the three villages of Esternhold, they owe their safety due to rites and rituals that appease the fey spirits. The villagers have an incentive to continue these practices indefinitely, as the fey could easily drown and wash away any trace of the village if they are unsatisfied with the local activity.</p>'));
var el_havenwood = L.marker([-30.498724,-63.515451,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/Havenwood.jpg" alt="owo"style="width:700px;height:400px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Havenwood</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">A lumber village and fringe farming community, Havenwood is a clustered settlement with many buildings being built on top of each other so not to encroach on the surrounding forest. As the act of lumbering is destructive, the town uses nature magic to quickly cultivate trees so not to upset the fey, and is such overseen by a coven of druids. This causes the clustered town to quickly become overrun with plants and vines, which makes the town appear neglected, but also provides essential infrastructure to reinforce the stonework of the buildings.</p>'));
var el_stonespire = L.marker([-31.984493,-73.452004,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/Stonespire.jpg" alt="owo"style="width:700px;height:400px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Stonespire</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Known for mining and large beetle farming, the village of Stonespire gets its name from the obelisk-like tower that sits abandoned on its highest point. The village itself is divided into three sections. The market level, called the Stone Square, holds much of the local trade and is surrounded by the rising stones of the mountain. The lower two wings are nestled in forested alcoves. Here, farming, mining and many of the residents live here in wooden huts with slate rooves. They say a legendary swordswoman started her life here, however these are only wives tales and myths.</p>'));
var el_greycliff = L.marker([67.666386,-34.521762,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/greycliff.jpg" alt="owo"style="width:450px;height:700px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Greycliff</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">An ancient manor sitting upon a storm wracked cliff is the only monument the people of Greycliff know. Once a normal and unassuming settlement, the Manor appeared through veils of thick, blue fog. Brave souls went to venture and knocked on the door, but no one answered. Countless other attempts have been made to contact the inhabitants, but all have failed. All that is known is that the fishing hauls have gotten larger, even if the creatures that are caught seem to be…mutated.</p>'));
var el_athalar = L.marker([21.953403,-39.509557,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/athalar.jpg" alt="owo"style="width:650px;height:450px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Athalar</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Taking the full blow of Blightmoor and have taken to drastic methods to ward back the roaming hordes of arcanists that spew from the Tyrants Keep. Athalar used to be the largest city in Sethmoor renowned for its acceptance. This became its downfall, as the number of cults and religious orders that sought to plant themselves in the hierarchy eventually produced too much infighting and released divine destruction on each other. Now Athalar is just a single settlement in the heart of an expansive ruin known as the cathedrals graveyard.</p>'));
var el_degBea = L.marker([24.218298,30.802306,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/degbea.jpg" alt="owo"style="width:350px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Degores Beacon</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The fourth and the smallest of the beacons, this town dresses the tress in its forests with gruesome ornaments of maimed bodies, all carved with the Sadists Grin in their skin. This beacon rages a red flame, calling all to a night of bloody violence.</p>'));
var el_innister = L.marker([56.990933,0.442129,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/Innister.jpg" alt="owo"style="width:550px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Innister</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The port town of Innister depends on the swell of the tides. High tides bring fish, travel and trade, while low tide allows for a respite from the oceans grip. Ever since the appearance of Narakzig, the town has occasionally received paranormal visits, usually from restless spirits that, for some reason, do not wish to sleep. Missing anglers often reappear as misshaped sea creatures and other foul things that only wish to add to the deep they now call their new home.</p>'));
var el_achyr = L.marker([63.162599,44.707736,],{icon: villageIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/achyr.jpg" alt="owo"style="width:700px;height:300px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Achyr</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Sins of the past are written in stone in the ruins surrounding the village of Achyr. Once devoted to an ancient fey of blood and emotion, they never forgot to repeat traditions and rites. When Illanor entered the world, she trapped the lord in a prison of brambles. What cut the lord the most was that his three most devoted cultists helped her behind his back, cutting out their tongues to help seal him away. Now, Achyr is haunted by a spectre of wrath that hunts down any who worship anything other than him. Those that flee find the forest hungry for humanoid blood.</p>'));




