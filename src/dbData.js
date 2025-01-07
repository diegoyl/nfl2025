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
    {'game_id':'g1','team_code':{'home':'HOU','away':'LAC'},'team_name':{'home':'TEXANS','away':'CHARGERS'},'ML':{'home':115,'away':85},'TD':{'home':[['RB','J.Mixon',18],['WR','N.Collins',23],['TE','D.Schultz',46],['WR','X.Hutchinsonlonger',128],['WR','J.Metchie',48],['WR','R.Woods',80],['TE','C.Stover',85],['QB','C.Stroud',90],['D/ST','Texans D/ST',90],],'away':[['WR','L.McConkey',22],['RB','J.Dobbins',22],['WR','Q.Johnston',34],['WR','D.Chark',41],['WR','J.Palmer',41],['WR','W.Dissly',47],['RB','G.Edwards',56],['TE','H.Haskins',56],['QB','J.Herbert',70],['D/ST','Chargers D/ST',90],]},},
    {'game_id':'g2','team_code':{'home':'BAL','away':'PIT'},'team_name':{'home':'RAVENS','away':'STEELERS'},'ML':{'home':36,'away':164},'TD':{'home':[['RB','D.Henry',15],['TE','M.Andrews',21],['WR','R.Bateman',25],['QB','L.Jackson',33],['TE','I.Likely',35],['WR','N.Agholor',39],['D/ST','Ravens D/ST',65],['WR','T.Wallace',70],['RB','K.Mitchell',140],['WR','Z.Flowers',0],],'away':[['WR','G.Pickens',30],['WR','N.Harris',32],['TE','P.Freiermuth',37],['RB','J.Warren',47],['WR','C.Austin',50],['WR','M.Williams',90],['QB','R.Wilson',110],['D/ST','Steelers D/ST',120],['WR','V.Jefferson',120],['TE','D.Washington',190],]},},
    {'game_id':'g3','team_code':{'home':'BUF','away':'DEN'},'team_name':{'home':'BILLS','away':'BRONCOS'},'ML':{'home':39,'away':161},'TD':{'home':[['QB','J.Allen',17],['RB','J.Cook',17],['WR','K.Shakir',34],['TE','D.Kincaid',35],['WR','K.Coleman',42],['WR','M.Hollins',50],['WR','A.Cooper',51],['D/ST','Bills D/ST',51],['RB','R.Davis',53],['TE','D.Knox',65],],'away':[['WR','C.Sutton',26],['WR','M.Mims Jr.',37],['RB','J.McLaughlin',45],['RB','J.Williams',45],['QB','B.Nix',57],['RB','A.Estime',57],['RB','D.Vele',65],['D/ST','Broncos D/ST',110],['WR','L.Humphrey',180],]},},
    {'game_id':'g4','team_code':{'home':'PHI','away':'GB'},'team_name':{'home':'EAGLES','away':'PACKERS'},'ML':{'home':62,'away':138},'TD':{'home':[['RB','S.Barkley',16],['QB','J.Hurts',18],['WR','A.Brown',23],['WR','D.Smith',30],['TE','D.Goedert',45],['D/ST','Eagles D/ST',58],['RB','K.Gainwell',90],['TE','G.Calcaterra',100],['WR','J.Dotson',105],['WR','A.Smith',230],],'away':[['RB','J.Jacobs',20],['WR','R.Doubs',32],['WR','J.Reed',33],['TE','T.Kraft',37],['WR','D.Wicks',37],['TE','L.Musgrave',80],['D/ST','Packers D/ST',85],['WR','B.Melton',110],['RB','E.Wilson',110],['QB','J.Love',130],]},},
    {'game_id':'g5','team_code':{'home':'TB','away':'WAS'},'team_name':{'home':'BUCCANEERS','away':'COMMANDERS'},'ML':{'home':78,'away':122},'TD':{'home':[['RB','B.Irving',16],['WR','M.Evans',20],['RB','R.White',26],['WR','J.McMillan',26],['TE','C.Otton',31],['QB','B.Mayfield',35],['TE','P.Durham',34],['WR','S.Shepard',41],['D/ST','Bucs D/ST',80],],'away':[['RB','B.Robinson',19],['WR','T.McLaurin',18],['QB','J.Daniels',28],['RB','A.Ekeler',31],['TE','Z.Ertz',30],['WR','O.Zaccheaus',43],['WR','D.Brown',52],['D/ST','Commanders D/ST',80],]},},
    {'game_id':'g6','team_code':{'home':'LAR','away':'MIN'},'team_name':{'home':'RAMS','away':'VIKINGS'},'ML':{'home':112,'away':88},'TD':{'home':[['RB','K.Williams',17],['WR','P.Nacua',20],['WR','C.Kupp',26],['WR','D.Robinson',42],['TE','T.Higbee',60],['D/ST','Rams D/ST',80],['WR','T.Atwell',90],['WR','C.Parkinson',110],['RB','R.Rivers',120],['QB','M.Stafford',230],],'away':[['WR','J.Jefferson',18],['WR','J.Addison',21],['RB','A.Jones',25],['TE','T.Hockenson',29],['RB','C.Akers',53],['WR','J.Nailor',53],['QB','S.Darnold',75],['D/ST','Vikings D/ST',85],['WR','J.Oliver',120],['WR','J.Mundt',170],]},},
]

const picksDict = []
const resultsDict = []

const dbData = {
    "picksOpen": picksOpen,
    "gameDict": gameDict,
    "picksDict": picksDict,
    "resultsDict": resultsDict,
}

export default dbData;

