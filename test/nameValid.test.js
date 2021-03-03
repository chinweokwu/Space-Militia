import nameValidation from '../src/helpers/nameValid';

describe('Validation', () => {
  it('Displays Militia when playername is empty', () => {
    expect(nameValidation('')).toBe('Militia');
  });

  it('Displays Militia when playername is filled with gaps', () => {
    expect(nameValidation('   ')).toBe('Militia');
  });

  it('Displays Playername', () => {
    expect(nameValidation('  PlayerNameWithGaps  ')).toBe('NameWithSpaces');
  });

  it('Displays Playername', () => {
    expect(nameValidation('PlayerNameWithNoGaps')).toBe('NameWithNoSpaces');
  });
});
