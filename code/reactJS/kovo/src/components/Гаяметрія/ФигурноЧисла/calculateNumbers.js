
export const calculateSimpleFigurativeNumbers = {
	3: (n) => Array.from({ length: n }, (_, i) => (i + 1) * (i + 2) / 2),
	4: (n) => Array.from({ length: n }, (_, i) => (i + 1) ** 2),
	5: (n) => Array.from({ length: n }, (_, i) => (i + 1) * (3 * (i + 1) - 1) / 2),
	6: (n) => Array.from({ length: n }, (_, i) => (i + 1) * (2 * (i + 1) - 1)),
	7: (n) => Array.from({ length: n }, (_, i) => (i + 1) * (5 * (i + 1) - 3) / 2),
	8: (n) => Array.from({ length: n }, (_, i) => (i + 1) * (3 * (i + 1) - 2)),
	12: (n) => Array.from({ length: n }, (_, i) => (i + 1) * (5 * (i + 1) - 4)),

}

export const calculateCenteredFigurativeNumbers = {
    3: (n) => Array.from({ length: n }, (_, i) => 3 * (i + 1) * (i + 2) / 2 - (i + 1) + 1),
    4: (n) => Array.from({ length: n }, (_, i) => (i + 1) ** 2 + (i + 1) ** 2),
    5: (n) => Array.from({ length: n }, (_, i) => (5 * (i + 1) ** 2 - 5 * (i + 1) + 2) / 2),
    6: (n) => Array.from({ length: n }, (_, i) => 3 * (i + 1) * (i + 1) - 3 * (i + 1) + 1),
    7: (n) => Array.from({ length: n }, (_, i) => (7 * (i + 1) ** 2 - 7 * (i + 1) + 2) / 2),
    8: (n) => Array.from({ length: n }, (_, i) => 4 * (i + 1) ** 2 - 4 * (i + 1) + 1),
    9: (n) => Array.from({ length: n }, (_, i) => (9 * (i + 1) ** 2 - 9 * (i + 1) + 2) / 2),
    10: (n) => Array.from({ length: n }, (_, i) => 5 * (i + 1) ** 2 - 5 * (i + 1) + 1)
};
