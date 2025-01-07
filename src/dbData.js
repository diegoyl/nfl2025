const picksOpen = true

const gameDict = [
//  EXAMPLE FORMAT
    // {"game_id":"g1",
    //   "team_code":{"home":"WAS","away":"LAR"},
    //   "team_name":{"home":"COMMANDERS","away":"RAMS"},
    //   "ML":{"home":92,"away":108},

    //   "TD":{
    //     "home":[["RB","ROBINSON",8],["QB","DANIELS",10],["WR","MCCLAURIN",13]],
    //     "away":[["RB","WILLIAMS",5],["WR","NACUA",11],["WR","KUPP",14]]
    //   }
    // },
    {'game_id':'g1','team_code':{'home':'HOU','away':'LAC'},'team_name':{'home':'TEXANS','away':'CHARGERS'},'ML':{'home':118,'away':82},'TD':{'home':[['RB','J.Mixon',20],['WR','N.Collins',26],['TE','D.Schultz',50],['WR','J.Metchie',53],['WR','X.Hutchinson',56],['D/ST','Texans D/ST',107],['QB','C.Stroud',119],],'away':[['RB','J.Dobbins',23],['WR','L.McConkey',25],['WR','Q.Johnston',37],['WR','D.Chark',46],['WR','J.Palmer',47],['QB','J.Herbert',67],['D/ST','Chargers D/ST',102],]},},
    {'game_id':'g2','team_code':{'home':'BAL','away':'PIT'},'team_name':{'home':'RAVENS','away':'STEELERS'},'ML':{'home':34,'away':166},'TD':{'home':[['RB','D.Henry',16],['TE','M.Andrews',24],['WR','R.Bateman',26],['QB','L.Jackson',38],['TE','I.Likely',39],['WR','N.Agholor',45],['D/ST','Ravens D/ST',73],['RB','K.Mitchell',171],],'away':[['WR','G.Pickens',33],['WR','N.Harris',36],['TE','P.Freiermuth',42],['RB','J.Warren',52],['WR','C.Austin',60],['WR','M.Williams',102],['QB','R.Wilson',148],['D/ST','Steelers D/ST',151],]},},
    {'game_id':'g3','team_code':{'home':'BUF','away':'DEN'},'team_name':{'home':'BILLS','away':'BRONCOS'},'ML':{'home':38,'away':162},'TD':{'home':[['QB','J.Allen',19],['RB','J.Cook',18],['WR','K.Shakir',35],['TE','D.Kincaid',38],['WR','K.Coleman',38],['WR','M.Hollins',47],['WR','A.Cooper',49],['D/ST','Bills D/ST',58],['RB','R.Davis',60],['TE','D.Knox',75],],'away':[['WR','C.Sutton',27],['WR','M.Mims Jr.',38],['RB','J.McLaughlin',56],['RB','J.Williams',58],['RB','A.Estime',61],['QB','B.Nix',64],['WR','D.Vele',67],['WR','T.Franklin',90],['D/ST','Broncos D/ST',125],['WR','L.Humphrey',217],]},},
    {'game_id':'g4','team_code':{'home':'PHI','away':'GB'},'team_name':{'home':'EAGLES','away':'PACKERS'},'ML':{'home':68,'away':132},'TD':{'home':[['RB','S.Barkley',17],['QB','J.Hurts',20],['WR','A.Brown',25],['WR','D.Smith',33],['TE','D.Goedert',50],['D/ST','Eagles D/ST',66],['RB','K.Gainwell',96],['TE','G.Calcaterra',113],['WR','J.Dotson',125],['WR','A.Smith',274],],'away':[['RB','J.Jacobs',20],['WR','R.Doubs',35],['WR','J.Reed',36],['TE','T.Kraft',41],['WR','D.Wicks',42],['TE','L.Musgrave',96],['D/ST','Packers D/ST',98],['RB','E.Wilson',107],['WR','B.Melton',125],['QB','J.Love',136],]},},
    {'game_id':'g5','team_code':{'home':'TB','away':'WAS'},'team_name':{'home':'BUCCANEERS','away':'COMMANDERS'},'ML':{'home':77,'away':123},'TD':{'home':[['RB','B.Irving',17],['WR','M.Evans',21],['WR','J.McMillan',28],['TE','C.Otton',36],['TE','P.Durham',36],['RB','R.White',43],['WR','S.Shepard',49],['QB','B.Mayfield',66],['D/ST','Bucs D/ST',79],],'away':[['WR','T.McLaurin',22],['RB','B.Robinson',28],['QB','J.Daniels',33],['TE','Z.Ertz',38],['RB','A.Ekeler',42],['WR','O.Zaccheaus',42],['WR','D.Brown',66],['D/ST','Commanders D/ST',88],['WR','J.Crowder',96],]},},
    {'game_id':'g6','team_code':{'home':'LAR','away':'MIN'},'team_name':{'home':'RAMS','away':'VIKINGS'},'ML':{'home':108,'away':92},'TD':{'home':[['RB','K.Williams',18],['WR','P.Nacua',22],['WR','C.Kupp',30],['WR','D.Robinson',47],['TE','T.Higbee',67],['D/ST','Rams D/ST',90],['WR','T.Atwell',102],['QB','M.Stafford',297],],'away':[['WR','J.Jefferson',20],['WR','J.Addison',26],['RB','A.Jones',24],['TE','T.Hockenson',34],['RB','C.Akers',42],['WR','J.Nailor',67],['QB','S.Darnold',84],['D/ST','Vikings D/ST',93],]},},


]

const defaultSD = {
    "g1": [null, null, null],
    "g2": [null, null, null],
    "g3": [null, null, null],
    "g4": [null, null, null],
    "g5": [null, null, null],
    "g6": [null, null, null],
    "user":null
}
const picksDict = []
const resultsDict = []

const dbData = {
    "picksOpen": picksOpen,
    "gameDict": gameDict,
    "defaultSD": defaultSD,
    "picksDict": picksDict,
    "resultsDict": resultsDict,
}

export default dbData;

