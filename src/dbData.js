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
	{'game_id':'g7','team_code':{'home':'KC','away':'HOU'},'team_name':{'home':'CHIEFS','away':'TEXANS'},'ML':{'home':29,'away':171},'TD':{'home':[['RB','I.Pacheco',28],['TE','T.Kelce',28],['RB','K.Hunt',34],['WR','X.Worthy',37],['WR','M.Brown',43],['WR','D.Hopkins',45],['WR','N.Gray',73],['QB','P.Mahomes',73],['WR','J.Smith-Schuster',79],['D/ST','Chiefs D/ST',96],],'away':[['RB','J.Mixon',26],['WR','N.Collins',31],['TE','D.Schultz',52],['WR','J.Metchie',73],['WR','R.Woods',107],['WR','D.Johnson',107],['WR','X.Hutchinson',136],['D/ST','Texans D/ST',136],['TE','C.Stover',148],['QB','C.Stroud',153],]},},
	{'game_id':'g8','team_code':{'home':'DET','away':'WAS'},'team_name':{'home':'LIONS','away':'COMMANDERS'},'ML':{'home':34,'away':166},'TD':{'home':[['OL','Lions O-Line',300],['RB','J.Gibbs',13],['RB','D.Montgomery',14],['WR','A.St.Brown',18],['WR','J.Williams',20],['TE','S.LaPorta',25],['WR','C.Reynolds',35],['WR','T.Patrick',57],['D/ST','Lions D/ST',70],['QB','J.Goff',125],],'away':[['WR','T.McLaurin',25],['QB','J.Daniels',26],['RB','B.Robinson',28],['TE','Z.Ertz',42],['RB','A.Ekeler',37],['WR','O.Zaccheaus',50],['WR','D.Brown',52],['D/ST','Commanders D/ST',96],['WR','J.Crowder',205],['RB','J.McNichols',205],]},},
	{'game_id':'g9','team_code':{'home':'PHI','away':'LAR'},'team_name':{'home':'EAGLES','away':'RAMS'},'ML':{'home':58,'away':142},'TD':{'home':[['RB','S.Barkley',14],['QB','J.Hurts',17],['WR','A.Brown',0],['WR','D.Smith',0],['TE','D.Goedert',0],['D/ST','Eagles D/ST',0],['RB','K.Gainwell',0],['WR','J.Dotson',0],['TE','G.Calcaterra',0],['WR','A.Smith',0],],'away':[['RB','K.Williams',0],['WR','P.Nacua',0],['WR','C.Kupp',0],['WR','D.Robinson',0],['TE','T.Higbee',0],['D/ST','Rams D/ST',0],['WR','T.Atwell',0],['QB','M.Stafford',0],]},},
	{'game_id':'g10','team_code':{'home':'BUF','away':'BAL'},'team_name':{'home':'BILLS','away':'RAVENS'},'ML':{'home':103,'away':97},'TD':{'home':[['QB','J.Allen',21],['RB','J.Cook',21],['WR','K.Shakir',31],['WR','K.Coleman',41],['TE','D.Kincaid',43],['WR','A.Cooper',67],['D/ST','Bills D/ST',84],['RB','R.Davis',64],['WR','M.Hollins',58],['RB','T.Johnson',64],],'away':[['RB','D.Henry',15],['WR','Z.Flowers ???',28],['TE','M.Andrews',27],['WR','R.Bateman',28],['QB','L.Jackson',34],['TE','I.Likely',43],['WR','T.Wallace',61],['D/ST','Ravens D/ST',77],['RB','J.Hill',73],['WR','N.Agholor',102],]},},
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
