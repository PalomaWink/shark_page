import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          E ae pessoal, eu sou o <GradientText>Shark</GradientText> 🦈
        </>
      }
      description={
        <>
          Desenvolvedor de software e gamer apaixonado, transformo conhecimento
          técnico em diversão nas streams. <br />
          <span className="mr-2 text-cyan-400 hover:underline">
            Expertise em Desenvolvimento:
          </span>
          Mais que jogar, exploro os jogos com olhar de desenvolvedor. <br />
          <span className="mr-2 text-cyan-400 hover:underline">
            Conteúdo Variado:
          </span>
          Dicas de programação, insights de desenvolvimento de jogos e pitadas
          de marketing digital. <br />
          <span className="mr-2 text-cyan-400 hover:underline">
            Comunidade:
          </span>
          Junte-se ao CARDUME (sim, tubarão é PEIXE, igual ao Fofuxo) 🐠🐟
        </>
      }
      avatar={
        <img
          className="h-auto w-64 rounded-3xl"
          src="/assets/images/avatar.png"
          alt="Avatar"
          loading="lazy"
        />
      }
      socialButtons={
        <div className="flex w-2/3 justify-evenly">
          <a href="/" aria-label="Visite a página do Twitch">
            <img
              src="/assets/images/twitch.svg"
              alt="Twitch icon"
              className="w-12"
            />
          </a>
          <a href="/" aria-label="Visite a página do Youtube">
            <img
              src="/assets/images/youtube.svg"
              alt="Youtube icon"
              className="w-12"
            />
          </a>
          <a href="/" aria-label="Visite a página do TikTok">
            <img
              src="/assets/images/tiktok.svg"
              alt="TikTok icon"
              className="w-12"
            />
          </a>
          <a href="/" aria-label="Visite a página do Instagram">
            <img
              src="/assets/images/instagram.svg"
              alt="Instagram icon"
              className="w-12"
            />
          </a>
          <a href="/" aria-label="Visite a página do Discord">
            <img
              src="/assets/images/discord.svg"
              alt="Discord icon"
              className="w-12"
            />
          </a>
          <a href="/" aria-label="Visite a página do Twitter">
            <img
              src="/assets/images/twitterX.png"
              alt="Twitter icon"
              className="w-12"
            />
          </a>
          <a href="/" aria-label="Visite a página do Facebook">
            <img
              src="/assets/images/facebook.svg"
              alt="Facebook icon"
              className="w-12"
            />
          </a>
        </div>
      }
    />
  </Section>
);

export { Hero };
