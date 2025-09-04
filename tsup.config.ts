import { defineConfig } from 'tsup'
import pkg from './package.json' assert { type: 'json' }

const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {})
]

export default defineConfig([
  // Shared (isomorphic) build
  {
    entry: { index: 'src/index.ts' },
    outDir: 'dist/shared',
    format: ['esm', 'cjs'],
    platform: 'neutral',
    target: 'es2020',
    sourcemap: true,
    minify: true,
    keepNames: true,
    treeshake: true,
    clean: true,
    dts: false,
    external
  },
  // Node-specific build
  {
    entry: { index: 'src/index.node.ts' },
    outDir: 'dist/node',
    format: ['esm', 'cjs'],
    platform: 'node',
    target: 'node18',
    sourcemap: true,
    minify: true,
    keepNames: true,
    treeshake: true,
    clean: false,
    dts: false,
    external
  },
  // Browser-specific build
  {
    entry: { index: 'src/index.browser.ts' },
    outDir: 'dist/browser',
    format: ['esm'],            // browsers only need ESM
    platform: 'browser',
    target: 'es2020',
    sourcemap: true,
    minify: true,
    keepNames: true,
    treeshake: true,
    clean: false,
    dts: false,
    external
  }
])
