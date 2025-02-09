const picksOpen = true

const defaultSD = {
	g13: [null, [null, null], [null, null]],
	g14: [null],
	g15: [null],
	g16: [null],
	user:null
}

const standingsArr = [
	{'name':'PAPI','pts':'595','win':'389','td':'206'},
	{'name':'FABIAN','pts':'592','win':'392','td':'200'},
	{'name':'DIEGO','pts':'580','win':'438','td':'142'},
	{'name':'ANDRES','pts':'472','win':'186','td':'286'},
	{'name':'MAMI','pts':'171','win':'104','td':'67'},
	{'name':'ANA PAULA','pts':'0','win':'0','td':'0'},
]

const gameDict = [
	{'game_id':'g13','team_code':{'home':'PHI','away':'KC'},'team_name':{'home':'EAGLES','away':'CHIEFS'},'ML':{'home':106,'away':94},'TD':{'home':[['RB','S.Barkley',15],['QB','J.Hurts',20],['WR','A.Brown',30],['WR','D.Smith',36],['TE','D.Goedert',48],['D/ST','Eagles D/ST',113],['WR','J.Dotson',240],['RB','K.Gainwell',171],['TE','G.Calcaterra',393],['RB','2+ Barkley',39],['RB','3+ Barkley',182],['RB','4+ Barkley',500],['QB','2+ Hurts',73],['WR','2+ Brown',182],['WR','2+ Smith',286],],'away':[['TE','T.Kelce',24],['RB','K.Hunt',27],['WR','X.Worthy',28],['RB','I.Pacheco',53],['WR','M.Brown',45],['WR','D.Hopkins',73],['QB','P.Mahomes',67],['TE','N.Gray',81],['D/ST','Chiefs D/ST',113],['WR','J.Smith-Schuster',90],['WR','S.Perine',159],['TE','2+ Kelce',122],['RB','2+ Hunt',173],['WR','2+ Worthy',159],['RB','2+ Pacheco',470],]},},
	{'game_id':'g14','MVP':[['Quarterback',10],['Running Back',25],['Wide Receiver',75],['Tight End',100],['Other (K, DEF, OL)',110],],'team_code':{'home':'','away':''},'team_name':{'home':'','away':''},'ML':{'home':0,'away':0},'TD':{},},
	{'game_id':'g15','Color':[['PURPLE',35],['YELLOW / GREEN',38],['ORANGE',56],['BLUE',84],['RED / PINK',84],['CLEAR / WATER',113],],'team_code':{'home':'','away':''},'team_name':{'home':'','away':''},'ML':{'home':0,'away':0},'TD':{},},
	
	
	
]

