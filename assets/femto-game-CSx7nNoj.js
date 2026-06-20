var e=`// This code was written for sprig, and is not part of this project.\r
\r
/*\r
@title: Femto\r
@author: Siddharthan\r
@tags: ['platformer']\r
@addedOn: 2025-05-26\r
*/\r
\r
const player = "p"\r
const ground = "g"\r
const brick = "b"\r
const stone = "z"\r
const coin = "c"\r
const collectedCoin = "x"\r
const diamond = "d"\r
const goomba = "e"\r
const hen = "h"\r
const pipe = "t"\r
const sky = "s"\r
const sky1 = "1"\r
const sky2 = "2"\r
const lava = "3"\r
const melody = tune\`\r
159.5744680851064,\r
159.5744680851064: A4-159.5744680851064,\r
159.5744680851064: A4-159.5744680851064,\r
159.5744680851064: B4-159.5744680851064,\r
4468.085106382979\`\r
const coinsound = tune\`\r
92.02453987730061,\r
46.012269938650306: E5^46.012269938650306,\r
46.012269938650306: E5^46.012269938650306,\r
46.012269938650306: F5^46.012269938650306,\r
46.012269938650306: F5^46.012269938650306,\r
46.012269938650306: G5^46.012269938650306,\r
46.012269938650306: G5^46.012269938650306,\r
1104.2944785276072\`\r
\r
setLegend(\r
  [ player, bitmap\`\r
7777777700007777\r
7777777703330777\r
7777777770033077\r
7777777701222107\r
7007777702202207\r
0110077702202330\r
0122100012222207\r
0122221122222207\r
7011222122222210\r
0111001122222220\r
0111022222222220\r
7011100002222210\r
7701111122221107\r
7770010111110077\r
777770C000007777\r
777770C660607777\` ],\r
  [ ground, bitmap\`\r
CCCCCCCCCCCCCCCC\r
C6DC4C44CDCCDCDC\r
D4CCDCCCDCCDCDCD\r
4D4D6D4DD4DCD444\r
DD4DDCD4CD4DC6CD\r
C4C4CDDC4D4CDDC4\r
DCD46C4DC4D4DC4C\r
4C4DCDDC4CD44D6D\r
C4D4D4C4444D44D4\r
4444444444444444\r
4444444444444444\r
4444444444444444\r
4444444444444444\r
4444444444444444\r
4444444444444444\r
4444444444444444\` ],\r
  [ brick, bitmap\`\r
CCCCCCCCCCCCCCCC\r
C66666C00C66666C\r
C6CFC6C00C6CFC6C\r
C6FCF6C00C6FCF6C\r
C6CFC6CCCC6CFC6C\r
C66666666666666C\r
CCCCC6FCCF6CCCCC\r
C000C6C00C6C000C\r
C000C6C00C6C000C\r
CCCCC6FCCF6CCCCC\r
C66666666666666C\r
C6CFC6CCCC6CFC6C\r
C6FCF6C00C6FCF6C\r
C6CFC6C00C6CFC6C\r
C66666C00C66666C\r
CCCCCCCCCCCCCCCC\` ],\r
  [ stone, bitmap\`\r
CCC3CCC3CCC3CCC3\r
CCC3CCC3CCC3CCC3\r
3333333333333333\r
C3CCC3CCC3CCC3CC\r
C3CCC3CCC3CCC3CC\r
3333333333333333\r
3CCC3CCC3CCC3CCC\r
3CCC3CCC3CCC3CCC\r
3333333333333333\r
CC3CCC3CCC3CCC3C\r
CC3CCC3CCC3CCC3C\r
3333333333333333\r
C3CCC3CCC3CCC3CC\r
C3CCC3CCC3CCC3CC\r
3333333333333333\r
CCC3CCC3CCC3CCC3\` ],\r
  [ coin, bitmap\`\r
7777777777777777\r
7777777777777777\r
7777766666777777\r
7777666666677777\r
77766FFFFF667777\r
77766F6666667777\r
77766F6FFF667777\r
77766F6F6F667777\r
77766F6FFF667777\r
77766F6666667777\r
77766FFFFF667777\r
7777666666677777\r
7777766666777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\` ],\r
  [ diamond, bitmap\`\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777700000077777\r
7777022222207777\r
7770222227220777\r
7702222272722077\r
7702222227222077\r
7770222222220777\r
7777022222207777\r
7777702222077777\r
7777770220777777\r
7777777007777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\` ],\r
  [ collectedCoin, bitmap\`\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\` ],\r
  [ sky1, bitmap\`\r
7777777777777777\r
7777777777777777\r
7777777722277777\r
7777772222227777\r
7777722222222777\r
7777222222227777\r
7777722222277777\r
7777772222777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\` ],\r
  [ sky2, bitmap\`\r
7777777777777777\r
7777777777777777\r
7777772222277777\r
7777222222227777\r
7772222222222777\r
7722222222222277\r
7222222222222277\r
7722222222222277\r
7772222222222777\r
7777222222227777\r
7777772222277777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\` ],\r
  [ lava, bitmap\`\r
7777777767773777\r
7777077077377707\r
7707737776777673\r
7779769777377977\r
7677307737773707\r
7779777333777777\r
7777773393377777\r
7777733999377777\r
7777339969337777\r
7777399669937777\r
7773399666933777\r
7733996666993777\r
7739966666693777\r
3339966666693333\r
3399666666693333\r
3339966669999333\` ],\r
  [ goomba, bitmap\`\r
7777777777777777\r
7777700000007777\r
77770C3396440777\r
7770C3399647H077\r
7770C3996647H077\r
770C30296027H807\r
770C30096007H807\r
770C39996647H807\r
770C339966447807\r
7770C33009447077\r
770CCC3399447077\r
70C0003399647807\r
7007033396477807\r
777033396647H077\r
700333996447HH07\r
0000000000000000\` ],\r
  [ hen, bitmap\`\r
7777777700007777\r
7777777703330777\r
7777777770033077\r
7777777766999607\r
7007777709909907\r
0660077709909660\r
0699600069999907\r
0699996699999907\r
7066999699999990\r
0666006699999990\r
0666099999999990\r
7066600009999960\r
7706666699996667\r
7770060666660077\r
777770C000007777\r
777770C660607777\` ],\r
  [ pipe, bitmap\`\r
6333636666633333\r
6633636333333333\r
6363636666633333\r
6336636333333333\r
6333636666633333\r
3333333333333333\r
6333636666633333\r
3636333363333333\r
3363333363333333\r
3636333363333333\r
6333633363333333\r
3333333333363333\r
3333333333366333\r
6666666666666633\r
3333333333366333\r
3333333333363333\` ],\r
  [ sky, bitmap\`\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\r
7777777777777777\` ]\r
)\r
\r
setSolids([ground, brick, pipe])\r
\r
let level = 0\r
const levels = [\r
   map\`\r
ssssssssss2sss\r
2sss1sssssssss\r
sssssssssss1ss\r
ssssssssssssss\r
ssssssssssssss\r
ssscccssssssss\r
psssssssssesdt\r
gggggggggggggg\`,\r
   map\`\r
sss1ssssss1ssx\r
sscccssss2sssx\r
psssscsssss1sx\r
bcbbsscssssssx\r
ssssssscsssssx\r
ssssssssssssxe\r
eeeebbssssesdt\r
gggggggggggggg\`,\r
   map\`\r
sss1ssssss1sss\r
2s1s2ssss2ssss\r
ssscsssssss1ss\r
sscscsssssssss\r
scsbscssssssss\r
csbbbscsssssse\r
pbbbbbesssssdt\r
gggggggggggggg\`,\r
   map\`\r
psssss1sssss2s\r
sssessses1sess\r
ssbbs1bbssbbss\r
ssssssssssssss\r
sssssssssccsse\r
sccssssbsssedt\r
ebbesssbgggggg\r
gggggggggggggg\`,\r
   map\`\r
sss1ssssss1sss\r
2sss1sssssssss\r
sssssssssss1ss\r
ssssssssssssss\r
ssssssssssssss\r
sbcbcbcbcbcbds\r
pbebebebebebst\r
gggggggggggggg\`,\r
   map\`\r
x1sssss1ssssss\r
pxsssessssssss\r
xsssebsssssss1\r
cbbbbbssssssss\r
xsssssssssssss\r
xsssssccccccse\r
exssbsssesssdt\r
gggggggggggggg\`,\r
   map\`\r
pcssssssssscsb\r
bscssssssscsbb\r
bbscssssscsbbb\r
bbbscssscsbbbb\r
bbbbscscsbbbbb\r
bbbbbsssbbbbbb\r
bbbbbdtdbbbbbb\r
gggggggggggggg\`,\r
   map\`\r
2ss2sssss1ssss\r
s2ssss1ssss2ss\r
ssccccccssssss\r
scsssssscsssss\r
ssbssbssbbssss\r
pbbssssssbbsse\r
bbbeeeeeebbsdt\r
gggggggggggggg\`,\r
   map\`\r
2ssssssssss2sx\r
sssss1ssssssss\r
ssssesssss1sss\r
pssebscsssssss\r
bccbbcssssssdt\r
ssssssbsccccsb\r
esssbbbessssbb\r
gggggggggggggg\`,\r
   map\`\r
2ssss1ssss1sss\r
ss2sssss1ssss1\r
ssscsscccsssss\r
sscssssessssss\r
scsbbsbbbcbsss\r
ssbbbsssssssse\r
pbbbbebessssdt\r
gggggggggggggg\`,\r
   map\`\r
2sssssssssssdt\r
sssss1sssssscs\r
ssssssssssssbe\r
psssssssssscsb\r
bbcccbbssssbse\r
sssssbbbsscsbb\r
eeeeebbbbbbsse\r
gggggggggggggg\`,\r
   map\`\r
2ssssssss1sssss2ss\r
bs1bbsbsbsbbsbssbb\r
bssbssb2bsbs1bsssb\r
bssbbsbsbsbbsbssbb\r
bssbssbsbsbssbssbs\r
bbsbbssbssbbsbbsbb\r
ssssssssssssssssss\r
ssssssssssssssssss\r
psccccccccccccccst\r
gggggggggggggggggg\`,\r
   map\`\r
ss1ssss1sss2sx\r
ssssssssssssss\r
ssss1sssssssss\r
ssssssssssssss\r
psssssssssssss\r
zzcczzccccccss\r
zz33zzsssessdt\r
zzzzzzzzzzzzzz\`,\r
   map\`\r
ss1ssss1sss2sx\r
ssssssssssssdt\r
ssssz33zsssssz\r
psszzzzz3sszzz\r
zzscccccsszz3z\r
zzssesssszzzzz\r
z3zzzzzzzzzzzz\r
zzzzzzzzzzzzzz\`,\r
   map\`\r
pcczs1ssssss1x\r
zzczssssssssss\r
scczsssss2ssss\r
szzzssssssssdt\r
sssssssssssssz\r
sssssscccssszz\r
3333zsesseszzz\r
gggggggggggggg\`,\r
   map\`\r
pcccszzzzzzzzz\r
zsszszsccsssss\r
z33zszscbzs3s3\r
zzzzszccbzszsz\r
ssssszcbbsssss\r
sssssccbbzzdzz\r
esssebbbbsssst\r
gggggggggggggg\`,\r
   map\`\r
pxzzzzzzzzzzzz\r
zccszzzzzzzzzz\r
z3zccxzzzzzzzz\r
zzz3zccxzzzzzz\r
zzzzz3zccxzzzz\r
zzzzzzz3zccxzz\r
zzzzzzzzz3zsdt\r
zzzzzzzzzzzzzz\`,\r
   map\`\r
sc1ssss1sss2s1\r
szccssss2sssss\r
ss33ccsssss1ss\r
pszzssssssssss\r
zcccccccssssss\r
zssssszzcsssdt\r
zexxxezzz33ssz\r
zzzzzzzzzzzzzz\`,\r
   map\`\r
ps1sssse2sssse\r
ssssssszzzzzzz\r
sssssszsssssss\r
ssssezssszszzs\r
szzzzssss3sszs\r
sssssssszz3sss\r
ssss3sz3zzz3se\r
3333zzzzzzzzst\`,\r
   map\`\r
sssssssssssssx\r
ssssssssssssss\r
ssssssssssssss\r
psssssssssssdt\r
zssssszzsssssz\r
zssssssssssssz\r
zeeeeeeeeeeeez\r
zzzzzzzzzzzzzz\`,\r
   map\`\r
scccccccccccccccccs\r
szzzzzxzxxxzxzzzzzs\r
sxxzxxxzxxezxzdssss\r
ssszxxxzzzzzszzzzzs\r
ssszssszssszszdssss\r
sxszssszssszszzzzzs\r
scccccccccccccccccs\r
szzzzzszssszszzzzss\r
szdsssszzsszszssszs\r
szzzzzszszszszssszs\r
szdsssszsszzszpdtzs\r
szzzzzszssszszzzzss\r
scccccccccccccccccs\`,\r
  \r
]\r
\r
setMap(levels[level])\r
\r
setPushables({\r
  [ player ]: []\r
})\r
\r
\r
let coins = 0\r
let diamonds = 0\r
let jumpPower = 0\r
let isJumping = false\r
let gravity = 299 \r
let lastGravity = Date.now()\r
\r
\r
let enemyDirections = new Map()\r
\r
\r
function updatecoins() {\r
  clearText()\r
  addText("coin:" + coins, { x: 11, y: 1, color: color\`2\` })\r
  addText("pearl:" + diamonds, { x: 1, y: 1, color: color\`2\` })\r
}\r
\r
updatecoins()\r
\r
function updatediamonds() {\r
  clearText()\r
  addText("coin:" + coins, { x: 11, y: 1, color: color\`2\` })\r
  addText("pearl:" + diamonds, { x: 1, y: 1, color: color\`2\` })\r
}\r
\r
updatediamonds()\r
\r
\r
\r
onInput("a", () => {\r
  const p = getFirst(player)\r
\r
  if (p && p.x > 0) {\r
\r
    const leftTile = getTile(p.x - 1, p.y)\r
    const hasSolid = leftTile.some(sprite => \r
      sprite.type === ground || sprite.type === brick || sprite.type === stone\r
    )\r
    if (!hasSolid) {\r
      p.x -= 1\r
    }\r
  }\r
})\r
\r
onInput("d", () => {\r
  const p = getFirst(player)\r
 \r
  if (p && p.x < width() - 1) {\r
    const rightTile = getTile(p.x + 1, p.y)\r
    const hasSolid = rightTile.some(sprite => \r
      sprite.type === ground || sprite.type === brick || sprite.type === stone\r
    )\r
    if (!hasSolid) {\r
      p.x += 1\r
    }\r
  }\r
})\r
\r
onInput("w", () => {\r
  const p = getFirst(player)\r
\r
  if (p && !isJumping) {\r
  \r
    if (p.y > 0) {\r
      const aboveTile = getTile(p.x, p.y - 1)\r
      const hasSolid = aboveTile.some(sprite => \r
        sprite.type === ground || sprite.type === brick || sprite.type === pipe || sprite.type === stone\r
      )\r
      if (!hasSolid) {\r
        jumpPower = 3\r
        isJumping = true\r
      }\r
    }\r
  }\r
})\r
setInterval(() => {\r
  const p = getFirst(player)\r
  if (!p) return\r
\r
if (isJumping && jumpPower > 0) {\r
  if (p.y > 0) {\r
    const aboveTile = getTile(p.x, p.y - 1)\r
    const hasSolid = aboveTile.some(sprite => \r
      sprite.type === ground || sprite.type === brick || sprite.type === stone\r
    )\r
    if (!hasSolid) {\r
      p.y -= 1\r
      jumpPower -= 1\r
    } else {\r
      jumpPower = 0\r
    }\r
  } else {\r
    jumpPower = 0\r
  }\r
  \r
  if (jumpPower <= 0) {\r
    jumpPower = 0\r
  }\r
}\r
    if (Date.now() - lastGravity > gravity) {\r
    const canFall = p.y < height() - 1\r
    const groundBelow = getTile(p.x, p.y + 1).some(sprite => \r
      sprite.type === ground || sprite.type === brick || sprite.type === pipe || sprite.type === stone\r
    )\r
    \r
    if (canFall && !groundBelow) {\r
      p.y += 1\r
      lastGravity = Date.now()\r
    } else {\r
      isJumping = false\r
      jumpPower = 0\r
    }\r
  }\r
\r
const coinsHere = getTile(p.x, p.y).filter(sprite => sprite.type === coin)\r
  coinsHere.forEach(coinSprite => {\r
    playTune(coinsound)\r
    coinSprite.type = collectedCoin\r
    coins += 20\r
    updatecoins()\r
  })\r
\r
const diamondsHere = getTile(p.x, p.y).filter(sprite => sprite.type === diamond)\r
  diamondsHere.forEach(diamondSprite => {\r
    playTune(coinsound)\r
    diamondSprite.type = collectedCoin\r
    diamonds += 1\r
    updatediamonds()\r
  })  \r
  \r
\r
  const enemiesHere = getTile(p.x, p.y).filter(sprite => sprite.type === goomba)\r
  if (enemiesHere.length > 0) {\r
    playTune(coinsound)\r
    setMap(levels[level])\r
    coins = Math.max(0, coins - 10)\r
    updatecoins()\r
  }\r
  const lavaHere = getTile(p.x, p.y).filter(sprite => sprite.type === lava)\r
  if (lavaHere.length > 0) \r
  {\r
    playTune(coinsound)\r
    setMap(levels[level])\r
    coins = Math.max(0, coins - 30)\r
    updatecoins()\r
  }\r
  const pipesHere = getTile(p.x, p.y).filter(sprite => sprite.type === pipe)\r
     if (pipesHere.length > 0) {\r
       playTune(coinsound)\r
       level = (level + 1) % levels.length\r
        setMap(levels[level])\r
  const newPlayer = getFirst(player)\r
  if (newPlayer) \r
  {}\r
  isJumping = false\r
  jumpPower = 0\r
  enemyDirections.clear()\r
}\r
\r
  if (p.x < 0) p.x = 0\r
  if (p.x >= width()) p.x = width() - 1\r
\r
  if (p.y >= height() - 1) {\r
    const groundHere = getTile(p.x, p.y).some(sprite => sprite.type === ground)\r
    if (!groundHere) {\r
      setMap(levels[level])\r
      coins = Math.max(0, coins - 100)\r
      updatecoins()\r
    }\r
  } \r
}, 100)\r
\r
setInterval(() => {\r
  getAll(goomba).forEach(enemy => {\r
\r
    if (!enemyDirections.has(enemy)) {\r
      enemyDirections.set(enemy, 1) \r
    }\r
    \r
    let direction = enemyDirections.get(enemy)\r
    const newX = enemy.x + direction\r
\r
    let shouldChangeDirection = false\r
    \r
    if (newX < 0 || newX >= width()) {\r
      shouldChangeDirection = true\r
    }\r
    \r
    if (newX >= 0 && newX < width()) {\r
      const obstacleAhead = getTile(newX, enemy.y).some(sprite => \r
        sprite.type === brick || sprite.type === pipe || sprite.type === stone\r
      )\r
      if (obstacleAhead) {\r
        shouldChangeDirection = true\r
      }\r
\r
      if (enemy.y < height() - 1) {\r
        const groundBelow = getTile(newX, enemy.y + 1).some(sprite => \r
          sprite.type === ground || sprite.type === brick || sprite.type === stone\r
        )\r
        if (!groundBelow) {\r
          shouldChangeDirection = true\r
        }\r
      }\r
    }\r
    if (shouldChangeDirection) {\r
      direction = -direction\r
      enemyDirections.set(enemy, direction)\r
    } else {\r
\r
      const oldX = enemy.x\r
      const oldY = enemy.y\r
      \r
      enemy.x = newX\r
      const oldTile = getTile(oldX, oldY)\r
      const hasOtherSprites = oldTile.some(sprite => \r
        sprite.type !== goomba && sprite.type !== sky\r
      )\r
      if (!hasOtherSprites) {\r
        addSprite(oldX, oldY, sky)\r
      }\r
    }\r
  })\r
}, 300)`;export{e as default};