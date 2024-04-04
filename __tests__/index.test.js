import { isDirectory, isFile } from "@hexlet/immutable-fs-trees";
import createTree from "..";

test('createdTreeMatched', () => {
    const tree = createTree()
    expect(isDirectory(tree)).toBe(true);
    expect(isDirectory('babel.config.js')).toBe(false);
});