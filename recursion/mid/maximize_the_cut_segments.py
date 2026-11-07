INT_MIN = float('-inf')


def maximizeCuts(n: int, x: int, y: int, z: int) -> int:
    if n == 0:
        return 0

    if n < 0:
        return INT_MIN

    maximum = INT_MIN
    segment_cuts = [x, y, z]

    for cut in segment_cuts:
        ans = maximizeCuts(n-cut,x,y,z)

        if ans != INT_MIN:
            maximum = max(ans+1,maximum)

    return maximum


print(maximizeCuts(5, 5, 3, 2))