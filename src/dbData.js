const picksOpen = true

const defaultSD = {
	g1: [null, null, null],
	g2: [null, null, null],
	g3: [null, null, null],
	g4: [null, null, null],
	g5: [null, null, null],
	g6: [null, null, null],
	user:null
}

const standingsArr = [
	{'name':'ANA PAULA','pts':'0','win':'0','td':'0'},
	{'name':'MAMI','pts':'0','win':'0','td':'0'},
	{'name':'PAPI','pts':'0','win':'0','td':'0'},
	{'name':'FABIAN','pts':'0','win':'0','td':'0'},
	{'name':'ANDRES','pts':'0','win':'0','td':'0'},
	{'name':'DIEGO','pts':'0','win':'0','td':'0'},
]

const gameDict = [
	{'game_id':'g1','team_code':{'home':'HOU','away':'LAC'},'team_name':{'home':'TEXANS','away':'CHARGERS'},'ML':{'home':118,'away':82},'TD':{'home':[['RB','J.Mixon',20],['WR','N.Collins',26],['TE','D.Schultz',50],['WR','J.Metchie',53],['WR','X.Hutchinson',56],['WR','R.Woods',96],['D/ST','Texans D/ST',111],['QB','C.Stroud',125],],'away':[['RB','J.Dobbins',23],['WR','L.McConkey',24],['WR','Q.Johnston',37],['WR','D.Chark',46],['WR','J.Palmer',47],['TE','W.Dissly',51],['QB','J.Herbert',62],['D/ST','Chargers D/ST',107],]},},
	{'game_id':'g2','team_code':{'home':'BAL','away':'PIT'},'team_name':{'home':'RAVENS','away':'STEELERS'},'ML':{'home':32,'away':168},'TD':{'home':[['RB','D.Henry',15],['TE','M.Andrews',24],['WR','R.Bateman',27],['QB','L.Jackson',36],['TE','I.Likely',38],['WR','N.Agholor',47],['D/ST','Ravens D/ST',76],['RB','K.Mitchell',171],],'away':[['WR','G.Pickens',35],['WR','N.Harris',36],['TE','P.Freiermuth',43],['RB','J.Warren',52],['WR','C.Austin',62],['WR','M.Williams',98],['QB','R.Wilson',148],['D/ST','Steelers D/ST',159],]},},
	{'game_id':'g3','team_code':{'home':'BUF','away':'DEN'},'team_name':{'home':'BILLS','away':'BRONCOS'},'ML':{'home':42,'away':158},'TD':{'home':[['RB','J.Cook',18],['QB','J.Allen',19],['WR','K.Shakir',37],['WR','K.Coleman',42],['TE','D.Kincaid',44],['WR','A.Cooper',51],['D/ST','Bills D/ST',60],['RB','R.Davis',61],['WR','M.Hollins',62],['WR','C.Samuel',73],],'away':[['WR','C.Sutton',27],['WR','M.Mims Jr.',39],['RB','J.McLaughlin',51],['RB','J.Williams',56],['RB','A.Estime',58],['QB','B.Nix',61],['WR','D.Vele',67],['WR','T.Franklin',95],['D/ST','Broncos D/ST',150],['WR','L.Humphrey',220],]},},
	{'game_id':'g4','team_code':{'home':'PHI','away':'GB'},'team_name':{'home':'EAGLES','away':'PACKERS'},'ML':{'home':64,'away':136},'TD':{'home':[['RB','S.Barkley',16],['QB','J.Hurts',20],['WR','A.Brown',25],['WR','D.Smith',33],['TE','D.Goedert',50],['D/ST','Eagles D/ST',72],['RB','K.Gainwell',119],['WR','J.Dotson',120],['TE','G.Calcaterra',125],['WR','A.Smith',355],],'away':[['RB','J.Jacobs',22],['WR','J.Reed',35],['WR','R.Doubs',35],['TE','T.Kraft',41],['WR','D.Wicks',42],['TE','L.Musgrave',96],['D/ST','Packers D/ST',99],['RB','E.Wilson',125],['WR','B.Melton',125],['QB','J.Love',150],]},},
	{'game_id':'g5','team_code':{'home':'TB','away':'WAS'},'team_name':{'home':'BUCCANEERS','away':'COMMANDERS'},'ML':{'home':80,'away':120},'TD':{'home':[['RB','B.Irving',17],['WR','M.Evans',22],['WR','J.McMillan',30],['RB','R.White',42],['TE','C.Otton',44],['TE','P.Durham',44],['WR','S.Shepard',49],['QB','B.Mayfield',73],['D/ST','Bucs D/ST',74],],'away':[['WR','T.McLaurin',23],['RB','B.Robinson',28],['QB','J.Daniels',31],['TE','Z.Ertz',37],['RB','A.Ekeler',38],['WR','O.Zaccheaus',41],['WR','D.Brown',66],['D/ST','Commanders D/ST',90],['WR','J.Crowder',114],]},},
	{'game_id':'g6','team_code':{'home':'LAR','away':'MIN'},'team_name':{'home':'RAMS','away':'VIKINGS'},'ML':{'home':106,'away':94},'TD':{'home':[['RB','K.Williams',17],['WR','P.Nacua',22],['WR','C.Kupp',30],['WR','D.Robinson',46],['TE','T.Higbee',67],['D/ST','Rams D/ST',90],['WR','T.Atwell',98],['QB','M.Stafford',290],],'away':[['WR','J.Jefferson',21],['RB','A.Jones',24],['WR','J.Addison',26],['TE','T.Hockenson',34],['RB','C.Akers',42],['WR','J.Nailor',67],['QB','S.Darnold',84],['D/ST','Vikings D/ST',102],]},},
]

const picksArchiveDict = {
	'ANDRES':[[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'ANA PAULA':[[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'FABIAN':[[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'DIEGO':[[['LAC','CHARGERS','82','na'],['D.Schultz','50','na'],['Q.Johnston','37','na'],],[['BAL','RAVENS','32','na'],['L.Jackson','36','na'],['J.Warren','52','na'],],[['BUF','BILLS','42','na'],['D.Kincaid','44','na'],['A.Estime','58','na'],],[['GB','PACKERS','136','na'],['Eagles D/ST','72','na'],['L.Musgrave','96','na'],],[['TB','BUCCANEERS','80','na'],['M.Evans','22','na'],['B.Robinson','28','na'],],[['MIN','VIKINGS','94','na'],['C.Kupp','30','na'],['J.Addison','26','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'MAMI':[[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'PAPI':[[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
}

const curGameIdx = 0
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

