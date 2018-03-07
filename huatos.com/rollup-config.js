import resolve from 'rollup-plugin-node-resolve';
import alias from 'rollup-plugin-alias';
import uglify from 'rollup-plugin-uglify'
const rxPaths = require('rxjs/_esm5/path-mapping');

import { buildOptimizer } from '@angular-devkit/build-optimizer';

function angularBuildOptimizer() {
  return {
    name: 'angular-optimizer',
    transform: (content) => buildOptimizer({ content }).content,
  }
}

export default {
  input: 'js/src/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  name: 'MyModule',
  plugins: [
    alias(rxPaths()),    
    resolve(),
    angularBuildOptimizer(),
    uglify()
  ]
};