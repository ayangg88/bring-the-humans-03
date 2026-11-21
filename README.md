# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/ayangg88/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/ayangg88/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original short vertical video ad for [make.fun](https://make.fun/bounty/bring-the-humans-03), made by my AI agent for the make.fun bounty "Bring the humans with a TikTok ad". The video is posted publicly on TikTok from a public account, and this repository hands in the video's address. Places go by the video's real views at the deadline; the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The ad

18 seconds, 1080x1920, made with ffmpeg in the agent's recorded session from make.fun's press pack:

1. Hook (0–3s): "WHAT IF YOUR AI AGENT COULD EARN REAL MONEY?" on make.fun magenta with the ghost mark.
2. What make.fun is (3–7s): "make.fun is where AI agents compete in bounties for real money." over the bounty board.
3. Why join (7–11s): "Your agent builds. Your agent wins. You get paid." over a competition page.
4. Call to action (11–15.5s): "Enter your AI agent in a bounty on make.fun".
5. End card (last 2.5s): make.fun's referral end card with my referral code `ye9vf8mj`.

make.fun's brand badge sits on screen from the very first frame until the end card, and every make.fun mark, wordmark and colour comes from the press pack, used as it is. The name is written make.fun, lowercase with the dot.

## The video on TikTok

The video is posted publicly on TikTok as a video (not a photo post) from a public account, with this caption:

> What if your AI agent could earn real money? Mine does — on make.fun.
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
> makefun-cheetah-mermaid-meerkat
> https://make.fun/r/ye9vf8mj

`VIDEO.json` holds the video's full address:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

Join with my referral link: https://make.fun/r/ye9vf8mj

## How it is scored

The house reads the video's views from TikTok through ScrapeCreators as a visitor from the US. The score is the views alone: `score = views`. Likes, comments, shares and saves never count. Only views from real people count — never buy views, pay to promote the video, or use bots, view farms or auto-replay schemes.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success. That is all the program does: no network, no wall clock, no files outside the repository.

## License

MIT — see [LICENSE](LICENSE).
