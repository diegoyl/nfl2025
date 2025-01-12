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
	{'name':'FABIAN','pts':'345','win':'308','td':'37'},
	{'name':'PAPI','pts':'327','win':'250','td':'77'},
	{'name':'ANDRES','pts':'133','win':'70','td':'63'},
	{'name':'DIEGO','pts':'100','win':'38','td':'62'},
	{'name':'ANA PAULA','pts':'0','win':'0','td':'0'},
	{'name':'MAMI','pts':'0','win':'0','td':'0'},
]

const gameDict = [
	{'game_id':'g1','team_code':{'home':'HOU','away':'LAC'},'team_name':{'home':'TEXANS','away':'CHARGERS'},'ML':{'home':118,'away':82},'TD':{'home':[['RB','J.Mixon',19],['WR','N.Collins',25],['TE','D.Schultz',46],['WR','J.Metchie',59],['WR','X.Hutchinson',107],['WR','R.Woods',125],['D/ST','Texans D/ST',113],['QB','C.Stroud',125],],'away':[['RB','J.Dobbins',24],['WR','L.McConkey',26],['WR','Q.Johnston',35],['WR','D.Chark',46],['WR','J.Palmer (OUT)',0],['TE','W.Dissly',58],['QB','J.Herbert',67],['D/ST','Chargers D/ST',107],['RB','G.Edwards',53],]},},
	{'game_id':'g2','team_code':{'home':'BAL','away':'PIT'},'team_name':{'home':'RAVENS','away':'STEELERS'},'ML':{'home':32,'away':168},'TD':{'home':[['RB','D.Henry',15],['TE','M.Andrews',26],['WR','R.Bateman',27],['QB','L.Jackson',35],['TE','I.Likely',39],['WR','N.Agholor',58],['D/ST','Ravens D/ST',76],['RB','K.Mitchell',171],['RB','J.Hill',73],],'away':[['WR','G.Pickens',36],['WR','N.Harris',34],['TE','P.Freiermuth',47],['RB','J.Warren',47],['WR','C.Austin',73],['WR','M.Williams',113],['QB','R.Wilson',107],['D/ST','Steelers D/ST',148],]},},
	{'game_id':'g3','team_code':{'home':'BUF','away':'DEN'},'team_name':{'home':'BILLS','away':'BRONCOS'},'ML':{'home':38,'away':162},'TD':{'home':[['RB','J.Cook',19],['QB','J.Allen',18],['WR','K.Shakir',37],['WR','K.Coleman',42],['TE','D.Kincaid',44],['WR','A.Cooper',53],['D/ST','Bills D/ST',61],['RB','R.Davis',59],['WR','M.Hollins',64],['WR','C.Samuel',73],],'away':[['WR','C.Sutton',28],['WR','M.Mims Jr.',41],['RB','J.McLaughlin',41],['RB','J.Williams',37],['RB','A.Estime(OUT)',0],['QB','B.Nix',59],['WR','D.Vele',67],['WR','T.Franklin',98],['D/ST','Broncos D/ST',125],['WR','L.Humphrey',240],]},},
	{'game_id':'g4','team_code':{'home':'PHI','away':'GB'},'team_name':{'home':'EAGLES','away':'PACKERS'},'ML':{'home':62,'away':138},'TD':{'home':[['RB','S.Barkley',16],['QB','J.Hurts',20],['WR','A.Brown',25],['WR','D.Smith',33],['TE','D.Goedert',50],['D/ST','Eagles D/ST',72],['RB','K.Gainwell',119],['WR','J.Dotson',120],['TE','G.Calcaterra',125],['WR','A.Smith',355],],'away':[['RB','J.Jacobs',20],['WR','J.Reed',37],['WR','R.Doubs',38],['TE','T.Kraft',45],['WR','D.Wicks',45],['TE','L.Musgrave',125],['D/ST','Packers D/ST',99],['RB','E.Wilson',113],['WR','B.Melton',136],['QB','J.Love',136],]},},
	{'game_id':'g5','team_code':{'home':'TB','away':'WAS'},'team_name':{'home':'BUCCANEERS','away':'COMMANDERS'},'ML':{'home':80,'away':120},'TD':{'home':[['RB','B.Irving',17],['WR','M.Evans',21],['WR','J.McMillan',30],['RB','R.White',42],['TE','C.Otton',44],['TE','P.Durham',44],['WR','S.Shepard',49],['QB','B.Mayfield',73],['D/ST','Bucs D/ST',74],],'away':[['WR','T.McLaurin',23],['RB','B.Robinson',28],['QB','J.Daniels',29],['TE','Z.Ertz',38],['RB','A.Ekeler',37],['WR','O.Zaccheaus',42],['WR','D.Brown',66],['D/ST','Commanders D/ST',90],['WR','J.Crowder',114],]},},
	{'game_id':'g6','team_code':{'home':'LAR','away':'MIN'},'team_name':{'home':'RAMS','away':'VIKINGS'},'ML':{'home':116,'away':84},'TD':{'home':[['RB','K.Williams',18],['WR','P.Nacua',22],['WR','C.Kupp',29],['WR','D.Robinson',46],['TE','T.Higbee',67],['D/ST','Rams D/ST',90],['WR','T.Atwell',98],['QB','M.Stafford',290],],'away':[['WR','J.Jefferson',20],['RB','A.Jones',22],['WR','J.Addison',27],['TE','T.Hockenson',35],['RB','C.Akers',42],['WR','J.Nailor',67],['QB','S.Darnold',84],['D/ST','Vikings D/ST',102],]},},
]

const picksArchiveDict = {
	'ANDRES':[[['LAC','CHARGERS','82','incorP'],['J.Metchie','59','incorP'],['L.McConkey','26','corP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['J.Williams','37','incorP'],],[['GB','PACKERS','138','incorP'],['A.Brown','25','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['LAR','RAMS','116','na'],['P.Nacua','22','na'],['A.Jones','22','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'ANA PAULA':[[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'FABIAN':[[['HOU','TEXANS','118','corP'],['D.Schultz','46','incorP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['J.McLaughlin','41','incorP'],],[['GB','PACKERS','138','incorP'],['D.Smith','33','incorP'],['J.Jacobs','20','corP'],],[['WAS','COMMANDERS','120','corP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','na'],['K.Williams','18','na'],['A.Jones','22','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'DIEGO':[[['LAC','CHARGERS','82','incorP'],['N.Collins','25','corP'],['Q.Johnston','35','incorP'],],[['PIT','STEELERS','168','incorP'],['I.Likely','39','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['B.Nix','59','incorP'],],[['GB','PACKERS','138','incorP'],['Eagles D/ST','72','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['J.Daniels','29','incorP'],],[['LAR','RAMS','116','na'],['C.Kupp','29','na'],['Vikings D/ST','102','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'MAMI':[[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'PAPI':[[['HOU','TEXANS','118','corP'],['N.Collins','25','corP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['D.Henry','15','corP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['C.Sutton','28','incorP'],],[['PHI','EAGLES','62','corP'],['S.Barkley','16','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','na'],['K.Williams','18','na'],['A.Jones','22','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
}

const curGameIdx = 5
const curGameIdxRound = 5

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


