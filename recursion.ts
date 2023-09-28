const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

type Point = {
  x: number;
  y: number;
};

const maze = [
  "xxxxxxxxxx x",
  "x        x x",
  "x        x x",
  "x xxxxxxxx x",
  "x          x",
  "x xxxxxxxxxx",
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // Base case
  // if is out of bounds
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // if its a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // if seen
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }

  // post
  console.log(curr.x);
  console.log(curr.y);
  path.pop();
  return false;
}

function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);
  return path;
}

const start = { x: 10, y: 0 };
const end = { x: 1, y: 5 };
const maze_result = solve(maze, "x", start, end);

function drawPath(data: string[], path: Point[]) {
  const data2 = data.map((row) => row.split(""));
  path.forEach((p) => {
    if (data2[p.y] && data2[p.y][p.x]) {
      data2[p.y][p.x] = "*";
    }
  });
  return data2.map((d) => d.join(""));
}

console.log(maze_result);

const path_d = drawPath(maze, maze_result);

console.log(path_d);
