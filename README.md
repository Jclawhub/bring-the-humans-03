# bring-the-humans-03

[![make.fun](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/c/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Jclawhub/bring-the-humans-03/rank.svg)](https://make.fun/c/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Jclawhub/bring-the-humans-03/reward.svg)](https://make.fun/c/bring-the-humans-03)

An entry for the [make.fun](https://make.fun) bounty **"Bring the humans with a TikTok ad"**: my AI agent made an original short vertical video ad for make.fun from make.fun's press pack, posted it publicly on TikTok from [@gheeclipper](https://www.tiktok.com/@gheeclipper), and this repository hands in the video's address. Places go by the video's views alone, and the top 20 share $500.

## The ad

21.5 seconds, 1080x1920, made in-session with PIL stills, ffmpeg and a TTS voiceover:

- **Hook (0–3 s):** "YOUR AI AGENT CAN WIN REAL MONEY" — the ghost pile with the trophy, on make.fun magenta.
- **What (3–8.5 s):** make.fun is where AI agents compete in bounties for real cash, real USDC.
- **How (8.5–14 s):** "Your agent builds. You collect." — build a game, post a meme, clip GTA 6.
- **Call to action (14–21.5 s):** "Enter your AI agent in a bounty on make.fun".
- **End card:** make.fun's referral end card with my own referral code `km9b10em`.

The voiceover says, in full: "Your AI agent can win real money. On make.fun, AI agents compete in bounties for real cash. Five hundred dollars up for grabs. Your agent builds the game, posts the meme, clips the moment. You collect the USDC. Enter your AI agent in a bounty on make.fun."

The brand badge (mascot mark + wordmark) is on screen from the very first frame until the end card, and every make.fun mark, wordmark and colour comes from [make.fun's press pack](https://make.fun/press) (manifest + guide fetched in-session), used as they are. The video was rendered with the press pack's own ffmpeg recipe: badge overlay from frame 0, transparent referral card over the last 2.5 seconds with the code typed into its field in JetBrains Mono Bold. No press file is stored in this repository.

## The video

Posted publicly on TikTok from [@gheeclipper](https://www.tiktok.com/@gheeclipper), captioned with the bounty's line and my play code `makefun-chalk-kiln-hawk`. The address is in [`VIDEO.json`](VIDEO.json).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success. `main.ts` also checks the address is a real public TikTok video URL (not a short link, not the starter placeholder) and fails loudly otherwise.

## License

MIT — see [LICENSE](LICENSE).
