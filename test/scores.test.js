import { getResults, submitResults } from '../src/helpers/scores';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    result: [
      { name: 'paul', score: 100 },
      { name: 'zak', score: 1158 },
      { name: 'james', score: 20 }],
  }),
}));

beforeEach(() => {
  fetch.mockClear();
});

describe('Player Scores', () => {
  it('Displays a promise', () => {
    expect(getResults() instanceof Promise).toBeTruthy();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Displays a list of sorted results', () => {
    getResults()
      .then(result => expect(result[0].score > result[1].score).toBeTruthy());
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('Result Submitted', () => {
  it('fetches API when results is greater than zero', () => {
    submitResults('Positive', 1010);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it("Doesn't fetch an API call when results is zero", () => {
    submitResults('Neutral', 0);
    expect(fetch).toHaveBeenCalledTimes(0);
  });
  it("Doesn't fetch an API call when results less than zero", () => {
    submitResults('Negative', -5);
    expect(fetch).toHaveBeenCalledTimes(0);
  });
});