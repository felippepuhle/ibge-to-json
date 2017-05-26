import { StatesWorker, CitiesWorker, NeighborhoodsWorker } from './workers';

console.log('Working on states...');
StatesWorker.run();

console.log('Working on cities...');
CitiesWorker.run();

console.log('Working on neighborhoods...');
NeighborhoodsWorker.run();

process.exit();
