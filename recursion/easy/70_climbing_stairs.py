def climbStairs(n: int) -> int:
    if n == 1 or n == 0:
        return 1

    return climbStairs(n-1) + climbStairs(n-2)