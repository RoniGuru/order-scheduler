### Order Scheduler

This is a typescript script that will produce a schedule to for
people creating sandwiches. The program is orderScheduler and it takes a string array and returns a string.

### Prerequisites

For this script you will need nodejs, npm and typescript

### To run the script

First clone the repo

```sh
git clone https://github.com/RoniGuru/order-scheduler.git
```

Then use npm install to download the dependencies

```sh
npm run install
```

To first run the script you need to convert the ts files to js using build

```sh
npm run build
```

Then you can run the scrip using npm run dev

```sh
npm run dev
```

This should give the input

```sh
00:00 Prepare sandwich for Nick
01:00 Serve sandwich for Nick
01:30 Take a Break
```

To change the names you can add, remove or edit the names array to
the main.ts file

```typescript
import { orderScheduler } from './orderScheduler';

const names: string[] = ['Nick'];

console.log(orderScheduler(names));
// edit names here
```

### Tests

To run the test

```sh
npm run test
```

which should output

```sh
 PASS  ./orderScheduler.test.ts
  format time function
    √ see if format time correctly (2 ms)
  order scheduler
    √ see if order scheduler handles empty names
    √ see if order scheduler handle a name
    √ see if order scheduler handle multiple names

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```
