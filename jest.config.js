
// jest.config.js
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const fs = require('fs');
const jsonBuffer =  fs.readFileSync('./tsconfig.json');
const jsonString = jsonBuffer.toString();

//todo 使用正则去除json文件中的注释，即去掉行也去掉块级的注释
const regex = "(?<!:)\\/\\/.*|\\/\\*(\\s|.)*?\\*\\/";
// 去除JOSN字符串的注释

let tsconfigObj;
try{
  tsconfigObj =  JSON.parse(jsonString);
}catch (e) {
  console.warn("检查tsconfig.json是否为标准json文件，请不要在json文件中使用注释，末行不要加逗号");
  console.error(e);
  return
}
module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  coverageDirectory: "coverage",

  moduleNameMapper: pathsToModuleNameMapper(tsconfigObj.compilerOptions.paths  ),

  moduleNameMapper:{
    '^@App/(.*)$': '<rootDir>/src/$1',
    '^lib/(.*)$': '<rootDir>/common/$1'
  },
  
  preset: 'ts-jest',

  testEnvironment: "node",

};
