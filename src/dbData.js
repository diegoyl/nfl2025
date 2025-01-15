const picksOpen = true

const defaultSD = {
	g7: [null, null, null],
	g8: [null, null, null],
	g9: [null, null, null],
	g10: [null, null, null],
	user:null
}

const standingsArr = [
	{'name':'FABIAN','pts':'363','win':'308','td':'55'},
	{'name':'PAPI','pts':'345','win':'250','td':'95'},
	{'name':'ANDRES','pts':'249','win':'186','td':'63'},
	{'name':'DIEGO','pts':'216','win':'154','td':'62'},
	{'name':'ANA PAULA','pts':'0','win':'0','td':'0'},
	{'name':'MAMI','pts':'0','win':'0','td':'0'},
]

const gameDict = [
	{'game_id':'g7','team_code':{'home':'KC','away':'HOU'},'team_name':{'home':'CHIEFS','away':'TEXANS'},'ML':{'home':29,'away':171},'TD':{'home':[['RB','I.Pacheco',27],['TE','T.Kelce',28],['WR','X.Worthy',34],['QB','P.Mahomes',73],['RB','K.Hunt',34],['WR','M.Brown',42],['WR','D.Hopkins',45],['WR','N.Gray',73],['WR','J.Watson',90],['D/ST','Chiefs D/ST',102],['RB','2+ Pacheco',136],['TE','2+ Kelce',159],],'away':[['RB','J.Mixon',26],['WR','N.Collins',31],['TE','D.Schultz',52],['WR','J.Metchie',73],['WR','R.Woods',107],['QB','C.Stroud',153],['D/ST','Texans D/ST',142],['WR','X.Hutchinson',113],['TE','Irv Smith',148],['RB','2+ Mixon',136],['WR','2+ Collins',182],]},},
	{'game_id':'g8','team_code':{'home':'DET','away':'WAS'},'team_name':{'home':'LIONS','away':'COMMANDERS'},'ML':{'home':36,'away':164},'TD':{'home':[['OL','Lions O-Line',330],['RB','J.Gibbs',15],['RB','D.Montgomery',16],['WR','A.St.Brown',18],['TE','S.LaPorta',25],['WR','J.Williams',25],['WR','T.Patrick',51],['D/ST','Lions D/ST',70],['QB','J.Goff',125],['RB','2+ Gibbs',37],['RB','2+ Montgomery',52],['WR','2+ St.Brown',64],['WR','2+ Williams',119],['TE','2+ LaPorta',125],['RB','C.Reynolds',159],],'away':[['WR','T.McLaurin',26],['QB','J.Daniels',27],['RB','B.Robinson',28],['RB','A.Ekeler',37],['TE','Z.Ertz',42],['WR','O.Zaccheaus',49],['WR','D.Brown',53],['D/ST','Commanders D/ST',90],['WR','2+ McLaurin',125],['QB','2+ Daniels',125],['RB','2+ Robinson',136],]},},
	{'game_id':'g9','team_code':{'home':'PHI','away':'LAR'},'team_name':{'home':'EAGLES','away':'RAMS'},'ML':{'home':55,'away':145},'TD':{'home':[['RB','S.Barkley',16],['QB','J.Hurts',20],['WR','A.Brown',26],['WR','D.Smith',34],['TE','D.Goedert',49],['D/ST','Eagles D/ST',69],['RB','2+ Barkley',49],['RB','3+ Barkley',194],['QB','2+ Hurts',73],['WR','2+ Brown',136],['WR','2+ Smith',240],['WR','J.Dotson',119],['RB','K.Gainwell',125],['TE','G.Calcaterra',159],],'away':[['RB','K.Williams',20],['WR','P.Nacua',26],['WR','C.Kupp',41],['WR','D.Robinson',66],['TE','T.Higbee',60],['TE','C.Parkinson',61],['QB','M.Stafford',378],['D/ST','Rams D/ST',113],['RB','2+ Kyren',84],['WR','2+ Nacua',136],['WR','2+ Kupp',309],['WR','T.Atwell',240],['RB','R.Rivers',205],]},},
	{'game_id':'g10','team_code':{'home':'BUF','away':'BAL'},'team_name':{'home':'BILLS','away':'RAVENS'},'ML':{'home':104,'away':96},'TD':{'home':[['QB','J.Allen',21],['RB','J.Cook',21],['WR','K.Shakir',32],['WR','K.Coleman',39],['TE','D.Kincaid',43],['WR','A.Cooper',67],['D/ST','Bills D/ST',79],['RB','R.Davis',65],['WR','M.Hollins',59],['RB','T.Johnson',65],['TE','D.Knox',79],['WR','C.Samuel',84],['QB','2+ Allen',88],['RB','2+ Cook',84],],'away':[['RB','D.Henry',15],['WR','Z.Flowers',28],['TE','M.Andrews',28],['WR','R.Bateman',28],['QB','L.Jackson',31],['TE','I.Likely',44],['RB','2+ Henry',39],['RB','3+ Henry',148],['WR','T.Wallace',73],['D/ST','Ravens D/ST',77],['RB','J.Hill',73],['WR','N.Agholor',113],['WR','2+ Flowers',171],['TE','2+ Andrews',159],]},},
]

const picksArchiveDict = {
	'ANDRES':[[['LAC','CHARGERS','82','incorP'],['J.Metchie','59','incorP'],['L.McConkey','26','corP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['J.Williams','37','incorP'],],[['GB','PACKERS','138','incorP'],['A.Brown','25','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['LAR','RAMS','116','corP'],['P.Nacua','22','incorP'],['A.Jones','22','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'ANA PAULA':[[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'FABIAN':[[['HOU','TEXANS','118','corP'],['D.Schultz','46','incorP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['J.McLaughlin','41','incorP'],],[['GB','PACKERS','138','incorP'],['D.Smith','33','incorP'],['J.Jacobs','20','corP'],],[['WAS','COMMANDERS','120','corP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','incorP'],['K.Williams','18','corP'],['A.Jones','22','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'DIEGO':[[['LAC','CHARGERS','82','incorP'],['N.Collins','25','corP'],['Q.Johnston','35','incorP'],],[['PIT','STEELERS','168','incorP'],['I.Likely','39','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['B.Nix','59','incorP'],],[['GB','PACKERS','138','incorP'],['Eagles D/ST','72','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['J.Daniels','29','incorP'],],[['LAR','RAMS','116','corP'],['C.Kupp','29','incorP'],['Vikings D/ST','102','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'MAMI':[[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'PAPI':[[['HOU','TEXANS','118','corP'],['N.Collins','25','corP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['D.Henry','15','corP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['C.Sutton','28','incorP'],],[['PHI','EAGLES','62','corP'],['S.Barkley','16','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','incorP'],['K.Williams','18','corP'],['A.Jones','22','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
}

const curGameIdx = 6
const curGameIdxRound = 0

// EXPORT ARRAY
const dbData = {
	picksOpen: picksOpen,
	gameDict: gameDict,
	defaultSD: defaultSD,
	standingsArr: standingsArr,
	picksArchiveDict: picksArchiveDict,
	curGameIdx: curGameIdx,
	curGameIdxRound: curGameIdxRound,
}

export default dbData;

