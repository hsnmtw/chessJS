
const board = document.querySelector('.board')
let dark = 0
for(let i=0;i<64;i++){
    const cell = document.createElement('div')
    cell.className="cell"
    if(i%8 === 0) dark = dark === 1 ? 0 : 1
    if((i+dark)%2 === 0) cell.className += " cell-dark"
    board.append(cell)
}

const cells = Array.from(board.querySelectorAll('.cell'))


function keyToPoint(k){
    if(!k||k===""||k.length!=2) return null
    const [r,c] = k.toLowerCase().split("")
    if("abcdefgh".indexOf(r)<0 || "12345678".indexOf(c)<0) return null
    const [i,j] = [r.charCodeAt(0)-97,c.charCodeAt(0)-49]
    if(i<0||j<0||i>7||j>7) return null
    return [i,7-j]
}

function pointToKey(p){
    if(!p||!Array.isArray(p)||p.length!==2||p[0]<0||p[1]<0||p[0]>=8||p[1]>=8) return null
    const [i,j] = p
    const [r,c] = [i+97,j+49].map(x=>String.fromCharCode(x))
    if("abcdefgh".indexOf(r)<0 || "12345678".indexOf(c)<0) return null
    return [r,c].join("")
}


function keyToIndex(k){
    const p = keyToPoint(k)
    if(!p) return null
    const [x,y] = p
    return x+y*8
}

function setConfiguration(conf){
    cells.forEach(x=>x.innerHTML="")
    const keys = Object.keys(conf)
    
    for(const k of keys){
        const v = conf[k]
        if(!v||v.length==="") continue
        const index = keyToIndex(k)
        if(index==null) continue
        const peice = document.createElement('img')
        peice.src = `assets/${v}.png`
        cells[index].append(peice) 
    }
}

function getAdjacent(k,x,y,n,conf){
    if(!conf[k]||conf[k]==="") return []
    const [_,c] = conf[k].split("-")
    const list = []
    let [i,j] = keyToPoint(k)
    let [l,t] = [i+x,j+y]
    let adjacent = pointToKey([l,t])
    while(--n>0 && adjacent && (!conf[adjacent] || conf[adjacent]==="" || conf[adjacent].split("-")[1]!==c)){
        list.push(adjacent)
        l+=x
        t+=y
        adjacent = pointToKey([l,t])
    }
    return list//.map(pointToKey)
}

function getNeighbors(k){
    const [i,j] = keyToPoint(k)
    return [
        [i-1,j-1],[i+0,j-1],[i+1,j-1],
        [i-1,j+0],[i+1,j+0],
        [i-1,j+1],[i+0,j+1],[i+1,j+1]
    ].filter(x => x[0]>-1 && x[1]>-1 && x[0]<8 && x[1]<8)
     .map(pointToKey)
}

function getEmptyNeighbors(k,conf){
    const neighbors = getNeighbors(k)
    return neighbors.filter(k => !conf[k] || conf[k]==="")
}

function getPossibleMoves(conf,key){
    const peice = conf[key]
    if(!peice||peice==="") return []
    const [p,c] = peice.split('-')

    if(p==="r"){//rock

    }


}

let configuration = {
    "a1": "r-w", "a2": "p-w",
    "b1": "n-w", "b2": "p-w",
    "c1": "b-w", "c2": "p-w",
    "d1": "q-w", "d2": "p-w",
    "e1": "k-w", "e2": "p-w",
    "f1": "b-w", "f2": "p-w",
    "g1": "n-w", "g2": "p-w",
    "h1": "r-w", "h2": "p-w",

    "a8": "r-b", "a7": "p-b",
    "b8": "n-b", "b7": "p-b",
    "c8": "b-b", "c7": "p-b",
    "d8": "q-b", "d7": "p-b",
    "e8": "k-b", "e7": "p-b",
    "f8": "b-b", "f7": "p-b",
    "g8": "n-b", "g7": "p-b",
    "h8": "r-b", "h7": "p-b"
}

setConfiguration(configuration)