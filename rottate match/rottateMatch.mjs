export function rottateMatch(src, target){
    if (isRectangleEquals(src, target)) {
        return true
    }

    let rottated = rottate(src)
    if (isRectangleEquals(rottated, target)){
        return true
    }

    for (let i = 0; i < 2; i++){
        rottated = rottate(rottated)
        if (isRectangleEquals(rottated, target)){
            return true
        }
    }

    return false
}

function rottate(src){
    const rottated = []
    
    for(let i = 0; i < src.length; i++){
        for(let j = src[0].length-1; j >= 0; j--) {
            if (i === 0) rottated.push([])
            rottated[src[0].length - 1 - j][i] = src[i][j]
        }
    }

    return rottated 
}

function isRectangleEquals(src, trg){
    const srcFlat = src.flat()
    const trgFlat = trg.flat()

    if (srcFlat.length !== trgFlat.length) {
        return false
    }

    for (let i = 0; i < srcFlat.length; i++){
        if (srcFlat[i] !== trgFlat[i]) {
            return false
        }
    }

    return true
}
