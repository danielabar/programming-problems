Programming Problems
==========

> A TDD approach to [Five programming problems every Software Engineer should be able to solve in less than 1 hour](https://blog.svpino.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour)

## Usage

```bash
npm install
npm test
```

## Notes

### Problem 3 - Fibonnaci

Ran into a little snag with this one using JavaScript. After around the 70th number in the sequence,
goes over the [max value that can be represented](http://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin). So my solution only goes up to the first 70 Fibonnaci numbers.

Next issue was how to generate the expected results for the TDD approach.
Obviously can't use the actual code because
* The test needs to be written first
* It would be a self fulfilling prophecy.

The solution I went with is to use this [online tool](http://www.miniwebtool.com/list-of-fibonacci-numbers/?number=70),
then [scrape](util/scrape.js) the html output to generate an array.

### Test Output - Mocha

[Mocha](http://mochajs.org/) is used for unit testing.

If you're using [iTerm2](https://www.iterm2.com/) with [Solarized Dark](http://ethanschoonover.com/solarized),
some of the test output does not display. As explained [here](https://github.com/mochajs/mocha/issues/802),
the easiest solution is to bump up the contrast in iTerm2 (Preferences -> Profiles -> Colors -> Minimum contrast).
