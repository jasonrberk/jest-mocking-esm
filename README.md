# jest-mocking-esm
trying to get the examples published by Jest to actually work for ESM

[Jest Issues](https://github.com/facebook/jest/issues?q=is%3Aissue+is%3Aopen+esm) is filled with issues involving ESM

[Jest Docs](https://jestjs.io/docs/es6-class-mocks) say they can mock ES6 classes and have a [Complete Example](https://jestjs.io/docs/es6-class-mocks#complete-example) which is what I copied here and tried to get working

The [Mocking Modules Docs](https://jestjs.io/docs/mock-functions#mocking-modules) once again make it seem like mocking things like `Axios` work "out of the box"....

[Other Jest Docs](https://jestjs.io/docs/ecmascript-modules) seem to indicate it just doesn't work:
>Please note that we currently don't support jest.mock in a clean way in ESM, but that is something we intend to add proper support for in the future. Follow this issue for updates.

I can't get the provide example to work!!  What am I doing wrong????

## Usage

1. clone the repo
1. `cd` into the rep
1. run `npm run test`

## Results

```
➜  repos/poc/jest-testing (main) ✗ > npm run test

> jest-testing@1.0.0 test
> NODE_OPTIONS=--experimental-vm-modules npx jest

(node:6018) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 FAIL  src/sound-player-consumer.test.js
  ✕ The consumer should be able to call new() on SoundPlayer (1 ms)
  ✕ We can check if the consumer called the class constructor
  ✕ We can check if the consumer called a method on the class instance (1 ms)

  ● The consumer should be able to call new() on SoundPlayer

    TypeError: SoundPlayer.mockClear is not a function

      11 |
      12 | beforeEach(() => {
    > 13 |   SoundPlayer.mockClear();
         |               ^
      14 |   mockPlaySoundFile.mockClear();
      15 | });
      16 |

      at Object.<anonymous> (src/sound-player-consumer.test.js:13:15)

  ● We can check if the consumer called the class constructor

    TypeError: SoundPlayer.mockClear is not a function

      11 |
      12 | beforeEach(() => {
    > 13 |   SoundPlayer.mockClear();
         |               ^
      14 |   mockPlaySoundFile.mockClear();
      15 | });
      16 |

      at Object.<anonymous> (src/sound-player-consumer.test.js:13:15)

  ● We can check if the consumer called a method on the class instance

    TypeError: SoundPlayer.mockClear is not a function

      11 |
      12 | beforeEach(() => {
    > 13 |   SoundPlayer.mockClear();
         |               ^
      14 |   mockPlaySoundFile.mockClear();
      15 | });
      16 |

      at Object.<anonymous> (src/sound-player-consumer.test.js:13:15)

Test Suites: 1 failed, 1 total
Tests:       3 failed, 3 total
Snapshots:   0 total
Time:        0.444 s, estimated 1 s
```