const picksArchiveDict = {
	'ANDRES':[[['LAC','CHARGERS','82','incorP'],['J.Metchie','59','incorP'],['L.McConkey','26','corP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['J.Williams','37','incorP'],],[['GB','PACKERS','138','incorP'],['A.Brown','25','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['LAR','RAMS','116','corP'],['P.Nacua','22','incorP'],['A.Jones','22','incorP'],],[['HOU','TEXANS','171','incorP'],['T.Kelce','27','corP'],['N.Collins','30','incorP'],],[['DET','LIONS','36','incorP'],['T.Patrick','58','incorP'],['J.Daniels','28','incorP'],],[['LAR','RAMS','145','incorP'],['A.Brown','26','incorP'],['P.Nacua','26','incorP'],],[['BAL','RAVENS','96','incorP'],['J.Allen','22','corP'],['R.Bateman','29','corP'],],[['WAS','COMMANDERS','145','incorP'],['J.Dotson','153','incorP'],['Commanders D/ST','125','incorP'],],[['BUF','BILLS','109','incorP'],['2+ Kelce','135','incorP'],['C.Samuel','145','corP'],],[['-','-','-','na'],['S.Barkley','15','na'],['T.Kelce','24','na'],],[['-','-','-','na'],['','','na'],['','','na'],],],
	'ANA PAULA':[[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['KC','CHIEFS','94','na'],['S.Barkley','15','na'],['T.Kelce','24','na'],],[['','','','na'],['','','na'],['','','na'],],],
	'FABIAN':[[['HOU','TEXANS','118','corP'],['D.Schultz','46','incorP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['J.McLaughlin','41','incorP'],],[['GB','PACKERS','138','incorP'],['D.Smith','33','incorP'],['J.Jacobs','20','corP'],],[['WAS','COMMANDERS','120','corP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','incorP'],['K.Williams','18','corP'],['A.Jones','22','incorP'],],[['KC','CHIEFS','29','corP'],['T.Kelce','27','corP'],['D.Schultz','52','incorP'],],[['DET','LIONS','36','incorP'],['J.Goff','135','incorP'],['T.McLaurin','24','corP'],],[['PHI','EAGLES','55','corP'],['D.Goedert','50','incorP'],['T.Higbee','60','corP'],],[['BAL','RAVENS','96','incorP'],['J.Cook','22','incorP'],['L.Jackson','32','incorP'],],[['WAS','COMMANDERS','145','incorP'],['D.Goedert','50','incorP'],['A.Ekeler','56','incorP'],],[['BUF','BILLS','109','incorP'],['X.Worthy','34','corP'],['D.Kincaid','52','incorP'],],[['-','-','-','na'],['S.Barkley','15','na'],['T.Kelce','24','na'],],[['-','-','-','na'],['','','na'],['','','na'],],],
	'DIEGO':[[['LAC','CHARGERS','82','incorP'],['N.Collins','25','corP'],['Q.Johnston','35','incorP'],],[['PIT','STEELERS','168','incorP'],['I.Likely','39','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['B.Nix','59','incorP'],],[['GB','PACKERS','138','incorP'],['Eagles D/ST','72','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['J.Daniels','29','incorP'],],[['LAR','RAMS','116','corP'],['C.Kupp','29','incorP'],['Vikings D/ST','102','incorP'],],[['KC','CHIEFS','29','corP'],['D.Hopkins','45','incorP'],['X.Hutchinson','84','incorP'],],[['WAS','COMMANDERS','164','corP'],['2+ Montgomery','50','incorP'],['D.Brown','52','incorP'],],[['LAR','RAMS','145','incorP'],['J.Hurts','20','corP'],['T.Higbee','60','corP'],],[['BAL','RAVENS','96','incorP'],['K.Coleman','41','incorP'],['3+ Henry','160','incorP'],],[['WAS','COMMANDERS','145','incorP'],['2+ Brown','182','incorP'],['Z.Ertz','47','incorP'],],[['KC','CHIEFS','91','corP'],['J.Smith-Schuster','170','incorP'],['D.Knox','110','incorP'],],[['-','-','-','na'],['S.Barkley','15','na'],['T.Kelce','24','na'],],[['-','-','-','na'],['','','na'],['','','na'],],],
	'MAMI':[[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['-','-','-','incorP'],['-','-','incorP'],['-','-','incorP'],],[['HOU','TEXANS','171','incorP'],['J.Watson','125','incorP'],['C.Stroud','171','incorP'],],[['DET','LIONS','36','incorP'],['J.Williams','25','corP'],['Z.Ertz','42','corP'],],[['LAR','RAMS','145','incorP'],['3+ Barkley','194','incorP'],['2+ Kupp','320','incorP'],],[['BUF','BILLS','104','corP'],['J.Cook','22','incorP'],['N.Agholor','113','incorP'],],[['WAS','COMMANDERS','145','incorP'],['D.Smith','33','incorP'],['Commanders D/ST','125','incorP'],],[['BUF','BILLS','109','incorP'],['T.Kelce','23','incorP'],['D.Knox','110','incorP'],],[['-','-','-','na'],['S.Barkley','15','na'],['T.Kelce','24','na'],],[['-','-','-','na'],['','','na'],['','','na'],],],
	'PAPI':[[['HOU','TEXANS','118','corP'],['N.Collins','25','corP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['D.Henry','15','corP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['C.Sutton','28','incorP'],],[['PHI','EAGLES','62','corP'],['S.Barkley','16','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','incorP'],['K.Williams','18','corP'],['A.Jones','22','incorP'],],[['KC','CHIEFS','29','corP'],['I.Pacheco','28','incorP'],['N.Collins','30','incorP'],],[['DET','LIONS','36','incorP'],['J.Gibbs','13','corP'],['B.Robinson','30','corP'],],[['PHI','EAGLES','55','corP'],['S.Barkley','15','corP'],['K.Williams','20','incorP'],],[['BAL','RAVENS','96','incorP'],['J.Cook','22','incorP'],['D.Henry','14','corP'],],[['PHI','EAGLES','55','corP'],['S.Barkley','13','corP'],['-','-','incorP'],],[['BUF','BILLS','109','incorP'],['-','-','incorP'],['J.Cook','26','corP'],],[['-','-','-','na'],['S.Barkley','15','na'],['T.Kelce','24','na'],],[['-','-','-','na'],['','','na'],['','','na'],],],
}

const curGameIdx = 12
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


