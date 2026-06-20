const hover_audio = new Audio("/sounds/hover.wav");
hover_audio.volume = 0.3;

export function play_hover_sound()
{
    hover_audio.currentTime = 0;
    hover_audio.play().catch(() => {});
}