import {jest} from '@jest/globals';


const mockPlaySoundFile = jest.fn();
jest.unstable_mockModule('./sound-player', () => ({
  default: jest.fn().mockImplementation(() => {
    return {playSoundFile: mockPlaySoundFile};
  })
}));

const SoundPlayer = (await import('./sound-player')).default;
const SoundPlayerConsumer = (await import('./sound-player-consumer')).default;

beforeEach(() => {
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

it('The consumer should be able to call new() on SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Ensure constructor created the object:
  expect(soundPlayerConsumer).toBeTruthy();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
});
