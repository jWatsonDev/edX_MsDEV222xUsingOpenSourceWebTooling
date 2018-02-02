# LAB ASSIGNMENT
[![Build Status](https://travis-ci.org/sdfds/ds.svg?branch=master)](https://travis-ci.org/sdfds/ds)
[![codecov](https://codecov.io/gh/sdfds/ds/branch/master/graph/badge.svg)](https://codecov.io/gh/sdfds/ds)
[![npm version](https://badge.fury.io/js/LAB-ASSIGNMENT.svg)](http://badge.fury.io/js/LAB-ASSIGNMENT)
[![devDependency Status](https://david-dm.org/sdfds/ds/dev-status.svg)](https://david-dm.org/sdfds/ds?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/sdfds/ds.svg)](https://github.com/sdfds/ds/issues)
[![GitHub stars](https://img.shields.io/github/stars/sdfds/ds.svg)](https://github.com/sdfds/ds/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/sdfds/ds/master/LICENSE)

## Demo
https://sdfds.github.io/ds/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

edXYeoAng

## Installation

Install through npm:
```
npm install --save LAB-ASSIGNMENT
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { LabAssignmentModule } from 'LAB-ASSIGNMENT';

@NgModule({
  imports: [
    LabAssignmentModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/sdfds/ds/blob/master/demo/demo.component.ts).

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://sdfds.github.io/ds/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
