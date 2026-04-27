import * as migration_20260427_005707_init from './20260427_005707_init';

export const migrations = [
  {
    up: migration_20260427_005707_init.up,
    down: migration_20260427_005707_init.down,
    name: '20260427_005707_init'
  },
];
