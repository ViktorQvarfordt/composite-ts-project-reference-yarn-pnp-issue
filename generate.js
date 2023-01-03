const { writeFileSync } = require('fs')

const template = (i) => {
  const nPadded = i.toString().padStart(3, "0");
  const nMinusOnePadded = (i - 1).toString().padStart(3, "0");

  return `import { arr${nMinusOnePadded} } from "./file${nMinusOnePadded}"

export const arr${nPadded} = [...arr${nMinusOnePadded}, '${nPadded}'] as const
`;
};

for (let i = 1; i < 1000; i++) {
  const nPadded = i.toString().padStart(3, "0");
  writeFileSync(`functional/packages/shared/src/file${nPadded}.ts`, template(i))
}
