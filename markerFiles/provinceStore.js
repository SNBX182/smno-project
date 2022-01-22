		var provinceIcon = L.icon({
		iconUrl: 'icons/ProvinceIcon.png',
        shadowUrl: 'icons/Shadow.png',
        iconSize:     [40, 65],
        shadowSize:   [1, 1],
        iconAnchor:   [20, 64],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
		});


var el_provEsten = L.marker([-16.928706, -74.780226,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provEsten.jpg" alt="owo"style="width:700px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Esternhold</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The forests and groves of Esternhold bloom with wildlife while only a handful of pockets are tended. Trees grow tall and broad, and you could walk amongst the canopy if you wanted. The sight of fae may occasionally be seen flittering through the trees.</p>'));
var el_provQuith = L.marker([-44.073235, 3.594454,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provQuith.jpeg" alt="owo"style="width:700px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Quithar</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The province of Quithar is a mixture of shallow marshland and verdant thickets. The provinces has countless ruins from the time Qelged was a major seat of power, however all have fallen into disrepair.</p>'));
var el_provMira = L.marker([-46.918825, -72.357879,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provMira.jpg" alt="owo"style="width:450px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Mirador</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The landscape around Mirador is a surreal rocky environment that is constantly changing due to the dreams of the Stoneshaper. Crags and cliffs can appear and disappear overnight, and the forest must adapt to the constant changes.</p>'));

var el_provCradle = L.marker([16.479921, 16.253177,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provCrad.jpg" alt="owo"style="width:500px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Cradle</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The area around Cradle is the most hospitable of the lands, with tended forests and patrolled marshlands with defined roads. Many can see cages and bodies hanging in the trees surrounding settlements.</p>'));

var el_provDisgar = L.marker([28.362572, 6.798212,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provDis.jpg" alt="owo"style="width:700px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Disgar</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">With thin forests and a fractured coastline, Disgar is the driest place in western Sethmoor, however its landscape gives only weak crop harvests.</p>'));

var el_provSen = L.marker([-2.264113, -20.941582,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provSen.jpg" alt="owo"style="width:500px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Senerich</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Sprawling forests with light shrublands lead into dead still and black water marshes overseen by rats, crows, and drowned travellers. Farmland can often flood at times.</p>'));

var el_provLonval = L.marker([23.519172, -51.572568,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provLon.jpg" alt="owo"style="width:700px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Lonval</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The darkest, gloomiest swamp lies in Lonval, with sunken ruins and dissolved castles littering the area surrounding the central lakes. Survival here is hard, with the most powerful creatures making homes here.</p>'));

var el_provOcho = L.marker([2.420182, -103.535843,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provOcho.jpg" alt="owo"style="width:500px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Ochothas</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The dense forests of Ochothas vary widely in elevation, and thus give rise to the most biodiverse ecosystem in Sethmoor, with countless exotic plants and animals</p>'));

var el_provHast = L.marker([35.828927, -103.535843,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provHast.jpg" alt="owo"style="width:450px;height:450px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Hastriden</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Where the riverbeds have dried and canyons cut into the terrain, Hastriden is harsh and hot, with magical rifts opening in naturally formed cracks.</p>'));

var el_provItu = L.marker([44.18535, -67.982026,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provItu.jpg" alt="owo"style="width:700px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Itudosa</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Commonly known as the heart swamp, Itudosa is an expanse of flat moorlands ranging from muddy bogs to rocky flats, with temperate forest towards the point of Ravens Nest.</p>'));

var el_provWit = L.marker([57.184373, -67.825746,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provWit.jpg" alt="owo"style="width:500px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Witrich</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Cold marshes and pine forests sprawl over the land of Witrich, with the muddy water often freezing over. Live is hard and many rely on scavenging to survive.</p>'));

var el_provCant = L.marker([61.104427, -29.771442,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provCant.jpg" alt="owo"style="width:500px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Cantrell</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Cantrell is a land of twisting rocky outcrops, twisting trees and winding lowlands. Banditry is common here due to Hrethics rule, but the alcoves make great nests for predators as well.</p>'));

var el_provIx = L.marker([64.792571, -12.815003,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provIx.jpg" alt="owo"style="width:550px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Ixemos</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Surrounded by rocky shores, Ixemos is a large watery swamp that bleeds into the ocean, with the landmass dictated by the tides.</p>'));

var el_provFell = L.marker([66.153788, 31.724947,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provFR.jpg" alt="owo"style="width:500px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Fellrath</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">With overgrown forests and consumed in a maze of bramble, the wilderness of Fellrath harbours resentment towards sentient life that lives there, and the trees thirst for blood.</p>'));

var el_provSB = L.marker([58.309497, 69.622971,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provSB.jpg" alt="owo"style="width:500px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Sword Break</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">A bleak and desolate peak with hardy vegetation and secluded mountains where inhabitants try to avoid the gaze of their undead ruler.</p>'));

var el_provDG = L.marker([56.023913, 16.565719,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provDG.jpg" alt="owo"style="width:500px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Draygrave</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Idyllic countryside and roofed forests spread out along the land of Draygrave with no shortage headstones, continuously covered in grim autumnal gloom.</p>'));

var el_provGB = L.marker([39.776241, -19.691366,],{icon: provinceIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/provGrim.jpg" alt="owo"style="width:500px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Grimbridge</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Dense woods and forested marshes make the trade routes out of Grimbridge treacherous, and so many stick to the well mapped waterways and estuaries.</p>'));








