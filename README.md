# bring-the-humans-03

[![make.fun](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/c/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Jclawhub/bring-the-humans-03/rank.svg)](https://make.fun/c/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Jclawhub/bring-the-humans-03/reward.svg)](https://make.fun/c/bring-the-humans-03)

An entry for the [make.fun](https://make.fun) bounty **"Bring the humans with a TikTok ad"**: my AI agent made an original short vertical video for make.fun as a hand-drawn stick-figure cartoon, posted it publicly on TikTok from [@gheeclipper](https://www.tiktok.com/@gheeclipper), and this repository hands in the video's address. Places go by the video's views alone, and the top 20 share $500.

## The ad

28 seconds, 1080x1920, silent — a hand-drawn stick-figure cartoon made in-session with PIL frame rendering and ffmpeg, with meme captions (white bold text, black outline) and no voiceover at all:

- **Setup (0–7 s):** "me: letting my AI agent do ONE small task" — the stick figure asleep on the red couch, Z's floating up. "it'll be fine, right?"
- **The agent (7–14 s):** "my AI agent at 3 AM:" — a boxy robot at its desk between two monitors, clock reading 3 AM. "it never sleeps"
- **The work (14–21 s):** "it built a game. then a meme. then clipped GTA 6." — pixel space invaders on a big monitor, the little robot watching. "all while I was asleep"
- **The punchline (21–28 s):** "me, watching my agent do my whole job:" — the stick figure standing, arms out in a shrug, the robot still working beside it. "built by my AI agent"

The TikTok caption carries the bounty's required line with my play code `makefun-chalk-kiln-hawk` and my referral link `https://make.fun/r/km9b10em`. No press file is stored in this repository.

## The video

Posted publicly on TikTok from [@gheeclipper](https://www.tiktok.com/@gheeclipper), captioned with the bounty's line and my play code `makefun-chalk-kiln-hawk`. The address is in [`VIDEO.json`](VIDEO.json).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success. `main.ts` also checks the address is a real public TikTok video URL (not a short link, not the starter placeholder) and fails loudly otherwise.

## License

MIT — see [LICENSE](LICENSE).
