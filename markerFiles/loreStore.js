		var characterIcon = L.icon({
		iconUrl: 'icons/CharacterIcon.png',
        shadowUrl: 'icons/Shadow.png',
        iconSize:     [40, 65],
        shadowSize:   [1, 1],
        iconAnchor:   [20, 64],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
		});

var el_octavia = L.marker([-49.010053,-38.913846,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/Octavia.jpg" alt="owo"style="width:300px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Lady Octavia, Queen of Orhelm</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Standing 12 feet tall, Lady Octavia appears as a regal woman with bark skin, glowing emerald eyes and grand dragonfly wings. An Ironwood crown grows from her head, and her garments are a mixture of leaves and bark. The second born of the Fae sisters and ruler of Orhelm, she represents ruthless law of nature, despising works of artifice and content to see her plants wipe out the villainous history of humanity.</p>'));
		
var el_illanor = L.marker([45.67063,-40.048189,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/illanor.jpg" alt="owo"style="width:350px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Witch Queen Illanor</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The first sibling was darker than the other two. She fled to Sethmoor after an exile, and nothing was heard of her since. Clawed, dark feathered wings sprout from her back and her pale, cracked skin is stained with black tribal paint. She wears a tattered dress and a crown of thorns, with tangles of black hair tumbling down her face. Illanor holds dominion over the darkest parts of the swamp and would adore in seeing her sisters kingdoms fall to her dark fey. Her countless covens are at constant war with the self-proclaimed saviours of humanity.</p>'));

var el_lordOsyth = L.marker([22.987775, -67.570965,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/lordOsyth.jpg" alt="owo"style="width:350px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Lord Osyth, the Blade of Thirass</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">•   During the Era of Power, several angelborn were dispatched from the Asheland to violently silence the horrors and occultism that sprung up around Sethmoor. The leader of them was Osyth Glendal, a powerful warlord and favoured of Vath the Bloody Twin, stationed at Fort Thirass. He was brutal, efficient, and cunning, and by his hand scores of fiends, undead, and aberrations were carved and cleaved, as well as the more peaceful witches of the moor; purification didnt discriminate. He and his knights looked unstoppable, until several covens banded together to end is bloody rampage, binding his soul to his sword and scattering his body as ash in the wind. They entombed him within fort Thirass, which started to sink at the will of the elders. Now Osyth shares hateful power, his angelic spark forgotten, telling his followers to use any means necessary to cleanse the swamp.</p>'));

var el_nitric = L.marker([13.873681, -39.680386,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/NDT.jpg" alt="owo"style="width:500px;height:300px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Nitric, Dissolver of Thrones</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Malicious, scheming, and callous, Nitric is the archetypical tyrant. Seeing all of humanity as below him and all treasures his to own, the dissolver sends bands of dragon blooded warriors to extort the surrounding settlements, killing anyone who disagrees with their methods. His name was earned during the late Era of Power, when he overtook and renamed Blightmoor. From this seat, armies fell and corroded at his breath, and one by one the kingdoms surrounding Blightmoor fell, all main keeps dissolved until there was little left but smooth stone boulders.</p>'));

var el_stoneShaper = L.marker([-46.166855, -90.877123,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/stoneShaper.jpg" alt="owo"style="width:400px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>The Stoneshaper of Mirador</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Enigmatic and powerful, though the Stoneshaper has not been seen in millennium, but still its magic can be felt. Before the dragons and before Octavia, the Stoneshaper moved the earth to protect the land from the expansion of the Elves. Gargantuan elementals were its to command, and under its giant feet lived the devoted. Still, even after it has been slumbering, it fuels ancient magic to aid the land in conquest over it. </p>'));

var el_OR = L.marker([2.888228, -9.61125,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/OR.jpg" alt="owo"style="width:500px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Olzitaghar Radridal, the Whisper in Air</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Who rules Radridal? Who are the knights? The answer is the wind. Not just any wind, but the cold breeze that whirls around the peak of the tower of Radridal. The wind that whisks up coin and rumour alike. The wind that animates and mobilises the silent knights that acts as enforcement. Once a lord or a lady, no one knows. As ancient as the land itself, yet bound to the tower, Olzitaghar Radridal seems to be an elemental force whose goals are as invisible as it.</p>'));

var el_Hrethic = L.marker([57.656852, -36.948257,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/Hrethic.jpg" alt="owo"style="width:400px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Hrethic of Cantrell</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Hrethic did not always don the mask of tyranny. In life he was a benevolent ruler, lovestruck by his lady Thedware. For her he would do anything. Towers, gardens, books and wine, the lord of Cantrell gave her everything. If she wanted a ball, he would throw the grandest one imaginable. If she wanted a pet, only the most exotic would suffice. However, his tunnel vision was his downfall. The tax collector, fueled with demonic vigor, rampaged through Hrethics manor, collecting Lady Thedwares head as punishment for Hrethics indulgence. In a rage Hrethic took up his blade and beheaded the collector, but not before she spat a curse at him, causing him to live this day every month for all eternity. It was then Hrethic turned his attention finally to his lands, though nothing but hateful ruin now falls upon them.</p>'));

var el_Collector = L.marker([58.06248, -22.191824,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/TheCollector.jpg" alt="owo"style="width:400px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>The Collector of Cantrell</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Saidia Mauthe was a simple tax collector for Hrethic. Though she always shaved off gold for herself, she witnessed firsthand Hrethics negligence of Letrell and the surrounding villages. Having enough of interacting with a populace extorted to the dirt, she consulted a coven of witches to alleviate this horror. The witches agreed, and the tax collector returned with demonic vigour to the steps of Hrethics manor. She beheaded his wife, and before the lord could return the favour, she spat the Curse of Tithes, forcing him to relive that moment once a month for all eternity. Unfortunately, this included her. Now Saidia roams the wilds of Cantrell, continuing to collect her taxes. This, however, is often watch was detached from her neck.</p>'));

var el_stMathe = L.marker([21.970791, 16.565736,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/SaintMathe.jpg" alt="owo"style="width:350px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Saint Mathe Usis, the Purifier</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">When Sethmoor was young and Marsh-Heart was small, people could only scavenge what they could from the wild. The horrors that leaked through worlds and what magical beasts arose from the swamp could easily destroy humanity. this was until the daughter of a small noble house rose to confront the night. Mathe Usis, donned in her black armour, dared for the villagers to rise with her. She found that so many were so easily roused, once given the belief that they could fight back. For three years every night, Mathes crusades through the moorlands gave people hope, with each venture bringing back heads of monsters and criminals alike. Once she died, her ideals lived on, only strengthening the ideology of Sethmoors newest military might.</p>'));

var el_stArchi = L.marker([13.082582, 9.49404,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/Archi.jpg" alt="owo"style="width:350px;height:700px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Saint Archibald, the Dawning Bastion</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Sir Archibald was a kind and gentle soul from Orhelm, a member of the Candlekeepers who only wanted to stand with the desperate and guide them towards a safer place. In his time in Sethmoor however he found that the dark was not always tangible. In time, the gentle cleric became adept in rooting out the darkness within the hearts of people, divining what was within them and bringing it to the light for all to see. Eventually Archibald found a disturbing strand that led him down a rabbit hole and into the depths of the church, where the bishops harboured eldritch practices. And so, on the next speech the bishop made, Archibald and a band on his followers kicked down the doors of the church with warrants and scrolls. The heretical priests withered in the light of Archibalds lantern, and thus his title was set.</p>'));

var el_stEdu = L.marker([3.58994, 12.463371,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/edusa.jpg" alt="owo"style="width:500px;height:350px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Saint Edusa, the Burning Martyr</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Edusa Usis was the second daughter of Claudia Usis IV. The Cathars had been in force around the realm, the inquisition had bee rooting out evil, and people in the now formed Cradle were happy. However outside the border of her province, witches and the uncouth started dabbling in more powerful magic. Cathar battalions would go missing, be slaughtered, or be turned into horrid creatures. Edusa pleaded for the use of dark magic to train the Cathars for these threats, but her mother refused. When a whole village was sacrificed in a storm of blood magic, she personally led a group of Cathars to vanquish the evildoers. They were all slain, and in her dying breaths, Edusa called upon the wrath of the Gods, incineration the land around her in an inferno maelstrom. Seeing her daughters charred corpse, Claudia, consumed by hate and guilt, allowed the restricted use of dark magic to train a sect of warriors in her name.</p>'));

var el_stDeg = L.marker([24.180274, 29.585049,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/degore.jpg" alt="owo"style="width:500px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Saint Degore, the Sadistic</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">Humanity had no contest with the Pits. This Degore knew well. The only thing a demon feared was one more powerful than it, only one crueller and more callous. Degore always found a strange joy in the suffering of others, seeing people wills break in the torture chambers where he trained. When he joined the Cathars, he was known for his disregard for the righteous way the Cathars were known for. When a demonic hoard broke loose in the swamps, his battalion went to enact justice. Degore thirsted for violence, yet his commander ordered regimented tactics. When the hoard broke their formation, killing the commander, Ignored orders to retreat. Filled with rage, he leaped into the fray, wielding holy fire with reckless abandon, laughing as he split bone from flesh and limb from body. Soon those brave enough to join him were also consumed by the thrill of carnage. Ten Cathars returned that day, and they were eternally known as Squadrus Sadistica.</p>'));

var el_CUXI = L.marker([11.633232, 22.269978,],{icon: characterIcon}).bindPopup(L.popup({maxWidth:1000}).setContent('<center><img src="usedImages/CUXI.jpg" alt="owo"style="width:350px;height:500px;"></center><br><p style="font-family:Perpetua Titling MT; font-size:40px; text-align:center"><b>Supreme Commander Lady Claudia Usis XI</b></p><hr><p style="font-family:Baskerville Old Face; font-size:20px">The matriarch of house Usis, Claudia Usis IX is the firmest leader the realm has had in a century. Her father had a looser grip that led to the corruption in the royal court and several swaths of the moorlands reclaimed by their enemies. Once he died of suspicious circumstances, she took up the mantel of leader and immediately set into action harsh verdicts. Genocides of witches, increased operations of the inquisition, and great cleansings of corrupt lands followed the year of her rule, showing everyone once more that house Usis and the Cradle were not giving up what they fought for easily. Now many of the crusades have finished and construction has started on great walls to keep safe villages and hamlets around Marsh-Heart, Claudia sits upon a ruthless empire hellbent on protecting its people.</p>'));