def findBall(grid):
    ballMap = []
    for i in range(len(grid)):
        if i == 0:
            ballMap.append([*[f"ball-{i+1}" for i in range(len(grid[0]))]])
            continue

        ballMap.append([])
        for _ in range(len(grid[i])):
            ballMap[i].append(None)

    ballMap.append([*[None for _ in range(len(grid[0]))]])      # extra grid row (this is where balls will fall)

    for i in range(len(grid)):
        for j in range(len(grid[i])):
            if type(ballMap[i][j]) == str:
                if grid[i][j] == 1:
                    if j != len(grid[0])-1 and grid[i][j+1] == 1:
                        ballMap[i+1][j+1] = ballMap[i][j]

                if grid[i][j] == -1:
                    if j != 0 and grid[i][j-1] == -1:
                        ballMap[i+1][j-1] = ballMap[i][j]

    return ballMap.pop()


grid1 = [[ 1, 1, 1,-1,-1],
         [ 1, 1, 1,-1,-1],
         [-1,-1,-1, 1, 1],
         [ 1, 1, 1, 1,-1],
         [-1,-1,-1,-1,-1]]
grid2 = [[-1]]
grid3 = [[ 1, 1, 1, 1, 1, 1],
         [-1,-1,-1,-1,-1,-1],
         [ 1, 1, 1, 1, 1, 1],
         [-1,-1,-1,-1,-1,-1]]

print( findBall(grid1) )  # -> [None, 'ball-1', None, None, None]
print( findBall(grid2) )  # -> [None]
print( findBall(grid3) )  # -> ['ball-1', 'ball-2', 'ball-3', 'ball-4', 'ball-5', None]
