import { pipe } from 'fp-ts/function';
import * as Ref from 'fp-ts/Ref';
import * as O from 'fp-ts/Option';
import { IO } from 'fp-ts/IO';

const playAudio =
  (audioRef: Ref.Ref<Audio>, src: string): IO<void> =>
  () => {
    // Stop the currently playing audio
    audioRef.value.pause();
    audioRef.value.currentTime = 0;

    // Update the audio source and play
    audioRef.value.src = src;
    audioRef.value.play();
  };

const initAudioPlaybackTool = (
  buttonId: string,
  audioSrc: string
): IO<void> => {
  const audioRef = Ref.unsafeRef(new Audio());

  return pipe(
    buttonId,
    document.getElementById, // HTMLElement | null
    O.fromNullable, // Option<HTMLElement>
    O.fold(
      () => {
        console.warn(`Button with ID '${buttonId}' not found`);
        return () => {}; // No-op IO
      },
      (button: HTMLElement) => {
        button.addEventListener('click', () => {
          playAudio(audioRef, audioSrc)();
        });

        return () => {}; // No-op IO
      }
    )
  );
};
