"use strict";
import {Serie} from './series.js';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const series = __importDefault(import("./series.js"));
const seriesData = [
    new Serie (1, "Breaking Bad", "AMC", 5)/*,
    new series.default(2, "Orange Is The New Black", "Netflix", 6),
    new series.default(3, "Game of Thrones", "HBO", 7),
    new series.default(4, "The Big Bang Theory", "CBS", 12),
    new series.default(5, "Sherlock", "BBC", 4),
    new series.default(6, "A Very English Scandal", "BBC", 2)*/
];
exports.default = seriesData;
