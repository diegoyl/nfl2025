const picksOpen = true

const defaultSD = {
	g10: [null, null, null],
	g11: [null, null, null],
	user:null
}

const standingsArr = [
	{'name':'FABIAN','pts':'558','win':'392','td':'166'},
	{'name':'PAPI','pts':'501','win':'334','td':'167'},
	{'name':'DIEGO','pts':'489','win':'347','td':'142'},
	{'name':'ANDRES','pts':'327','win':'186','td':'141'},
	{'name':'MAMI','pts':'171','win':'104','td':'67'},
	{'name':'ANA PAULA','pts':'0','win':'0','td':'0'},
]

const gameDict = [
	{'game_id':'g11','team_code':{'home':'KC','away':'BUF'},'team_name':{'home':'CHIEFS','away':'BILLS'},'ML':{'home':95,'away':105},'TD':{'home':[['TE','T.Kelce',21],['RB','I.Pacheco',22],['WR','X.Worthy',33],['QB','P.Mahomes',56],['RB','K.Hunt',27],['WR','M.Brown',33],['WR','D.Hopkins',36],['TE','N.Gray',56],['WR','J.Watson',79],['D/ST','Chiefs D/ST',67],['WR','J.Smith-Schuster',90],['TE','2+ Kelce',113],['RB','2+ Pacheco',113],],'away':[['QB','J.Allen',17],['RB','J.Cook',17],['WR','K.Shakir',26],['WR','K.Coleman',33],['TE','D.Kincaid',35],['WR','M.Hollins',44],['WR','A.Cooper',56],['RB','R.Davis',44],['RB','T.Johnson',56],['D/ST','Bills D/ST',67],['TE','D.Knox',56],['WR','C.Samuel',67],['RB','2+ Cook',56],['QB','2+ Allen',56],]},},
	{'game_id':'g12','team_code':{'home':'PHI','away':'WAS'},'team_name':{'home':'EAGLES','away':'COMMANDERS'},'ML':{'home':67,'away':133},'TD':{'home':[['RB','S.Barkley',13],['QB','J.Hurts',18],['WR','A.Brown',21],['WR','D.Smith',26],['TE','D.Goedert',36],['D/ST','Eagles D/ST',56],['WR','J.Dotson',86],['RB','K.Gainwell',86],['TE','G.Calcaterra',99],['RB','2+ Barkley',33],['RB','3+ Barkley',124],['QB','2+ Hurts',61],['WR','2+ Brown',99],['WR','2+ Smith',112],],'away':[['WR','T.McLaurin',18],['QB','J.Daniels',23],['RB','B.Robinson',24],['RB','A.Ekeler',31],['TE','Z.Ertz',33],['WR','O.Zaccheaus',43],['WR','D.Brown',44],['D/ST','Commanders D/ST',79],['RB','J.McNichols',86],['WR','2+ McLaurin',99],['QB','2+ Daniels',112],['RB','2+ Robinson',124],]},},
]

const picksArchiveDict = {
	'ANDRES':[[['LAC','CHARGERS','82','incorP'],['J.Metchie','59','incorP'],['L.McConkey','26','corP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['J.Williams','37','incorP'],],[['GB','PACKERS','138','incorP'],['A.Brown','25','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['LAR','RAMS','116','corP'],['P.Nacua','22','incorP'],['A.Jones','22','incorP'],],[['HOU','TEXANS','171','incorP'],['T.Kelce','27','corP'],['N.Collins','30','incorP'],],[['DET','LIONS','36','incorP'],['T.Patrick','58','incorP'],['J.Daniels','28','incorP'],],[['LAR','RAMS','145','incorP'],['A.Brown','26','incorP'],['P.Nacua','26','incorP'],],[['BAL','RAVENS','96','incorP'],['J.Allen','22','corP'],['R.Bateman','29','corP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'ANA PAULA':[[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'FABIAN':[[['HOU','TEXANS','118','corP'],['D.Schultz','46','incorP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['J.McLaughlin','41','incorP'],],[['GB','PACKERS','138','incorP'],['D.Smith','33','incorP'],['J.Jacobs','20','corP'],],[['WAS','COMMANDERS','120','corP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','incorP'],['K.Williams','18','corP'],['A.Jones','22','incorP'],],[['KC','CHIEFS','29','corP'],['T.Kelce','27','corP'],['D.Schultz','52','incorP'],],[['DET','LIONS','36','incorP'],['J.Goff','135','incorP'],['T.McLaurin','24','corP'],],[['PHI','EAGLES','55','corP'],['D.Goedert','50','incorP'],['T.Higbee','60','corP'],],[['BAL','RAVENS','96','incorP'],['J.Cook','22','incorP'],['L.Jackson','32','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'DIEGO':[[['LAC','CHARGERS','82','incorP'],['N.Collins','25','corP'],['Q.Johnston','35','incorP'],],[['PIT','STEELERS','168','incorP'],['I.Likely','39','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['B.Nix','59','incorP'],],[['GB','PACKERS','138','incorP'],['Eagles D/ST','72','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['J.Daniels','29','incorP'],],[['LAR','RAMS','116','corP'],['C.Kupp','29','incorP'],['Vikings D/ST','102','incorP'],],[['KC','CHIEFS','29','corP'],['D.Hopkins','45','incorP'],['X.Hutchinson','84','incorP'],],[['WAS','COMMANDERS','164','corP'],['2+ Montgomery','50','incorP'],['D.Brown','52','incorP'],],[['LAR','RAMS','145','incorP'],['J.Hurts','20','corP'],['T.Higbee','60','corP'],],[['BAL','RAVENS','96','incorP'],['K.Coleman','41','incorP'],['3+ Henry','160','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'MAMI':[[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['HOU','TEXANS','171','incorP'],['J.Watson','125','incorP'],['C.Stroud','171','incorP'],],[['DET','LIONS','36','incorP'],['J.Williams','25','corP'],['Z.Ertz','42','corP'],],[['LAR','RAMS','145','incorP'],['3+ Barkley','194','incorP'],['2+ Kupp','320','incorP'],],[['BUF','BILLS','104','corP'],['J.Cook','22','incorP'],['N.Agholor','113','incorP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'PAPI':[[['HOU','TEXANS','118','corP'],['N.Collins','25','corP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['D.Henry','15','corP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['C.Sutton','28','incorP'],],[['PHI','EAGLES','62','corP'],['S.Barkley','16','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','incorP'],['K.Williams','18','corP'],['A.Jones','22','incorP'],],[['KC','CHIEFS','29','corP'],['I.Pacheco','28','incorP'],['N.Collins','30','incorP'],],[['DET','LIONS','36','incorP'],['J.Gibbs','13','corP'],['B.Robinson','30','corP'],],[['PHI','EAGLES','55','corP'],['S.Barkley','15','corP'],['K.Williams','20','incorP'],],[['BAL','RAVENS','96','incorP'],['J.Cook','22','incorP'],['D.Henry','14','corP'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
}

const curGameIdx = 10
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
