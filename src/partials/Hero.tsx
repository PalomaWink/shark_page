import {
  GradientText,
  HeroAvatar,
  HeroSocial,
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
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial src="/assets/images/twitch.svg" alt="Twitch icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/youtube.svg" alt="Youtube icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/tiktok.svg" alt="TikTok icon" />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/instagram.svg"
              alt="Instagram icon"
            />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/discord.svg" alt="Discord icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/twitterX.png" alt="Twitter icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/facebook.svg" alt="Facebook icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
